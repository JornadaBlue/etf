import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Files table for storing course materials and uploads
 */
export const files = mysqlTable("files", {
  id: int("id").autoincrement().primaryKey(),
  /** Original filename */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** S3 file key (path) */
  fileKey: varchar("fileKey", { length: 512 }).notNull().unique(),
  /** Public URL to access the file */
  url: text("url").notNull(),
  /** MIME type */
  mimeType: varchar("mimeType", { length: 100 }),
  /** File size in bytes */
  size: int("size"),
  /** Category: course_material, image, document, etc */
  category: varchar("category", { length: 50 }),
  /** User who uploaded the file */
  uploadedBy: int("uploadedBy").references(() => users.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type File = typeof files.$inferSelect;
export type InsertFile = typeof files.$inferInsert;