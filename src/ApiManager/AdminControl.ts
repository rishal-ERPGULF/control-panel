import AdminApi from "./ApiManger";
import { loginForm } from "./Types/AdminType";

// middleware to add token to every request
AdminApi.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// middleware to refresh token if expired
const refreshAccessToken = async () => {
  try {
    const refresh_token = localStorage.getItem("refresh_token");
    const { data } = await AdminApi.post("/admin/refresh-token", {
      refresh_token,
    });
    localStorage.setItem("access_token", data.data?.access_token);
    localStorage.setItem("refresh_token", data.data?.refresh_token);
    return data.data;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return Promise.reject(new Error("Failed to refresh token"));
  }
};
let refreshPromise: Promise<any> | null = null;
// Function to clear the refresh promise and reset the flag
const clearRefreshPromise = () => {
  refreshPromise = null;
};
AdminApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        if (!refreshPromise) {
          refreshPromise = refreshAccessToken().finally(clearRefreshPromise);
        }
        const token = await refreshPromise;
        originalRequest.headers.Authorization = `Bearer ${token.access_token}`;
        return AdminApi(originalRequest);
      } catch (error) {
        console.error("Error refreshing token:", error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export const AdminLogin = async (formData: loginForm) => {
  try {
    const { data } = await AdminApi.post("/admin/sign-in", formData);
    localStorage.setItem("access_token", data.data?.access_token);
    localStorage.setItem("refresh_token", data.data?.refresh_token);
    const { name, last_name, id } = data.data;
    return Promise.resolve({ name, last_name, id });
  } catch (error) {
    return Promise.reject(new Error("Login Failed"));
  }
};

export const fetchAllUsers = async () => {
  try {
    const { data } = await AdminApi.get("/user/get-all/0");
    return data.data;
  } catch (error) {
    return Promise.reject(new Error("Failed to fetch users"));
  }
};
