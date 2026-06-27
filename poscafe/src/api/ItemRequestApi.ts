import type { requestitemtype } from "../Types/Types";
import { api } from "./axios";

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