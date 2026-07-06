import { useEffect, useState } from "react";
import { IconPosCafe } from "../Helper/icons";
import { Pagination } from "../Helper/Pagination";
import { getPaginatedItems } from "../Helper/PaginationUtils";
import { GetAllBill } from "../api/api";
import { useLocation } from "react-router-dom";
import type { saleslisttype } from "../Types/Types";
import TableComponent, { type Column } from "../shared/Table";

export default function Inventory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterDate, setFilterDate] = useState("Today");

  const location = useLocation();
  const [allSales, setAllSales] = useState<saleslisttype[]>([]);
  const [saleslist, setSaleslist] = useState<saleslisttype[]>([]);

  const [filterData, setFilterData] = useState({
    itemname: "",
    reportDate: "",
    dateFrom: "2024-05-20",
    dateTo: "2024-05-20"
  });

  useEffect(() => {
    GetAllBill()
      .then((response) => {
        setAllSales(response);
        setSaleslist(response);
      });
  }, [location.pathname]);

  function handleResponseData(saleslist: saleslisttype[]) {
    const reports = saleslist;
    let items_array = reports;
    let mapped_items: Record<string, saleslisttype> = {};
    items_array.forEach(item => {
      if (mapped_items[item.itemCode]) {
        mapped_items[item.itemCode].quantity += item.quantity;
        mapped_items[item.itemCode].total += item.total;
      } else {
        mapped_items[item.itemCode] = { ...item };
      }
    });
    items_array = Object.values(mapped_items);
    items_array = items_array.sort((a, b) => b.quantity - a.quantity);
    return items_array;
  }

  const newsaleslist = handleResponseData(saleslist);
  const paginatedSales = getPaginatedItems(newsaleslist, currentPage, itemsPerPage);

  function handleFilterDate(date: string) {
    setFilterDate(date);
  }
  
  function handleCustomDate(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function filter() {
    const today = new Date();
    const startOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);

    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Sunday



    const filteredList = allSales.filter((item) => {
      // Item name filter
      const itemMatch =
        !filterData.itemname ||
        item.itemName === filterData.itemname;

      if (!itemMatch) return false;

      // Note: Date filtering mock logic matches the original
      return true;
    });

    setSaleslist(filteredList);
  }

  function reset() {
    setFilterData({
      itemname: "",
      reportDate: "",
      dateFrom: "",
      dateTo: ""
    });
    setSaleslist(allSales);
  }

  const columns: Column<saleslisttype>[] = [
    {
      header: "Item Name",
      key: "itemName",
      sortable: true,
      className: "text-left font-bold text-gray-900",
      render: (item) => <div className="p-1">{item.itemName}</div>
    },
    {
      header: "Sold Quantity",
      key: "quantity",
      sortable: true,
      className: "text-left text-gray-500",
      render: (item) => <div className="p-1">{item.quantity}</div>
    },
    {
      header: "Total Price",
      key: "total",
      sortable: true,
      className: "text-left font-semibold",
      render: (item) => <div className="p-1">{`$${item.total.toFixed(2)}`}</div>
    }
  ];

  return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-4 pt-0 pb-0 w-full font-bold">
        <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-start p-3.5 justify-start gap-6">
          <div className="border-0 w-full max-w-75">
            <div className="text-ss-50 text-gray-500">Item</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="itemname" id="opg-select-category" className="w-full" onChange={handleFilterChange} value={filterData.itemname} required>
                <option value="">Select Item</option>
                {
                  Array.from(new Set(Array.from(allSales, item => item.itemName))).map((item, index) => (<option key={index} value={item}>{item}</option>))
                }
              </select>
            </div>
          </div>
          <div className="border-0 flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="text-ss-50 text-gray-500">Reported Date</div>
              <div className="flex">
                <div className={`border border-gray-300 text-center flex items-center text-nowrap border-r-0 rounded-tl-sm rounded-bl-sm p-2 px-4 max-[840px]:p-1 max-[840px]:px-2 ${(filterDate == "Today") ? "bg-gpurple text-white" : ""}`} onClick={() => handleFilterDate("Today")}>Today</div>
                <div className={`border border-gray-300 text-center flex items-center text-nowrap border-r-0 p-2 px-4 max-[840px]:p-1 max-[840px]:px-2 ${(filterDate == "Yesterday") ? "bg-gpurple text-white" : ""}`} onClick={() => handleFilterDate("Yesterday")}>Yesterday</div>
                <div className={`border border-gray-300 text-center flex items-center text-nowrap border-r-0 p-2 px-4 max-[840px]:p-1 max-[840px]:px-2 ${(filterDate == "This Week") ? "bg-gpurple text-white" : ""}`} onClick={() => handleFilterDate("This Week")}>This Week</div>
                <div className={`border border-gray-300 text-center flex items-center text-nowrap border-r-0 p-2 px-4 max-[840px]:p-1 max-[840px]:px-2 ${(filterDate == "This Month") ? "bg-gpurple text-white" : ""}`} onClick={() => handleFilterDate("This Month")}>This Month</div>
                <div className={`border border-gray-300 text-center flex items-center text-nowrap rounded-tr-sm rounded-br-sm p-2 px-4 max-[840px]:p-1 max-[840px]:px-2 ${(filterDate == "Custom") ? "bg-gpurple text-white" : ""}`} onClick={() => handleFilterDate("Custom")}>Custom</div>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col items-start justify-center w-1/2">
                <div className="text-ss-50 text-gray-500">Requested Date From</div>
                <input className="border border-gray-200 rounded-md p-2 w-full" type="date" id="opg-select-dfrom" value={filterData.dateFrom} placeholder="Select date" name="dateFrom" onChange={handleCustomDate}></input>
              </div>
              <div className="flex flex-col items-start justify-center w-1/2">
                <div className="text-ss-50 text-gray-500">Requested Date To</div>
                <input className="border border-gray-200 rounded-md p-2 w-full" type="date" id="opg-select-dto" value={filterData.dateTo} placeholder="Select date" name="dateTo" onChange={handleCustomDate}></input>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-9/12 items-start justify-start">
            <div className="text-ss-50 text-transparent">Reported Date</div>
            <div className="flex h-full items-start gap-2">
              <div className="bg-gpurple flex p-4 rounded-md aspect-16/8 h-1/3 items-center justify-center border border-gray-200 cursor-pointer" id="inventory-action-filter" onClick={() => filter()}>
                <IconPosCafe color="white" icon="filter" />
                <span className="text-white text-ss-50 ml-1">Filter</span>
              </div>
              <div className="flex p-4 rounded-md aspect-16/8 h-1/3 items-center justify-center border border-gray-200 cursor-pointer" id="inventory-action-reset" onClick={() => reset()}>
                <IconPosCafe color="black" icon="reset" />
                <span className="text-black text-ss-50 ml-1">Reset</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-3 overflow-hidden flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="align-ttitle">
              <div className="text-ss-70 font-bold">Sales Reports</div>
              <div className="text-gray-500 text-ss-45">Total {saleslist.length || 0} reports</div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-5 border border-gray-200">
                  <IconPosCafe color="black" icon="book" />
                  <span className="text-black ml-1">Export to Excel</span>
                </div>
              </div>
            </div>
          </div>
          <TableComponent
            columns={columns}
            data={paginatedSales}
            className="w-full mt-2.5"
          />
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={saleslist.length}
            itemLabel="reports"
            setCurrentPage={setCurrentPage}
            setItemsPerPage={setItemsPerPage}
          />
        </div>

      </div>
    </div>
  );
}
