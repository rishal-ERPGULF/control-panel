import exp from "constants";
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

export const getAllUsers = async () => {
  try {
    const { data } = await AdminApi.get("/user/get-all/0");
    return data.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Failed to fetch users"));
  }
};

export const enableDisableUser = async (id: string, value: string) => {
  try {
    const { data } = await AdminApi.post(`/user/enable-disable-user`, {
      user_id: id,
      value,
    });
    return Promise.resolve(data.data.message);
  } catch (error) {
    return Promise.reject(new Error("Failed to enable/disable user"));
  }
};
interface userRegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
  qid?: string;
}

export const NewUserRegister = async (formData: userRegisterForm) => {
  try {
    await AdminApi.post("/user/register", formData);
    return Promise.resolve();
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Failed to register user"));
  }
};

export const getAllCities = async () => {
  try {
    const { data } = await AdminApi.get("/city/");
    return data.data;
  } catch (error) {
    return Promise.reject(new Error("Failed to fetch cities"));
  }
};
export const addCity = async (name: string, name_in_arabic: string) => {
  try {
    await AdminApi.post("/city/", {
      name,
      name_in_arabic,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to add city"));
  }
};

export const deleteCity = async (id: string) => {
  try {
    await AdminApi.delete(`/city/${id}`);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to delete city"));
  }
};
export const editCity = async (
  name: string,
  name_in_arabic: string,
  id: string
) => {
  try {
    await AdminApi.put(`/city/${id}`, {
      name,
      name_in_arabic,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to add city"));
  }
};

export const getAllFeatures = async () => {
  try {
    const { data } = await AdminApi.get("/attributes/");
    return data.data;
  } catch (error) {
    return Promise.reject(new Error("Failed to fetch features"));
  }
};

export const addFeature = async (name: string, name_in_arabic: string) => {
  try {
    await AdminApi.post("/attributes/", {
      name,
      name_in_arabic,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to add feature"));
  }
};

export const deleteFeature = async (id: string) => {
  try {
    await AdminApi.delete(`/attributes/${id}`);
    return Promise.resolve();
  } catch (error) {
    console.error(`Error deleting feature: ${error}`);
    return Promise.reject(new Error("Failed to delete feature"));
  }
};
export const editFeature = async (
  name: string,
  name_in_arabic: string,
  id: string
) => {
  try {
    await AdminApi.put(`/attributes/${id}`, {
      name,
      name_in_arabic,
    });
    return Promise.resolve();
  } catch (error) {
    console.error(`Error editing feature: ${error}`);
    return Promise.reject(new Error("Failed to edit feature"));
  }
};

export const getAllUsersBids = async (id: string) => {
  try {
    const { data } = await AdminApi.get(`/bids/${id}/0`);
    return data.data;
  } catch (error) {
    return Promise.reject(new Error("Failed to fetch bids"));
  }
};

export const getAllCarBrand = async () => {
  try {
    const { data } = await AdminApi.get("/brand");
    return data.data;
  } catch (error) {
    return Promise.reject(new Error("Failed to fetch car brands"));
  }
};

export const addCarBrand = async (name: string, name_in_arabic: string) => {
  try {
    await AdminApi.post("/brand", {
      name,
      name_in_arabic,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to add car brand"));
  }
};

export const deleteCarBrand = async (id: string) => {
  try {
    await AdminApi.delete(`/brand/${id}`);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to delete car brand"));
  }
};

export const editCarBrand = async (
  name: string,
  name_in_arabic: string,
  id: string
) => {
  try {
    await AdminApi.put(`/brand/${id}`, {
      name,
      name_in_arabic,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to edit car brand"));
  }
};

export const getAllCarModels = async (id: string) => {
  try {
    const { data } = await AdminApi.get(`/models/${id}`);
    return data.data;
  } catch (error) {
    return Promise.reject(new Error("Failed to fetch car models"));
  }
};

export const addCarModel = async (id: string, name: string) => {
  try {
    await AdminApi.post(`/models`, {
      name,
      brand_id: id,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error("Failed to add car model"));
  }
};
