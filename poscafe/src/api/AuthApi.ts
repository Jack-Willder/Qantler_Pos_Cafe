import type { LoginRequest, RegisterRequest, AuthResponse } from "../Types/Types";
import { api } from "./axios";

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post(`Auth/login`, credentials);
    return response.data;
}

export const register = async (userData: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post(`Auth/register`, userData);
    return response.data;
}

export const logout = async (): Promise<void> => {
    const response = await api.post(`Auth/logout`);
    return response.data;
}

export const refreshToken = async (refreshToken: string): Promise<AuthResponse> => {
    const response = await api.post(`Auth/refresh-token`, { refreshToken });
    return response.data;
}

export const getCurrentUser = async (): Promise<AuthResponse> => {
    const response = await api.get(`Auth/me`);
    return response.data;
}
