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
