import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    upload: protectedProcedure
      .input(z.object({
        filename: z.string(),
        content: z.string(), // base64 encoded
        mimeType: z.string(),
        category: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        const { storagePut } = await import("./storage");
        const { createFile } = await import("./fileDb");
        
        // Decode base64
        const buffer = Buffer.from(input.content, 'base64');
        
        // Generate unique file key
        const timestamp = Date.now();
        const randomSuffix = Math.random().toString(36).substring(7);
        const fileKey = `course-materials/${timestamp}-${randomSuffix}-${input.filename}`;
        
        // Upload to S3
        const { url } = await storagePut(fileKey, buffer, input.mimeType);
        
        // Save metadata to database
        const fileId = await createFile({
          filename: input.filename,
          fileKey,
          url,
          mimeType: input.mimeType,
          size: buffer.length,
          category: input.category,
          uploadedBy: ctx.user.id,
        });
        
        return { id: fileId, url };
      }),
    
    list: protectedProcedure
      .input(z.object({ category: z.string().optional() }).optional())
      .query(async ({ input }) => {
        const { listFiles } = await import("./fileDb");
        return await listFiles(input?.category);
      }),
    
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const { deleteFile } = await import("./fileDb");
        await deleteFile(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
