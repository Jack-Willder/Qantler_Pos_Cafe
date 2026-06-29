import type { User, CreateUserRequest } from "../Types/Types";
import { api } from "./axios";

export const getAllUsers = async (): Promise<User[]> => {
    const response = await api.get(`User/`);
    return response.data;
}

export const createUser = async (userData: CreateUserRequest): Promise<User> => {
    const response = await api.post(`User/`, userData);
    return response.data;
}

export const deleteUser = async (userId: number): Promise<void> => {
    const response = await api.delete(`User/${userId}`);
    return response.data;
}

export const toggleUserStatus = async (userId: number): Promise<User> => {
    const response = await api.patch(`User/${userId}/toggle-status`);
    return response.data;
}