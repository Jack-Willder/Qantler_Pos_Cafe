import type { LoginRequest, RegisterRequest, AuthResponse } from "../Types/Types";
import { api } from "./axios";

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post(`Auth/login`, credentials);
    localStorage.setItem("accessToken", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}

export const register = async (userData: RegisterRequest): Promise<number> => {
    const response = await api.post(`Auth/register`, userData);
    return response.status;
}

export const logout = async (): Promise<void> => {
    const response = await api.post(`Auth/logout`);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    return response.data;
}

export const refreshToken = async (): Promise<AuthResponse> => {
    const response = await api.post(`Auth/refresh-token`);
    return response.data;
}

export const getCurrentUser = async (): Promise<AuthResponse> => {
    const response = await api.get(`Auth/me`);
    return response.data;
}
