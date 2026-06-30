import { createContext } from "react";
import type { formActionType, settingsType } from "../Types/Types";

export const FormAction = createContext<formActionType>({
  formAction: "add",
  setFormAction: () => { },
});

export const SettingsConfig = createContext<settingsType>({
  setting: {
    cafeName: "POS Cafe",
    cafeTagline: "Point of Sale System",
    currency: "₹",
    taxRate: 10,
    enableReceipt: true,
    enableNotifications: true,
    language: "en",
    theme: "light"
  },
  setSetting: () => { },
});