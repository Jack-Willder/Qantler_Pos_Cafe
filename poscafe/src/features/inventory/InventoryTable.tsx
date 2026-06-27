import { IconPosCafe } from "../../Helper/icons";
import type { invitemtype } from "../../Types/Types";

type InventoryTableProps = {
  items: invitemtype[];
  totalItems: number;
  onAddItem: () => void;
  onRequestItem: () => void;
  onEditItem: (item: invitemtype) => void;
};

export function InventoryTable({ items, totalItems, onAddItem, onRequestItem, onEditItem }: InventoryTableProps) {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="align-ttitle">
          <div className="text-ss-70 font-bold">Inventory List</div>
          <div className="text-gray-500 text-ss-45 lg:text-ss-50">Total {totalItems} items found</div>
        </div>
        <div className="flex gap-3">
          <InventoryToolbarButton id="additem" icon="add" label="Add Item" onClick={onAddItem} />
          <InventoryToolbarButton id="requestitem" icon="download" label="Request Item" variant="primary" onClick={onRequestItem} />
          <InventoryToolbarButton icon="book" label="Export to Excel" />
        </div>
      </div>
      <table className="border-collapse w-full m-2.5 border border-gray-200 rounded-sm">
        <thead>
          <tr>
            {["Item Name", "Category", "Price", "Unit", "Purchased", "Sold", "In Stock", "Status", "Last Updated"].map((heading) => (
              <th key={heading} className="bg-gray-100 p-1 text-ss-55 font-bold">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="border border-gray-100" key={item.itemCode} onClick={() => onEditItem(item)}>
              <td>
                <div className="flex p-2 items-center gap-2">
                  <img src={item.itemImage} alt="coffee" className="w-4.5 h-4.5" />
                  <div className="text-ss-55 text-center">{item.itemName}</div>
                </div>
              </td>
              <td><div className="p-0.5 text-gray-500 text-ss-55 text-center">{item.category}</div></td>
              <td><div className="p-0.5 text-ss-55 text-center">${item.price}</div></td>
              <td><div className="p-0.5 text-gray-500 text-ss-55 text-center">{item.unit}</div></td>
              <td><div className="p-0.5 text-ss-55 text-center">{0}</div></td>
              <td><div className="p-0.5 text-ss-55 text-center">{0}</div></td>
              <td><div className={`p-0.5 text-ss-55 text-center ${getStockTextClass(item.inStock)}`}>{item.inStock}</div></td>
              <td>
                <div className={`text-ss-55 text-center rounded-sm flex items-center justify-center justify-self-center w-fit p-1 px-2 ${getStatusBadgeClass(item.inStock)}`}>
                  {getStockStatus(item.inStock)}
                </div>
              </td>
              <td><div className="p-0.5 text-ss-55 text-center">{"20 May 2024"}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

type InventoryToolbarButtonProps = {
  label: string;
  icon: string;
  id?: string;
  variant?: "default" | "primary";
  onClick?: () => void;
};

function InventoryToolbarButton({ label, icon, id, variant = "default", onClick }: InventoryToolbarButtonProps) {
  const primary = variant === "primary";
  return (
    <div
      className={`flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-3 ${primary ? "bg-gpurple text-white" : "border border-gray-200"}`}
      id={id}
      onClick={onClick}
    >
      <IconPosCafe color={primary ? "white" : icon === "add" ? "purple" : "black"} icon={icon} />
      <span className={`${primary ? "text-white" : icon === "add" ? "text-bviolet1" : "text-black"} text-ss-50`}>{label}</span>
    </div>
  );
}

function getStockStatus(stock: number) {
  if (stock <= 0) return "Out of Stock";
  if (stock < 10) return "Low Stock";
  return "In Stock";
}

function getStockTextClass(stock: number) {
  if (stock <= 0) return "text-red-500";
  if (stock < 10) return "text-orange-500";
  return "text-green-500";
}

function getStatusBadgeClass(stock: number) {
  if (stock <= 0) return "bg-red-100 text-red-500";
  if (stock < 10) return "text-orange-500 bg-orange-100";
  return "bg-green-100 text-green-500";
}
