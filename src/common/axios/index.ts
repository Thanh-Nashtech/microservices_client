import axios from "axios";
export default function () {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    }
  });
  instance.interceptors.response.use(
    response => response,
    error => {
      alert(error.response.data.message)
      throw error;
    }
  );

  return instance
}
