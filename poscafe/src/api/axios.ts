import axios from "axios";
import { API_BASE_URL } from "./config";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (originalRequest?.url?.includes("Auth/refresh-token")) {
            return Promise.reject(error);
        }
        if (error.response?.status === 401 && !originalRequest?._retry) {
            if (originalRequest) {
                originalRequest._retry = true;
            }
            const storedRefreshToken = localStorage.getItem("refreshToken");
            if (!storedRefreshToken) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("user");
                return Promise.reject(error);
            }
            try {
                const response = await axios.post(`${API_BASE_URL}Auth/refresh-token`, {
                    refreshToken: storedRefreshToken
                });
                const { token, refreshToken } = response.data;
                localStorage.setItem("accessToken", token);
                localStorage.setItem("refreshToken", refreshToken);
                localStorage.setItem("user", JSON.stringify(response.data));
                
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("user");
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);