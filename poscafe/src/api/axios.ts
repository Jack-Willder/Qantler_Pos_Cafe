import axios from "axios";
import { API_BASE_URL } from "./config";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

// Request interceptor to add Authorization token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accesstoken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh on 401 Conflict/Unauthorized
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const storedRefreshToken = localStorage.getItem("refreshToken");
                if (storedRefreshToken) {
                    const response = await axios.post(`${API_BASE_URL}Auth/refresh-token`, {
                        refreshToken: storedRefreshToken
                    });
                    const { token, refreshToken } = response.data;
                    localStorage.setItem("accesstoken", token);
                    localStorage.setItem("refreshToken", refreshToken);
                    localStorage.setItem("user", JSON.stringify(response.data));
                    
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return api(originalRequest);
                }
            } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);
                localStorage.removeItem("accesstoken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("user");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);