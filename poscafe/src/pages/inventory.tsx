import { useEffect, useContext, useState } from "react";
import { IconPosCafe } from "../icons";
import { useNavigate } from "react-router-dom";
import { FormAction } from "../App";


interface datetype {
  date: {
    date: string,
    day: string,
    time: string;
  };
}


export default function Inventory({ date }: datetype) {
  const navigate = useNavigate();
  const [currentpage, setCurrentPage] = useState(1);
  const [itemsperpage, setItemsPerPage] = useState(10);
  function handleChangeContent(path: string, item?:object) {
    navigate(path, {state: item});
  }

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

  const { setFormAction } = useContext(FormAction);
  const init_inventory = [ { "itemcode": "ITM-000001", "itemimage": "/public/assets/item-images/soya milk.webp", "category": "Beverage", "unit": "Cup", "itemname": "Soya Milk", "itemdesc": "Soya Milk", "price": 3, "instock": 52, "oldstock": 52, "supplier": "Local" }, { "itemcode": "ITM-000002", "itemimage": "/public/assets/item-images/tea c.png", "category": "Beverage", "unit": "Cup", "itemname": "Tea C", "itemdesc": "Tea C", "price": 4.7, "instock": 50, "oldstock": 50, "supplier": "Local" }, { "itemcode": "ITM-000003", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Steamed Timsum", "unit": "Pcs", "itemname": "Steamed Timsum", "itemdesc": "Steamed Timsum", "price": 7.3, "instock": 40, "oldstock": 40, "supplier": "Local" }, { "itemcode": "ITM-000004", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Porridge", "unit": "Bowl", "itemname": "Porridge", "itemdesc": "Porridge", "price": 11.2, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000005", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced Coffee", "itemdesc": "Iced Coffee", "price": 11.7, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000006", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Noodle/Dumplings", "unit": "Pcs", "itemname": "Dumplings", "itemdesc": "Dumplings", "price": 16.1, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000007", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced milo", "itemdesc": "Iced milo", "price": 13.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000008", "itemimage": "/public/assets/item-images/coffee c.webp", "category": "Beverage", "unit": "Cup", "itemname": "Coffee C", "itemdesc": "Coffee C", "price": 16.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000009", "itemimage": "/public/assets/item-images/milo.png", "category": "Beverage", "unit": "Cup", "itemname": "Milo", "itemdesc": "Milo", "price": 15, "instock": 15, "oldstock": 15, "supplier": "Local" }, { "itemcode": "ITM-000010", "itemimage": "/public/assets/item-images/chinese tea.webp", "category": "Beverage", "unit": "Cup", "itemname": "Chinese Tea", "itemdesc": "Chinese Tea", "price": 4.2, "instock": 30, "oldstock": 30, "supplier": "Local" }, { "itemcode": "ITM-000011", "itemimage": "/public/assets/item-images/iced-tea-black.png", "category": "Beverage", "unit": "Cup", "itemname": "orange juice", "itemdesc": "orange juice", "price": 1.8, "instock": 3, "oldstock": 3, "supplier": "Local" } ];
  function initStorage() {
    const inventory = localStorage.getItem("inventory");
    if (!inventory) {
      localStorage.setItem("inventory", JSON.stringify(init_inventory));
    }
  }

  const [allInventory, setAllInventory] = useState([ { "itemcode": "ITM-000001", "itemimage": "/public/assets/item-images/soya milk.webp", "category": "Beverage", "unit": "Cup", "itemname": "Soya Milk", "itemdesc": "Soya Milk", "price": 3, "instock": 52, "oldstock": 52, "supplier": "Local" }, { "itemcode": "ITM-000002", "itemimage": "/public/assets/item-images/tea c.png", "category": "Beverage", "unit": "Cup", "itemname": "Tea C", "itemdesc": "Tea C", "price": 4.7, "instock": 50, "oldstock": 50, "supplier": "Local" }, { "itemcode": "ITM-000003", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Steamed Timsum", "unit": "Pcs", "itemname": "Steamed Timsum", "itemdesc": "Steamed Timsum", "price": 7.3, "instock": 40, "oldstock": 40, "supplier": "Local" }, { "itemcode": "ITM-000004", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Porridge", "unit": "Bowl", "itemname": "Porridge", "itemdesc": "Porridge", "price": 11.2, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000005", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced Coffee", "itemdesc": "Iced Coffee", "price": 11.7, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000006", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Noodle/Dumplings", "unit": "Pcs", "itemname": "Dumplings", "itemdesc": "Dumplings", "price": 16.1, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000007", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced milo", "itemdesc": "Iced milo", "price": 13.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000008", "itemimage": "/public/assets/item-images/coffee c.webp", "category": "Beverage", "unit": "Cup", "itemname": "Coffee C", "itemdesc": "Coffee C", "price": 16.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000009", "itemimage": "/public/assets/item-images/milo.png", "category": "Beverage", "unit": "Cup", "itemname": "Milo", "itemdesc": "Milo", "price": 15, "instock": 15, "oldstock": 15, "supplier": "Local" }, { "itemcode": "ITM-000010", "itemimage": "/public/assets/item-images/chinese tea.webp", "category": "Beverage", "unit": "Cup", "itemname": "Chinese Tea", "itemdesc": "Chinese Tea", "price": 4.2, "instock": 30, "oldstock": 30, "supplier": "Local" }, { "itemcode": "ITM-000011", "itemimage": "/public/assets/item-images/iced-tea-black.png", "category": "Beverage", "unit": "Cup", "itemname": "orange juice", "itemdesc": "orange juice", "price": 1.8, "instock": 3, "oldstock": 3, "supplier": "Local" }]);
  const [inventorylist, setInventorylist] = useState([{ "itemcode": "ITM-000001", "itemimage": "/public/assets/item-images/soya milk.webp", "category": "Beverage", "unit": "Cup", "itemname": "Soya Milk", "itemdesc": "Soya Milk", "price": 3, "instock": 52, "oldstock": 52, "supplier": "Local" }, { "itemcode": "ITM-000002", "itemimage": "/public/assets/item-images/tea c.png", "category": "Beverage", "unit": "Cup", "itemname": "Tea C", "itemdesc": "Tea C", "price": 4.7, "instock": 50, "oldstock": 50, "supplier": "Local" }, { "itemcode": "ITM-000003", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Steamed Timsum", "unit": "Pcs", "itemname": "Steamed Timsum", "itemdesc": "Steamed Timsum", "price": 7.3, "instock": 40, "oldstock": 40, "supplier": "Local" }, { "itemcode": "ITM-000004", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Porridge", "unit": "Bowl", "itemname": "Porridge", "itemdesc": "Porridge", "price": 11.2, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000005", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced Coffee", "itemdesc": "Iced Coffee", "price": 11.7, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000006", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Noodle/Dumplings", "unit": "Pcs", "itemname": "Dumplings", "itemdesc": "Dumplings", "price": 16.1, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000007", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced milo", "itemdesc": "Iced milo", "price": 13.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000008", "itemimage": "/public/assets/item-images/coffee c.webp", "category": "Beverage", "unit": "Cup", "itemname": "Coffee C", "itemdesc": "Coffee C", "price": 16.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000009", "itemimage": "/public/assets/item-images/milo.png", "category": "Beverage", "unit": "Cup", "itemname": "Milo", "itemdesc": "Milo", "price": 15, "instock": 15, "oldstock": 15, "supplier": "Local" }, { "itemcode": "ITM-000010", "itemimage": "/public/assets/item-images/chinese tea.webp", "category": "Beverage", "unit": "Cup", "itemname": "Chinese Tea", "itemdesc": "Chinese Tea", "price": 4.2, "instock": 30, "oldstock": 30, "supplier": "Local" }, { "itemcode": "ITM-000011", "itemimage": "/public/assets/item-images/iced-tea-black.png", "category": "Beverage", "unit": "Cup", "itemname": "orange juice", "itemdesc": "orange juice", "price": 1.8, "instock": 3, "oldstock": 3, "supplier": "Local" }]);

  useEffect(() => {
    initStorage();
    const data = localStorage.getItem("inventory");
    const inventory = data ? JSON.parse(data) : [];
    setAllInventory(inventory);
    setInventorylist(inventory);
  }, []);

  const totalpages = Math.ceil(inventorylist.length / itemsperpage);
  const startindex = (currentpage - 1) * itemsperpage;
  const endindex = startindex + itemsperpage;
  const pagelist = inventorylist.slice(startindex, endindex);
  const pagenumbers = Array.from(generatepages(totalpages, currentpage));

  function handlePageChange(page: number | string) { if (typeof page === 'number') { setCurrentPage(page); } }
  function handlePreviousPage() { if (currentpage > 1) { setCurrentPage(currentpage - 1); } }
  function handleNextPage() { if (currentpage < totalpages) { setCurrentPage(currentpage + 1); } }
  function handleFirstPage() { setCurrentPage(1); }
  function handleLastPage() { setCurrentPage(totalpages); }

  const [filterData, setFilterData] = useState({
    category: "",
    status: "",
    item: "",
    dateFrom: "2024-05-20",
    dateTo: "2024-05-20"
  });

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    if (name == "search") {
      const filtersearch = allInventory.filter(item => item.itemname.toLowerCase().includes(value.toLowerCase()))
      console.log(filtersearch)
      setInventorylist(filtersearch);
      if (!value) {
        setInventorylist(allInventory);
      }
    } else {
      setFilterData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  function filter() {
    const filteredlist = allInventory.filter((item: any) => {
      const itemDate = (item.lastupdated) ? new Date(item.lastupdated) : null;
      return (
        (!filterData.item || item.itemname === filterData.item) &&
        (!filterData.status || item.status === filterData.status) &&
        (!filterData.category || item.category === filterData.category) &&
        (!filterData.dateFrom || !itemDate || itemDate >= new Date(filterData.dateFrom)) &&
        (!filterData.dateTo || !itemDate || itemDate <= new Date(filterData.dateTo))
      );
    });
    setInventorylist(filteredlist);
  }

  function reset() {
    setFilterData({
      category: "",
      status: "",
      item: "",
      dateFrom: "",
      dateTo: ""
    });
    setInventorylist(allInventory);
  }

  return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-4 h-full w-full font-bold">
        <div className="flex">
          <div className="flex items-center justify-center gap-3">
            <IconPosCafe color="black" icon="menu" size={24} />
            <div className="text-md text-md">Inventory</div>
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
        <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-2 justify-between gap-2">
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Category</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200 max-[820px]:p-1 max-[820px]:text-ss-45">
              <IconPosCafe color="black" icon="allitems" size={12} />
              <select name="category" id="opg-select-category" className="opg-select w-full" value={filterData.category} onChange={handleFilterChange} required>
                <option value="">All Category</option>
                {
                  Array.from(new Set(Array.from(allInventory, item => item.category))).map((item, index) => (<option key={index} value={item}>{item}</option>))
                }
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500 max-[820px]:text-ss-45">Item Name</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200 max-[820px]:p-1">
              <IconPosCafe color="black" size={12} />
              <select name="item" id="opg-select-items" className="opg-select w-full" value={filterData.item} onChange={handleFilterChange}>
                <option value="">All Items</option>
                {
                  Array.from(new Set(Array.from(allInventory, item => item.itemname))).map((item, index) => (<option key={index} value={item}>{item}</option>))
                }
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500 max-[820px]:text-ss-45">Status</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200 max-[820px]:p-1">
              <select name="status" id="opg-select-status" className="opg-select w-full" value={filterData.status} onChange={handleFilterChange}>
                <option value="">All Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500">Date From</div>
            <input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="date" id="opg-select-dfrom" name="dateFrom" value={filterData.dateFrom} onChange={handleFilterChange}></input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500 max-[820px]:text-ss-45">Date To</div>
            <input className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50" type="date" id="opg-select-dto" name="dateTo" value={filterData.dateTo} onChange={handleFilterChange}></input>
          </div>
          <div className="flex h-full items-end gap-2  max-[820px]:gap-1">
            <div className="bg-gpurple flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200 max-[820px]:p-3" id="inventory-action-filter" onClick={() => { filter(); }}>
              <IconPosCafe color="white" icon="filter" />
              <span className="text-white text-ss-50 max-[820px]:text-ss-45">Filter</span>
            </div>
            <div className="flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200 max-[820px]:p-3" id="inventory-action-reset" onClick={() => { reset(); }}>
              <IconPosCafe color="black" icon="reset" />
              <span className="text-black text-ss-50 max-[820px]:text-ss-45">Reset</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-3 overflow-hidden h-full flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="align-ttitle">
              <div className="text-ss-70 font-bold">Inventory List</div>
              <div className="text-gray-500 text-ss-45 lg:text-ss-50">Total 128 items found</div>
            </div>
            <div className="">
              <div className="flex gap-3">
                {/* <input type="text" className="w-20 h-full border-2 border-gray-200 rounded-md" placeholder="filter" onChange={handleFilterChange} name="search" /> */}
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-3 border border-gray-200" id="additem" onClick={() => {
                  setFormAction("add");
                  handleChangeContent("/additem");
                }}>
                  <IconPosCafe color="purple" icon="add" />
                  <span className="text-bviolet1 text-ss-50">Add Item</span>
                </div>
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-3 bg-gpurple text-white" id="additem" data-target="request" onClick={() => handleChangeContent("/requestitem")}>
                  <IconPosCafe color="white" icon="download" />
                  <span className="text-white text-ss-50">Request Item</span>
                </div>
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-3 border border-gray-200">
                  <IconPosCafe color="black" icon="book" />
                  <span className="text-black text-ss-50">Export to Excel</span>
                </div>
              </div>
            </div>
          </div>
          <table className="border-collapse w-full m-2.5 border border-gray-200 rounded-sm">
            <thead>
              <tr>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Item Name</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Category</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Price</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Unit</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Purchased</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Sold</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">In Stock</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Status</th>
                <th className="bg-gray-100 p-1 text-ss-55 font-bold">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {pagelist.map((item, index) => (
                <tr className="border border-gray-100" key={index} onClick={() => {
                  setFormAction("edit");
                  handleChangeContent("/additem", item);
                }}>
                  <td>
                    <div className="flex p-2 items-center gap-2">
                      <img src={item.itemimage} alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>
                      <div className="text-ss-55 text-center">{item.itemname}</div>
                    </div>
                  </td>
                  <td><div className="p-0.5 text-gray-500 text-ss-55 text-center">{item.category}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">${(item.price)}</div></td>
                  <td><div className="p-0.5 text-gray-500 text-ss-55 text-center">{item.unit}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">{0}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">{0}</div></td>
                  <td><div className={`p-0.5 text-ss-55 text-center ${item.instock < 10 ? "text-orange-500" : item.instock <= 0 ? "text-red-500" : "text-green-500"}`}>{item.instock}</div></td>
                  <td><div className={`p-0.5 text-ss-55 text-center rounded-sm flex items-center justify-center justify-self-center w-fit p-1 px-2 ${item.instock < 10 ? "text-orange-500 bg-orange-100" : item.instock <= 0 ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"}`}>{(item.instock < 10 ? "Low Stock" : item.instock <= 0 ? "Out of Stock" : "In Stock")}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">{"20 May 2024"}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-ss-55">show</div>
                <select id="entriescount" className="border border-gray-200 text-ss-65 p-1 rounded-sm mx-2  max-[820px]:text-ss-50" value={itemsperpage} onChange={(e) => { setItemsPerPage(parseInt(e.target.value)); setCurrentPage(1); }}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <div className="text-ss-55">entries</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2  max-[820px]:gap-1">
                <div className="p-2  max-[820px]:p-1.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleFirstPage}><IconPosCafe icon="dleft" color="black" size={12} /></div>
                <div className="p-2  max-[820px]:p-1.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handlePreviousPage}><IconPosCafe icon="left" color="black" size={12} /></div>
                {pagenumbers.map((page, index) => (
                  <div 
                    key={index} 
                    className={`p-2.5  max-[820px]:p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer ${
                      page === currentpage ? 'bg-gpurple text-white' : ''
                    } ${
                      page === '...' ? 'cursor-default' : ''
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </div>
                ))}
                <div className="p-2  max-[820px]:p-1.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleNextPage}><IconPosCafe icon="right" color="black" size={12} /></div>
                <div className="p-2  max-[820px]:p-1.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleLastPage}><IconPosCafe icon="dright" color="black" size={12} /></div>
              </div>
            </div>
            <div className="align-tshow flex items-center">
              <div className="flex items-center max-[820px]:justify-center">
                <div className="text-ss-55  max-[820px]:text-ss-50">showing {startindex + 1} to {Math.min(endindex, inventorylist.length)} of {inventorylist.length} entries</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
