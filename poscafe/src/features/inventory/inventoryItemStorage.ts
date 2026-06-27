import type { invitemtype } from "../../Types/Types";

// export function getInventoryItems(): invitemtype[] {
//   return JSON.parse(localStorage.getItem("inventory") || "[]");
// }

// export function saveInventoryItems(items: invitemtype[]) {
//   localStorage.setItem("inventory", JSON.stringify(items));
// }

export function normalizeInventoryItem(item: invitemtype, generatedItemCode: string): invitemtype {
  return {
    ...item,
    itemCode: item.itemCode || generatedItemCode,
    itemImage: item.itemImage.replace("C:\\fakepath\\", "/assets/item-images/"),
    price: Number(item.price),
    inStock: Number(item.inStock),
    supplier: item.supplier || "Local",
  };
}

export function hasEmptyRequiredField(item: invitemtype) {
  return !item.itemCode || !item.category || !item.unit || !item.itemName || !item.itemDescription || !item.itemImage;
}

export function hasDuplicateItemName(items: invitemtype[], item: invitemtype) {
  return items.some(
    (inventoryItem) =>
      inventoryItem.itemCode !== item.itemCode &&
      inventoryItem.itemName.toLowerCase() === item.itemName.toLowerCase()
  );
}
