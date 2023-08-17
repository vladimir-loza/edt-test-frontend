import axios from "axios";

export const edtClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})