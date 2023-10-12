import axios from "axios";

const AdminApi = axios.create({
  baseURL: "https://api.dallahmzad.com/api/v1",
});

export default AdminApi;
