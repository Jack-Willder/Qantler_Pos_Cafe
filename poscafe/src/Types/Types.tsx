export type formActionType = {
  formAction: string,
  setFormAction: CallableFunction
}

export type datetype = {
  date: {
    date: string,
    day: string,
    time: string;
  };
}

export type Request = {
  requestId: string,
  subject: string,
  requestedBy: string,
  requestedDate: string,
  expectingDate: string,
  status: string;
}

export type invitemtype = {
  "itemCode": string,
  "itemImage": string,
  "category": string,
  "unit": string,
  "itemName": string,
  "itemDescription": string,
  "price": number,
  "inStock": number,
  // "oldstock": number,
  "supplier": string;
};

export type checkouttype = {
  image: string,
  itemname: string,
  price: number,
  total: number,
  itemcode: string,
  quantity: number
};

export type PopupProps = {
  show: boolean;
  navigateTo: string;
  message?: string;
  description?: string;
  type: "confirm" | "error" | "delete";
  onSubmit: () => void;
  onCancel: () => void;
};

export type pathstype = {
  [key: string]: React.JSX.Element;
};

export type cafepropstype = {
  icon?: string;
  color?: string;
  size?: number;
};

export type iconlookuptype = {
  [key: string]: string;
};

export type colorlookuptype = {
  [key: string]: { [key: string]: string; };
};

export type InventoryFilterData = {
  category: string;
  status: string;
  item: string;
  dateFrom: string;
  dateTo: string;
};

export type FormSelectProps = {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type FormFieldProps = {
  label: string;
  helper?: string;
  required?: boolean;
  children: React.ReactNode;
};

export type InventoryItemFormProps = {
  formAction: string;
  item: invitemtype;
  generatedItemCode: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onCancel: () => void;
  onSave: () => void;
  onDelete: () => void;
};

export type saleslisttype = {
  billId: number,
  itemCode: string,
  itemName: string,
  quantity: number,
  total: number;
};

export type PriceAmendmentProps = {
  totalAmount: number;
  gstAmount: number;
  payable: number;
  tender: number;
  changeAmount: number;
  onTenderChange: (value: string) => void;
};

export type CheckoutTableProps = {
  checkoutlist: checkouttype[];
  onQuantityChange: (itemcode: string, quantity: number) => void;
  onDeleteItem: (itemcode: string) => void;
};

export type CheckoutPanelProps = {
  checkoutlist: checkouttype[];
  priceAmendment: boolean;
  totalAmount: number;
  gstAmount: number;
  payable: number;
  tender: number;
  changeAmount: number;
  onQuantityChange: (itemcode: string, quantity: number) => void;
  onDeleteItem: (itemcode: string) => void;
  onTenderChange: (value: string) => void;
};

export type requestitemlisttype = {
  itemName: string,
  quantity: number,
  expectedDate: string;
}[];

export type requestitemtype = {
  requestId: string,
  subject: string,
  requestedBy: string,
  requestedDate: string,
  expectingDate: string,
  status: string,
  requestItems: requestitemlisttype;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type RegisterRequest = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthResponse = {
  token: string;
  refreshToken: string;
  user: User;
};

export type User = {
  userId: number;
  fullName: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
};

export type CreateUserRequest = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  role: string;
};