import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1";

export const login = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const { access_token } = data;
    localStorage.setItem("token", access_token);
    const profile = await getProfile();
    localStorage.setItem("username", profile.name || "");
    localStorage.setItem("role", profile.role || "user");

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return profile;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed");
  }
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found in localStorage");
  }

  try {
    const { data } = await axios.get(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Profile fetch error:", error);
    throw new Error("Failed to fetch user profile");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  localStorage.removeItem("expiration");
};

export const getStoredUsername = (): { username: string; role: "admin" | "user" } => {
  const token = localStorage.getItem("token");
  const storedUsername = localStorage.getItem("username") || "";
  const storedRole = (localStorage.getItem("role") as "admin" | "user") || "user";
  const expiration = localStorage.getItem("expiration");

  if (token && storedUsername && storedRole && expiration && new Date(expiration) > new Date()) {
    return { username: storedUsername, role: storedRole };
  }
  return { username: "", role: "user" };
};
