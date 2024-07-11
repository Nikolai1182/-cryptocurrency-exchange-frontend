import axios from "axios";
const token = sessionStorage.getItem("token");

export const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

export const instanceAuth = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${token}`,
  },
});

export const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    "x-cg-demo-api-key": "CG-w27cokYdWXF5jGDxg6Rw8Soh",
  },
});

// Добавляем перехватчик для каждого запроса
// coinGeckoApi.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("token"); // Или другой метод получения токена
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
