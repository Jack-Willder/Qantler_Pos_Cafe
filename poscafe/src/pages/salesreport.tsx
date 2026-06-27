import { useState, useEffect } from "react";
import { IconPosCafe } from "../icons";


interface datetype {
  date: {
    date: string,
    day: string,
    time: string;
  };
}
export default function Inventory({date}: datetype) {
  const [currentPage, setCurrentPage] = useState(1);
  // const saleslist = [
  //   { itemname: "Espresso", quantity: 45, totalprice: 135 },
  //   { itemname: "Cappuccino", quantity: 38, totalprice: 228 },
  //   { itemname: "Latte", quantity: 52, totalprice: 312 },
  //   { itemname: "Americano", quantity: 41, totalprice: 123 },
  //   { itemname: "Mocha", quantity: 29, totalprice: 174 },
  //   { itemname: "Hot Chocolate", quantity: 33, totalprice: 165 },
  //   { itemname: "Tea", quantity: 60, totalprice: 120 },
  //   { itemname: "Iced Coffee", quantity: 47, totalprice: 188 },
  //   { itemname: "Smoothie", quantity: 24, totalprice: 216 },
  //   // { itemname: "Croissant", quantity: 35, totalprice: 175 },
  // ];

  const [filterDate, setFilterDate] = useState("Today");
  function handleFilterDate(date: string) {
    setFilterDate(date)
  }

  function initStorage() {
    const inventory = localStorage.getItem("saleslist");

    if (!inventory) {
      localStorage.setItem("saleslist", JSON.stringify([
        { itemname: "Espresso", quantity: 45, totalprice: 135 },
        { itemname: "Cappuccino", quantity: 38, totalprice: 228 },
        { itemname: "Latte", quantity: 52, totalprice: 312 },
        { itemname: "Americano", quantity: 41, totalprice: 123 },
        { itemname: "Mocha", quantity: 29, totalprice: 174 },
        { itemname: "Hot Chocolate", quantity: 33, totalprice: 165 },
        { itemname: "Tea", quantity: 60, totalprice: 120 },
        { itemname: "Iced Coffee", quantity: 47, totalprice: 188 },
        { itemname: "Smoothie", quantity: 24, totalprice: 216 },
      // { itemname: "Croissant", quantity: 35, totalprice: 175 },
      ]));
    }
  }


  const [allSales, setAllSales] = useState([
    { itemname: "Espresso", quantity: 45, totalprice: 135 },
    { itemname: "Cappuccino", quantity: 38, totalprice: 228 },
    { itemname: "Latte", quantity: 52, totalprice: 312 },
    { itemname: "Americano", quantity: 41, totalprice: 123 },
  ]);
  const [saleslist, setSaleslist] = useState([
    { itemname: "Espresso", quantity: 45, totalprice: 135 },
    { itemname: "Cappuccino", quantity: 38, totalprice: 228 },
    { itemname: "Latte", quantity: 52, totalprice: 312 },
    { itemname: "Americano", quantity: 41, totalprice: 123 },
  ]);

  useEffect(() => {
    initStorage();
    const data = localStorage.getItem("saleslist");
    const inventory = data ? JSON.parse(data) : [];
    setAllSales(inventory);
    setSaleslist(inventory);
  }, []);

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

  function filter() {
    const filteredlist = allSales.filter((item: any) => (!filterData.itemname || item.itemname === filterData.itemname));
    setSaleslist(filteredlist);
  }

  function reset() {
    setFilterData({
      itemname: "",
      reportDate: "",
      dateFrom: "2024-05-20",
      dateTo: "2024-05-20"
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
                <input className="border border-gray-200 rounded-md p-2 w-full" type="date" id="opg-select-dfrom" value="2024-05-20" placeholder="Select date"></input>
              </div>
              <div className="flex flex-col items-start justify-center w-1/2">
                <div className="text-ss-50 text-gray-500">Requested Date To</div>
                <input className="border border-gray-200 rounded-md p-2 w-full" type="date" id="opg-select-dto" value="2024-05-20" placeholder="Select date"></input>
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
              {saleslist.map((item, index) => (
                <tr className="border border-gray-100" key={index}>
                  <td><div className="p-2 text-ss-55 text-left">{item.itemname}</div></td>
                  <td><div className="p-2 text-left text-gray-500 text-ss-55">{item.quantity}</div></td>
                  <td><div className="p-2 text-left text-ss-55">{`$${item.totalprice}.00`}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-ss-55 max-[820px]:text-ss-50">show</div>
                <select id="entriescount" className="border border-gray-200 text-ss-65 p-1 rounded-sm mx-2">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <div className="text-ss-55 max-[820px]:text-ss-50">entries</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="dleft" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="left" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center bg-gpurple text-white">1</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">2</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">3</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">4</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">5</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">...</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center">13</div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="right" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center"><IconPosCafe icon="dright" color="black" size={12} /></div>
              </div>
            </div>
            <div className="align-tshow flex items-center">
              <div className="flex items-center">
                <div className="text-ss-55 max-[820px]:text-ss-50">showing {currentPage} to {(saleslist.length) ? saleslist.length : 0} of 128 reports</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}