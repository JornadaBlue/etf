import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { FileIcon, Loader2, Trash2, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function FilesAdmin() {
  const { user, loading: authLoading } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("course_material");
  const [uploading, setUploading] = useState(false);

  const { data: files, isLoading, refetch } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Por favor, selecione um arquivo");
      return;
    }

    setUploading(true);
    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = async () => {
        const base64 = reader.result as string;
        const content = base64.split(',')[1]; // Remove data:...;base64, prefix

        await uploadMutation.mutateAsync({
          filename: selectedFile.name,
          content,
          mimeType: selectedFile.type,
          category,
        });

        toast.success("Arquivo enviado com sucesso!");
        setSelectedFile(null);
        refetch();
      };
    } catch (error) {
      toast.error("Erro ao enviar arquivo");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja deletar este arquivo?")) return;

    try {
      await deleteMutation.mutateAsync({ id });
      toast.success("Arquivo deletado com sucesso!");
      refetch();
    } catch (error) {
      toast.error("Erro ao deletar arquivo");
      console.error(error);
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-8 w-8" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="p-8">
          <p className="text-lg">Por favor, faça login para acessar esta página.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Gerenciamento de Arquivos</h1>

      {/* Upload Section */}
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload de Arquivo</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="file">Selecionar Arquivo</Label>
            <Input
              id="file"
              type="file"
              onChange={handleFileSelect}
              className="mt-2"
            />
            {selectedFile && (
              <p className="text-sm text-muted-foreground mt-2">
                Arquivo selecionado: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="category">Categoria</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="course_material">Material do Curso</SelectItem>
                <SelectItem value="image">Imagem</SelectItem>
                <SelectItem value="document">Documento</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="w-full"
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Enviar Arquivo
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Files List */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Arquivos Enviados</h2>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="animate-spin h-8 w-8" />
          </div>
        ) : files && files.length > 0 ? (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <FileIcon className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">{file.filename}</p>
                    <p className="text-sm text-muted-foreground">
                      {file.category} • {file.size ? `${(file.size / 1024).toFixed(2)} KB` : 'Tamanho desconhecido'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(file.url, '_blank')}
                  >
                    Abrir
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(file.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">
            Nenhum arquivo enviado ainda.
          </p>
        )}
      </Card>
    </div>
  );
}

