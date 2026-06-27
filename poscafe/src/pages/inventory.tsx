import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormAction } from "../Context/Context";
import { Pagination } from "../Helper/Pagination";
import { getPaginatedItems } from "../Helper/PaginationUtils";
import { InventoryFilterBar } from "../features/inventory/InventoryFilterBar";
import { InventoryTable } from "../features/inventory/InventoryTable";
import { GetAllInventory } from "../api/InventoryApi";
import type { invitemtype, InventoryFilterData } from "../Types/Types";

export default function Inventory() {
  const { setFormAction } = useContext(FormAction);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentpage, setCurrentPage] = useState(1);
  const [itemsperpage, setItemsPerPage] = useState(10);
  const [allInventory, setAllInventory] = useState<invitemtype[]>([]);
  const [inventorylist, setInventorylist] = useState<invitemtype[]>([]);
  const [filterData, setFilterData] = useState<InventoryFilterData>({
    category: "",
    status: "",
    item: "",
    dateFrom: "2024-05-20",
    dateTo: "2024-05-20",
  });

  useEffect(() => {
    GetAllInventory()
      .then((response) => {
        setInventorylist(response);
        setAllInventory(response);
      })
  }, [location.pathname]);

  // function getStoredInventory() {
  //   const inventory = localStorage.getItem("inventory");
  //   if (!inventory) {
  //     localStorage.setItem("inventory", JSON.stringify(initialInventory));
  //     return initialInventory;
  //   }
  //   return JSON.parse(inventory);
  // }

  function handleChangeContent(path: string, item?: invitemtype) {
    navigate(path, { state: item });
  }

  function getStockStatus(stock: number) {
    if (stock <= 0) return "Out of Stock";
    if (stock < 10) return "Low Stock";
    return "In Stock";
  }

  const pagelist = getPaginatedItems(inventorylist, currentpage, itemsperpage);

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    if (name === "search") {
      const filtersearch = allInventory.filter((item) => item.itemName.toLowerCase().includes(value.toLowerCase()));
      setInventorylist(value ? filtersearch : allInventory);
      setCurrentPage(1);
      return;
    }

    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function filter() {
    const filteredlist = allInventory.filter((item) => {
      const itemDate = "lastupdated" in item ? new Date(String(item.lastupdated)) : null;
      return (
        (!filterData.item || item.itemName === filterData.item) &&
        (!filterData.status || getStockStatus(item.inStock) === filterData.status) &&
        (!filterData.category || item.category === filterData.category) &&
        (!filterData.dateFrom || !itemDate || itemDate >= new Date(filterData.dateFrom)) &&
        (!filterData.dateTo || !itemDate || itemDate <= new Date(filterData.dateTo))
      );
    });
    setInventorylist(filteredlist);
    setCurrentPage(1);
  }

  function reset() {
    setFilterData({
      category: "",
      status: "",
      item: "",
      dateFrom: "",
      dateTo: "",
    });
    setInventorylist(allInventory);
    setCurrentPage(1);
  }


  return (
    <div className="flex flex-col gap-2">
      <InventoryFilterBar
        allInventory={allInventory}
        filterData={filterData}
        onFilterChange={handleFilterChange}
        onFilter={filter}
        onReset={reset}
      />
      <div className="bg-white rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-3 overflow-hidden flex-col">
        <InventoryTable
          items={pagelist}
          totalItems={inventorylist.length}
          onAddItem={() => {
            setFormAction("add");
            handleChangeContent("/additem");
          }}
          onRequestItem={() => handleChangeContent("/requestitem")}
          onEditItem={(item) => {
            setFormAction("edit");
            handleChangeContent("/additem", item);
          }}
        />
        <Pagination
          currentPage={currentpage}
          itemsPerPage={itemsperpage}
          totalItems={inventorylist.length}
          itemLabel="entries"
          setCurrentPage={setCurrentPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  );
}
