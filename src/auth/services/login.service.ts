export const login = (username: string) => {
    localStorage.setItem("username", username);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
  };
  
  export const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("expiration");
  };
  
  export const getStoredUsername = (): string => {
    const storedUsername = localStorage.getItem("username");
    const expiration = localStorage.getItem("expiration");
    if (storedUsername && expiration && new Date(expiration) > new Date()) {
      return storedUsername;
    }
    return "";
  };
  