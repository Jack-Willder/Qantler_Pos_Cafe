import { createContext } from "react";
import type { formActionType } from "../Types/Types";

export const FormAction = createContext<formActionType>({
  formAction: "add",
  setFormAction: () => {},
});