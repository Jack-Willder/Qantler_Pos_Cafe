import { useState, useEffect } from "react";
import { IconPosCafe } from "../icons";


interface datetype {
  date: {
    date: string,
    day: string,
    time: string;
  };
}


export default function Inventory({ date }: datetype) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterDate, setFilterDate] = useState("Today");
  function handleFilterDate(date: string) {
    setFilterDate(date);
  }
  function handleCustomDate(e: any) {
    const {name, value} = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  function initStorage() {
    const inventory = localStorage.getItem("saleslist");
    if (!inventory) { localStorage.setItem("saleslist", JSON.stringify([{ itemname: "Espresso", quantity: 45, totalprice: 135 },])); }
  }
  const [allSales, setAllSales] = useState<saleslisttype[]>([{ itemname: "Espresso", quantity: 45, totalprice: 135, date: "" },]);
  const [saleslist, setSaleslist] = useState<saleslisttype[]>([{ itemname: "Espresso", quantity: 45, totalprice: 135, date: "" },]);
  type mappedItemsType = {
    itemcode: string;
    itemname: string;
    quantity: number;
    total: number;
    price: number;
  };

  type saleslisttype = {
    date: string;
    itemname: string;
    quantity: number;
    totalprice: number;
  };

  type BillItemWithDate = mappedItemsType & {
    date: string;
  };

  useEffect(() => {
    initStorage();
    const data = localStorage.getItem("bills");
    const bills = data ? JSON.parse(data) : [];

    type BillListType = { items: mappedItemsType[]; };

    bills.forEach((bill: { date: string; items: mappedItemsType[]; }) => {
      bill.items.forEach((item) => {
        (item as BillItemWithDate).date = bill.date;
      });
    });

    const billList = Array.from(bills, (element: BillListType) => element.items);

    const mergedBillList = billList.flat() as BillItemWithDate[];

    const updatedBillList = mergedBillList.map(
      ({ total, ...items }: BillItemWithDate) => ({
        ...items,
        totalprice: total,
      })
    );

    let mapped_items: {
      [key: string]: {
        itemname: string;
        date: string;
        quantity: number;
        totalprice: number;
      };
    } = {};

    updatedBillList.forEach((item) => {
      if (mapped_items[item.itemcode]) {
        mapped_items[item.itemcode].quantity += item.quantity;
        mapped_items[item.itemcode].totalprice += item.totalprice;
      } else {
        mapped_items[item.itemcode] = {
          itemname: item.itemname,
          date: item.date,
          quantity: item.quantity,
          totalprice: item.totalprice,
        };
      }
    });

    const SalesListArray: saleslisttype[] = Object.values(mapped_items);
    setAllSales(SalesListArray);
    setSaleslist(SalesListArray);
  }, []);

  function* generatepages(totalpages: number, currentpage: number) {
    const maxpages = 5;
    let start = Math.max(1, currentpage - Math.floor(maxpages / 2));
    let end = Math.min(totalpages, start + maxpages - 1);
    if (end - start < maxpages - 1) {
      start = Math.max(1, end - maxpages + 1);
    }
    if (start > 1) {
      yield 1;
      if (start > 2) yield '...';
    }
    for (let i = start; i <= end; i++) {
      yield i;
    }
    if (end < totalpages) {
      if (end < totalpages - 1) yield '...';
      yield totalpages;
    }
  }

  const totalPages = Math.ceil(saleslist.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSales = saleslist.slice(startIndex, endIndex);
  const pageNumbers = Array.from(generatepages(totalPages, currentPage));

  function handlePageChange(page: number | string) {
    if (typeof page === 'number') {
      setCurrentPage(page);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleFirstPage() {
    setCurrentPage(1);
  }

  function handleLastPage() {
    setCurrentPage(totalPages);
  }

  const [filterData, setFilterData] = useState({
    itemname: "",
    reportDate: "",
    dateFrom: "2024-05-20",
    dateTo: "2024-05-20"
  });

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // function filter() {
  //   const filteredlist = allSales.filter((item: any) => (!filterData.itemname || item.itemname === filterData.itemname));
  //   // const currentCalendar = new Date();
  //   // const today = [currentCalendar.getFullYear(), currentCalendar.getMonth().toString().padStart(2, "0"), currentCalendar.getDate().toString().padStart(2, "0")]
  //   // const yesterday = () => {
  //   //   if (currentCalendar.getDate() == 1) {
  //   //     return 1;
  //   //   } else {
  //   //     if (currentCalendar.getMonth() == 1) {
          
  //   //     }
  //   //   }
  //   // }
  //   // const filterMap: {
  //   //   [key:string]: string | number
  //   // } = {
  //   //   "Today": today.join("-"),
  //   //   "Yesterday": "yesterday",
  //   //   "This Week": new Date().getDate(),
  //   //   "This Month": new Date().getDate(),
  //   //   "custom": new Date().getDate(),
  //   // }
  //   // console.log(filterMap[filterDate as string])
  //   // setSaleslist(filteredlist);
  // }


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

    const startOfMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    const filteredList = allSales.filter((item: any) => {
      // Item name filter
      const itemMatch =
        !filterData.itemname ||
        item.itemname === filterData.itemname;

      if (!itemMatch) return false;

      const saleDate = new Date(item.date);

      switch (filterDate) {
        case "Today":
          return saleDate >= startOfToday;

        case "Yesterday":
          return (
            saleDate >= startOfYesterday &&
            saleDate < startOfToday
          );

        case "This Week":
          return saleDate >= startOfWeek;

        case "This Month":
          return saleDate >= startOfMonth;

        case "Custom":
          return (
            filterData.dateFrom &&
            filterData.dateTo &&
            saleDate >= new Date(filterData.dateFrom) &&
            saleDate <= new Date(filterData.dateTo)
          );

        default:
          return true;
      }
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

  return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-4 h-full w-full font-bold">
        <div className="flex">
          <div className="flex items-center justify-center gap-3">
            <IconPosCafe color="black" icon="menu" size={24} />
            <div className="text-md text-md">Sales Report</div>
          </div>
          <div className="two p-0 grow flex justify-end">
            <div className="flex bg-white h-full w-max p-2 gap-2 rounded-sm items-center justify-center">
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="calendar" size={18} />
                <div className="">
                  <div className="flex flex-col ">
                    <span className="text-ss-50">{date.date}</span>
                    <span className="text-ss-40 text-gray-500">{date.day}</span>
                  </div>
                </div>
              </div>
              <div className="w-px h-full bg-gray-100 "></div>
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="schedule" size={18} />
                <span className="text-ss-60">{date.time}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-start p-3.5 justify-start gap-6">
          <div className="border-0 w-full max-w-75">
            <div className="text-ss-50 text-gray-500">Item</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="itemname" id="opg-select-category" className="w-full" onChange={handleFilterChange} value={filterData.itemname} required>
                {
                  Array.from(new Set(Array.from(allSales, item => item.itemname))).map((item, index) => (<option key={index} value={item}>{item}</option>))
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
              <div className="bg-gpurple flex p-4 rounded-md aspect-16/8 h-1/3 items-center justify-center border border-gray-200" id="inventory-action-filter" onClick={() => filter()}>
                <IconPosCafe color="white" icon="filter" />
                <span className="text-white text-ss-50">Filter</span>
              </div>
              <div className="flex p-4 rounded-md aspect-16/8 h-1/3 items-center justify-center border border-gray-200" id="inventory-action-reset" onClick={() => reset()}>
                <IconPosCafe color="black" icon="reset" />
                <span className="text-black text-ss-50">Reset</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-3 overflow-hidden h-full flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="align-ttitle">
              <div className="text-ss-70 font-bold">Sales Reports</div>
              <div className="text-gray-500 text-ss-45">Total {saleslist.length || 0} reports</div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-5 border border-gray-200">
                  <IconPosCafe color="black" icon="book" />
                  <span className="text-black">Export to Excel</span>
                </div>
              </div>
            </div>
          </div>
          <table className="border-collapse w-full m-2.5 border border-gray-200 rounded-sm">
            <thead>
              <tr>
                <th className="bg-gray-100 p-2 text-ss-55 font-bold text-left">Item Name</th>
                <th className="bg-gray-100 p-2 text-ss-55 font-bold text-left">Sold Quantity</th>
                <th className="bg-gray-100 p-2 text-ss-55 font-bold text-left">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {paginatedSales.map((item, index) => (
                <tr className="border border-gray-100" key={index}>
                  <td><div className="p-2 text-ss-55 text-left">{item.itemname}</div></td>
                  <td><div className="p-2 text-left text-gray-500 text-ss-55">{item.quantity}</div></td>
                  <td><div className="p-2 text-left text-ss-55">{`$${item.totalprice.toFixed(2)}`}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-ss-55 max-[820px]:text-ss-50">show</div>
                <select id="entriescount" className="border border-gray-200 text-ss-65 p-1 rounded-sm mx-2" value={itemsPerPage} onChange={(e) => { setItemsPerPage(parseInt(e.target.value)); setCurrentPage(1); }}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <div className="text-ss-55 max-[820px]:text-ss-50">entries</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleFirstPage}><IconPosCafe icon="dleft" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handlePreviousPage}><IconPosCafe icon="left" color="black" size={12} /></div>
                {pageNumbers.map((page, index) => (
                  <div
                    key={index}
                    className={`p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer ${page === currentPage ? 'bg-gpurple text-white' : ''
                      } ${page === '...' ? 'cursor-default' : ''
                      }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </div>
                ))}
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleNextPage}><IconPosCafe icon="right" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleLastPage}><IconPosCafe icon="dright" color="black" size={12} /></div>
              </div>
            </div>
            <div className="align-tshow flex items-center">
              <div className="flex items-center">
                <div className="text-ss-55 max-[820px]:text-ss-50">showing {startIndex + 1} to {Math.min(endIndex, saleslist.length)} of {saleslist.length} reports</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}