import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface Module {
  id: number;
  title: string;
  path: string;
}

const modules: Module[] = [
  { id: 1, title: "Módulo 1: O Fim da Ansiedade Financeira", path: "/modulo-1" },
  { id: 2, title: "Módulo 2: O Mapa da Rota", path: "/modulo-2" },
  { id: 3, title: "Módulo 3: A Alocação Estratégica", path: "/modulo-3" },
  { id: 4, title: "Módulo 4: Otimização e Tributação", path: "/modulo-4" },
  { id: 5, title: "Módulo 5: O Próximo Nível", path: "/modulo-5" },
];

interface CourseLayoutProps {
  children: React.ReactNode;
  currentModule: number;
}

export default function CourseLayout({ children, currentModule }: CourseLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  const currentModuleIndex = modules.findIndex((m) => m.id === currentModule);
  const prevModule = currentModuleIndex > 0 ? modules[currentModuleIndex - 1] : null;
  const nextModule = currentModuleIndex < modules.length - 1 ? modules[currentModuleIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center">
              <span className="font-bold text-lg md:text-xl whitespace-nowrap">Rota da Paz Financeira</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </Link>
            <Link href="/club" className="text-sm font-medium transition-colors hover:text-primary">
              Bosio Finance Club
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed md:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background
            transition-transform duration-300 md:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="h-full overflow-y-auto p-4">
            <h2 className="mb-4 text-lg font-semibold">Módulos do Curso</h2>
            <nav className="space-y-2">
              {modules.map((module) => (
                <Link 
                  key={module.id} 
                  href={module.path}
                  className={`
                    block rounded-lg px-3 py-2 text-sm transition-colors
                    ${
                      module.id === currentModule
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  {module.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl py-8">
            {children}

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between border-t pt-8">
              {prevModule ? (
                <Link href={prevModule.path}>
                  <Button variant="outline" className="gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    {prevModule.title}
                  </Button>
                </Link>
              ) : (
                <div />
              )}
              {nextModule ? (
                <Link href={nextModule.path}>
                  <Button className="gap-2">
                    {nextModule.title}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Link href="/club">
                  <Button className="gap-2">
                    Bosio Finance Club
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

