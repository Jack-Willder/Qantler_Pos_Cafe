import type { invitemtype } from "../Types/Types";
import { api } from "./axios";

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