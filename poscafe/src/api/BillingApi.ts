import type { checkouttype } from "../Types/Types";
import { api } from "./axios";

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