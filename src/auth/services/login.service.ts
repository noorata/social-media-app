  export const login = (username: string, role: "admin" | "user") => {
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
  };

  export const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("expiration");
  };
  
  export const getStoredUsername = (): { username: string; role: "admin" | "user" } => {
    const storedUsername = localStorage.getItem("username") || "";
    const storedRole = localStorage.getItem("role") as "admin" | "user" | "user";
    const expiration = localStorage.getItem("expiration");
    if (storedUsername && storedRole && expiration && new Date(expiration) > new Date()) {
      return { username: storedUsername, role: storedRole };
    }
    return { username: "", role: "user" };
  };
  