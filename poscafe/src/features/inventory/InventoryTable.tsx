import { IconPosCafe } from "../../Helper/icons";
import type { invitemtype } from "../../Types/Types";
import TableComponent, { type Column } from "../../shared/Table";

type InventoryTableProps = {
  items: invitemtype[];
  totalItems: number;
  onAddItem: () => void;
  onRequestItem: () => void;
  onEditItem: (item: invitemtype) => void;
};

export function InventoryTable({ items, totalItems, onAddItem, onRequestItem, onEditItem }: InventoryTableProps) {
  const columns: Column<invitemtype>[] = [
    {
      header: "Item Name",
      key: "itemName",
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-3">
          {item.itemImage ? (
            <img 
              src={item.itemImage} 
              alt={item.itemName} 
              className="w-5 h-5 rounded-sm object-contain bg-transparent" 
            />
          ) : (
            <div className="w-5 h-5 rounded-sm bg-purple-50 flex items-center justify-center">
              <IconPosCafe icon="cafe" color="purple" size={16} />
            </div>
          )}
          <div className="text-ss-60 font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            {item.itemName}
          </div>
        </div>
      ),
    },
    {
      header: "Category",
      key: "category",
      sortable: true,
      align: "center",
      className: "text-gray-500 font-medium",
    },
    {
      header: "Price",
      key: "price",
      sortable: true,
      align: "center",
      className: "font-black text-gray-950",
      render: (item) => `$${Number(item.price).toFixed(2)}`,
    },
    {
      header: "Unit",
      key: "unit",
      sortable: true,
      align: "center",
      className: "text-gray-500 font-medium",
    },
    {
      header: "Purchased",
      key: "purchased",
      align: "center",
      className: "text-gray-500 font-medium",
      render: (item) => ("purchased" in item ? String((item as any).purchased) : "0"),
    },
    {
      header: "Sold",
      key: "sold",
      align: "center",
      className: "text-gray-500 font-medium",
      render: (item) => ("sold" in item ? String((item as any).sold) : "0"),
    },
    {
      header: "In Stock",
      key: "inStock",
      sortable: true,
      align: "center",
      render: (item) => (
        <span className={getStockTextClass(item.inStock)}>
          {item.inStock}
        </span>
      ),
    },
    {
      header: "Status",
      key: "status",
      align: "center",
      render: (item) => (
        <span className={`inline-flex items-center justify-center text-ss-50 font-bold px-2.5 py-1 rounded-sm ${getStatusBadgeClass(item.inStock)}`}>
          {getStockStatus(item.inStock)}
        </span>
      ),
    },
    {
      header: "Last Updated",
      key: "lastupdated",
      align: "center",
      className: "text-gray-500 font-medium",
      render: (item) => ("lastupdated" in item ? String((item as any).lastupdated) : "20 May 2024"),
    },
  ];

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
      
      <TableComponent
        columns={columns}
        data={items}
        onRowClick={(item) => onEditItem(item)}
        className="w-full mt-2.5"
      />
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
      className={`flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-3 cursor-pointer ${primary ? "bg-gpurple text-white" : "border border-gray-200 bg-white hover:bg-gray-50"}`}
      id={id}
      onClick={onClick}
    >
      <IconPosCafe color={primary ? "white" : icon === "add" ? "purple" : "black"} icon={icon} />
      <span className={`${primary ? "text-white" : icon === "add" ? "text-bviolet1" : "text-black"} text-ss-50 ml-1`}>{label}</span>
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
