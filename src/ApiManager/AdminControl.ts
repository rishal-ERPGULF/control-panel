import AdminApi from "./ApiManger";
import { loginForm } from "./Types/AdminType";

export const AdminLogin = async (formData: loginForm) => {
  try {
    const { data } = await AdminApi.post("/admin/sign-in", formData);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
