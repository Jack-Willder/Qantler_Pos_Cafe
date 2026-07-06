import { api } from "./axios";
import type { LoginRequest, RegisterRequest, AuthResponse, User, CreateUserRequest, checkouttype, invitemtype, requestitemtype } from "../Types/Types";


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


export const GetAllBill = async () => {
    const response = await api.get(`Billing/`);
    return response.data;
}

export const GetBill = async (itemCode: string) => {
    const response = await api.get(`Billing/${itemCode}`);
    return response.data;
}

export const CreateBill = async (item: checkouttype[]) => {
    const requestBody = {
        customerName: "Walk-In-Customer",
        soldAt: "24-JUN-2026",
        createdByUserId: 1,
        billItems: item.map((i) => ({
            itemCode: i.itemcode,
            itemName: i.itemname,
            itemImage: i.image,
            unitPrice: i.price,
            quantity: i.quantity
          }))
    }
    const response = await api.post(`Billing/`, requestBody);
    return response.data;
}


export const GetItemCode = async () => {
    const response = await api.get(`Inventory/ItemCode`);
    return response.data.itemCode;
}


export const GetAllInventory = async () => {
    const response = await api.get(`Inventory/`);
    return response.data;
}

export const GetInventory = async (itemCode: string) => {
    const response = await api.get(`Inventory/${itemCode}`);
    return response.data;
}

export const CreateInventory = async (item: invitemtype) => {
    if (item?.itemCode) {
        const {itemCode, ...newitem} = item;
        console.log("creating", newitem);
        const response = await api.post(`Inventory/`, newitem);
        return response.data;
    }
}

export const UpdateInventory = async (item: invitemtype) => {
    if (item?.itemCode) {
        const { itemCode, ...newitem } = item;
        const response = await api.put(`Inventory/${itemCode}`, newitem);
        return response.data;
    }
}

export const DeleteInventory = async (itemCode: string) => {
    const response = await api.delete(`Inventory/${itemCode}`);
    return response.data;
}


export const GetRequestId = async () => {
    const response = await api.get("Requests/RequestId");
    return response.data.requestId;
}

export const GetAllRequests = async () => {
    const response = await api.get(`Requests/`);
    return response.data;
}

export const GetRequest = async (requestId: string) => {
    const response = await api.get(`Requests/${requestId}`);
    return response.data;
}

export const CreateRequest = async (request: requestitemtype) => {
    const response = await api.post(`Requests/`, request);
    return response.data;
}

export const UpdateRequest = async (request: requestitemtype) => {
    const response = await api.put(`Requests/${request.requestId}`, request);
    return response.data;
}

export const DeleteRequest = async (requestId: string) => {
    const response = await api.delete(`Requests/${requestId}`);
    return response.data;
}

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