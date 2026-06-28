import type { User, CreateUserRequest, UpdateUserRequest } from "../Types/Types";
import { api } from "./axios";

export const getAllUsers = async (): Promise<User[]> => {
    const response = await api.get(`UserManagement/users`);
    return response.data;
}

export const getUserById = async (userId: number): Promise<User> => {
    const response = await api.get(`UserManagement/users/${userId}`);
    return response.data;
}

export const createUser = async (userData: CreateUserRequest): Promise<User> => {
    const response = await api.post(`UserManagement/users`, userData);
    return response.data;
}

export const updateUser = async (userId: number, userData: UpdateUserRequest): Promise<User> => {
    const response = await api.put(`UserManagement/users/${userId}`, userData);
    return response.data;
}

export const deleteUser = async (userId: number): Promise<void> => {
    const response = await api.delete(`UserManagement/users/${userId}`);
    return response.data;
}

export const toggleUserStatus = async (userId: number): Promise<User> => {
    const response = await api.patch(`UserManagement/users/${userId}/toggle-status`);
    return response.data;
}
