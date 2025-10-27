import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Lista de senhas válidas (será gerenciada pelo admin)
// Em produção, isso virá de um backend
const VALID_PASSWORDS = [
  "CURSO2025",
  "ETFBRASIL",
  "BOSIOFINANCE",
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar se já está autenticado ao carregar
  useEffect(() => {
    const authToken = localStorage.getItem("curso_auth");
    if (authToken && VALID_PASSWORDS.includes(authToken)) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (password: string): boolean => {
    if (VALID_PASSWORDS.includes(password.toUpperCase())) {
      localStorage.setItem("curso_auth", password.toUpperCase());
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("curso_auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

