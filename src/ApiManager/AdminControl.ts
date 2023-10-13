import AdminApi from "./ApiManger";
import { loginForm } from "./Types/AdminType";

export const AdminLogin = async (formData: loginForm) => {
  try {
    const { data } = await AdminApi.post("/admin/sign-in", formData);
    localStorage.setItem("access_token", data.data?.access_token);
    localStorage.setItem("refresh_token", data.data?.refresh_token);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Login Failed"));
  }
};
