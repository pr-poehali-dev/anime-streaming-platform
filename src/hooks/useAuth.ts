import { useState, useEffect, useCallback } from "react";

export interface User {
  id: string;
  username: string;
  isAdmin: boolean;
}

interface AuthData {
  users: Array<{ username: string; password: string; isAdmin: boolean }>;
  currentUser: User | null;
}

const ADMIN_CREDENTIALS = {
  username: "EL?",
  password: "rv5ynupu",
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedAuth = localStorage.getItem("elcore_auth");
    if (savedAuth) {
      const authData: AuthData = JSON.parse(savedAuth);
      setUser(authData.currentUser);
    }
    setIsLoading(false);
  }, []);

  const saveAuthData = useCallback((authData: AuthData) => {
    localStorage.setItem("elcore_auth", JSON.stringify(authData));
  }, []);

  const getAuthData = useCallback((): AuthData => {
    const saved = localStorage.getItem("elcore_auth");
    return saved ? JSON.parse(saved) : { users: [], currentUser: null };
  }, []);

  const login = useCallback(
    async (
      username: string,
      password: string,
    ): Promise<{ success: boolean; error?: string }> => {
      const authData = getAuthData();

      // Проверка админа
      if (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
      ) {
        const adminUser: User = {
          id: "admin",
          username: username,
          isAdmin: true,
        };

        authData.currentUser = adminUser;
        saveAuthData(authData);
        setUser(adminUser);
        return { success: true };
      }

      // Проверка обычных пользователей
      const foundUser = authData.users.find(
        (u) => u.username === username && u.password === password,
      );
      if (foundUser) {
        const loggedUser: User = {
          id: username,
          username: foundUser.username,
          isAdmin: foundUser.isAdmin,
        };

        authData.currentUser = loggedUser;
        saveAuthData(authData);
        setUser(loggedUser);
        return { success: true };
      }

      return { success: false, error: "Неверный логин или пароль" };
    },
    [getAuthData, saveAuthData],
  );

  const register = useCallback(
    async (
      username: string,
      password: string,
    ): Promise<{ success: boolean; error?: string }> => {
      if (username.length < 3)
        return {
          success: false,
          error: "Логин должен содержать минимум 3 символа",
        };
      if (password.length < 6)
        return {
          success: false,
          error: "Пароль должен содержать минимум 6 символов",
        };

      const authData = getAuthData();

      if (authData.users.find((u) => u.username === username)) {
        return {
          success: false,
          error: "Пользователь с таким логином уже существует",
        };
      }

      const newUser = { username, password, isAdmin: false };
      authData.users.push(newUser);

      const registeredUser: User = {
        id: username,
        username,
        isAdmin: false,
      };

      authData.currentUser = registeredUser;
      saveAuthData(authData);
      setUser(registeredUser);

      return { success: true };
    },
    [getAuthData, saveAuthData],
  );

  const logout = useCallback(() => {
    const authData = getAuthData();
    authData.currentUser = null;
    saveAuthData(authData);
    setUser(null);
  }, [getAuthData, saveAuthData]);

  return {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
  };
};
