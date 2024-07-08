import axios from "axios";
// const token = sessionStorage.getItem("token");

export const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    "x-cg-demo-api-key": "CG-w27cokYdWXF5jGDxg6Rw8Soh",
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

// export const cryptoRankInstance = axios.create({
//   baseURL: "https://api.cryptorank.io/v1",
//   timeout: 1000,
//   headers: {
//     "X-Custom-Header": "foobar",
//     Authorization: `Bearer YOUR_ACCESS_TOKEN`,
//   },
// });

// Добавляем перехватчик для каждого запроса
// cryptoRankInstance.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("token"); // Или другой метод получения токена
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
