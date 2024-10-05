import React, { createContext, useContext, useState, ReactNode } from "react";
import { getSessionStorageItem, setSessionStorageItem } from "@/hooks";

export interface UserProps {
  token: string;
  name: string;
  email: string;
}

export interface AppContextType {
  user: UserProps | null;
  logout: () => void;
  setUser: (user: UserProps) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProps | null>(
    getSessionStorageItem("user"),
  );

  const logout = React.useCallback(() => {
    setUser(null);
    setSessionStorageItem("user", null);
  }, []);

  return (
    <AppContext.Provider value={{ user, logout, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
