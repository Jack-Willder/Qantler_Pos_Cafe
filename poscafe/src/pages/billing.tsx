import { useState, useEffect } from "react";
import { IconPosCafe } from "../icons";

type invitemtype = {
  "itemcode": string,
  "itemimage": string,
  "category": string,
  "unit": string,
  "itemname": string,
  "itemdesc": string,
  "price": number,
  "instock": number,
  "oldstock": number,
  "supplier": string;
};

type checkouttype = {
  image: string,
  itemname: string,
  price: number,
  total: number,
  itemcode: string
};

export default function Billing() {
  const [activeCategory, setActiveCategory] = useState("Beverage");
  const [activeView, setActiveView] = useState("grid");
  const [priceAmendment, setPriceAmendment] = useState(false);
  const handleCategory = (categoryname: string): void => {
    setActiveCategory(categoryname || "Beverage");
    const categoryfilter = allInventory.filter(item => item.category == categoryname);
    setInventorylist(categoryname === "All Items" ? allInventory : categoryfilter);
  };
  const handleView = (viewname: string): void => { setActiveView(viewname || "Beverage")};
  const handlePriceView = (viewname: boolean): void => { setPriceAmendment(viewname || false)};

  const categorylist = [
    { name: "Beverage", icon: "cafe" },
    { name: "Steamed Bun", icon: "steamedbun" },
    { name: "Steamed Timsum", icon: "steamedtimsum" },
    { name: "Deep Fry Timsum", icon: "deepfrytimsum" },
    { name: "Bake", icon: "bake" },
    { name: "Noodle/ Dumplings", icon: "noodledumplings" },
    { name: "Porridge", icon: "porridge" },
    { name: "All Items", icon: "allitems" },
  ];

  // function* generator(items: Array<string>) {
  //   for (const item in items) {
  //     yield item;
  //   }
  // } const colors = generator(["purple", "green", "orange", "blue", "red", "brow", "grey", "ash"]);



  const init_inventory = [{ "itemcode": "ITM-000001", "itemimage": "/public/assets/item-images/soya milk.webp", "category": "Beverage", "unit": "Cup", "itemname": "Soya Milk", "itemdesc": "Soya Milk", "price": 3, "instock": 52, "oldstock": 52, "supplier": "Local" }, { "itemcode": "ITM-000002", "itemimage": "/public/assets/item-images/tea c.png", "category": "Beverage", "unit": "Cup", "itemname": "Tea C", "itemdesc": "Tea C", "price": 4.7, "instock": 50, "oldstock": 50, "supplier": "Local" }, { "itemcode": "ITM-000003", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Steamed Timsum", "unit": "Pcs", "itemname": "Steamed Timsum", "itemdesc": "Steamed Timsum", "price": 7.3, "instock": 40, "oldstock": 40, "supplier": "Local" }, { "itemcode": "ITM-000004", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Porridge", "unit": "Bowl", "itemname": "Porridge", "itemdesc": "Porridge", "price": 11.2, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000005", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced Coffee", "itemdesc": "Iced Coffee", "price": 11.7, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000006", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Noodle/Dumplings", "unit": "Pcs", "itemname": "Dumplings", "itemdesc": "Dumplings", "price": 16.1, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000007", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced milo", "itemdesc": "Iced milo", "price": 13.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000008", "itemimage": "/public/assets/item-images/coffee c.webp", "category": "Beverage", "unit": "Cup", "itemname": "Coffee C", "itemdesc": "Coffee C", "price": 16.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000009", "itemimage": "/public/assets/item-images/milo.png", "category": "Beverage", "unit": "Cup", "itemname": "Milo", "itemdesc": "Milo", "price": 15, "instock": 15, "oldstock": 15, "supplier": "Local" }, { "itemcode": "ITM-000010", "itemimage": "/public/assets/item-images/chinese tea.webp", "category": "Beverage", "unit": "Cup", "itemname": "Chinese Tea", "itemdesc": "Chinese Tea", "price": 4.2, "instock": 30, "oldstock": 30, "supplier": "Local" }, { "itemcode": "ITM-000011", "itemimage": "/public/assets/item-images/iced-tea-black.png", "category": "Beverage", "unit": "Cup", "itemname": "orange juice", "itemdesc": "orange juice", "price": 1.8, "instock": 3, "oldstock": 3, "supplier": "Local" }];

  function initStorage() {
    const inventory = localStorage.getItem("inventory");

    if (!inventory) {
      localStorage.setItem("inventory", JSON.stringify(init_inventory));
    }
  }


  const [allInventory, setAllInventory] = useState([{ "itemcode": "ITM-000001", "itemimage": "/public/assets/item-images/soya milk.webp", "category": "Beverage", "unit": "Cup", "itemname": "Soya Milk", "itemdesc": "Soya Milk", "price": 3, "instock": 52, "oldstock": 52, "supplier": "Local" }, { "itemcode": "ITM-000002", "itemimage": "/public/assets/item-images/tea c.png", "category": "Beverage", "unit": "Cup", "itemname": "Tea C", "itemdesc": "Tea C", "price": 4.7, "instock": 50, "oldstock": 50, "supplier": "Local" }, { "itemcode": "ITM-000003", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Steamed Timsum", "unit": "Pcs", "itemname": "Steamed Timsum", "itemdesc": "Steamed Timsum", "price": 7.3, "instock": 40, "oldstock": 40, "supplier": "Local" }, { "itemcode": "ITM-000004", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Porridge", "unit": "Bowl", "itemname": "Porridge", "itemdesc": "Porridge", "price": 11.2, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000005", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced Coffee", "itemdesc": "Iced Coffee", "price": 11.7, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000006", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Noodle/Dumplings", "unit": "Pcs", "itemname": "Dumplings", "itemdesc": "Dumplings", "price": 16.1, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000007", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced milo", "itemdesc": "Iced milo", "price": 13.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000008", "itemimage": "/public/assets/item-images/coffee c.webp", "category": "Beverage", "unit": "Cup", "itemname": "Coffee C", "itemdesc": "Coffee C", "price": 16.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000009", "itemimage": "/public/assets/item-images/milo.png", "category": "Beverage", "unit": "Cup", "itemname": "Milo", "itemdesc": "Milo", "price": 15, "instock": 15, "oldstock": 15, "supplier": "Local" }, { "itemcode": "ITM-000010", "itemimage": "/public/assets/item-images/chinese tea.webp", "category": "Beverage", "unit": "Cup", "itemname": "Chinese Tea", "itemdesc": "Chinese Tea", "price": 4.2, "instock": 30, "oldstock": 30, "supplier": "Local" }, { "itemcode": "ITM-000011", "itemimage": "/public/assets/item-images/iced-tea-black.png", "category": "Beverage", "unit": "Cup", "itemname": "orange juice", "itemdesc": "orange juice", "price": 1.8, "instock": 3, "oldstock": 3, "supplier": "Local" }]);
  const [inventorylist, setInventorylist] = useState([{ "itemcode": "ITM-000001", "itemimage": "/public/assets/item-images/soya milk.webp", "category": "Beverage", "unit": "Cup", "itemname": "Soya Milk", "itemdesc": "Soya Milk", "price": 3, "instock": 52, "oldstock": 52, "supplier": "Local" }, { "itemcode": "ITM-000002", "itemimage": "/public/assets/item-images/tea c.png", "category": "Beverage", "unit": "Cup", "itemname": "Tea C", "itemdesc": "Tea C", "price": 4.7, "instock": 50, "oldstock": 50, "supplier": "Local" }, { "itemcode": "ITM-000003", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Steamed Timsum", "unit": "Pcs", "itemname": "Steamed Timsum", "itemdesc": "Steamed Timsum", "price": 7.3, "instock": 40, "oldstock": 40, "supplier": "Local" }, { "itemcode": "ITM-000004", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Porridge", "unit": "Bowl", "itemname": "Porridge", "itemdesc": "Porridge", "price": 11.2, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000005", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced Coffee", "itemdesc": "Iced Coffee", "price": 11.7, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000006", "itemimage": "/public/assets/item-images/coffee black.webp", "category": "Noodle/Dumplings", "unit": "Pcs", "itemname": "Dumplings", "itemdesc": "Dumplings", "price": 16.1, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000007", "itemimage": "/public/assets/item-images/iced-coffee.png", "category": "Beverage", "unit": "Glass", "itemname": "Iced milo", "itemdesc": "Iced milo", "price": 13.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000008", "itemimage": "/public/assets/item-images/coffee c.webp", "category": "Beverage", "unit": "Cup", "itemname": "Coffee C", "itemdesc": "Coffee C", "price": 16.5, "instock": 10, "oldstock": 10, "supplier": "Local" }, { "itemcode": "ITM-000009", "itemimage": "/public/assets/item-images/milo.png", "category": "Beverage", "unit": "Cup", "itemname": "Milo", "itemdesc": "Milo", "price": 15, "instock": 15, "oldstock": 15, "supplier": "Local" }, { "itemcode": "ITM-000010", "itemimage": "/public/assets/item-images/chinese tea.webp", "category": "Beverage", "unit": "Cup", "itemname": "Chinese Tea", "itemdesc": "Chinese Tea", "price": 4.2, "instock": 30, "oldstock": 30, "supplier": "Local" }, { "itemcode": "ITM-000011", "itemimage": "/public/assets/item-images/iced-tea-black.png", "category": "Beverage", "unit": "Cup", "itemname": "orange juice", "itemdesc": "orange juice", "price": 1.8, "instock": 3, "oldstock": 3, "supplier": "Local" }]);

  useEffect(() => {
    initStorage();
    const data = localStorage.getItem("inventory");
    const inventory = data ? JSON.parse(data) : [];
    setAllInventory(inventory);
    setInventorylist(inventory);
    handleCategory("Beverage");
  }, []);

  function search(e: any) {
    const { value } = e.target;
    const filteredlist = allInventory.filter((item) => item.itemname.toLowerCase().includes(value.toLowerCase()));
    setInventorylist(filteredlist);
  }


  // const checkoutlist = useState<checkouttype[]>([]);
  const checkoutlist: checkouttype[] = [
    { image: "./assets/item-images/iced-coffee.png", itemname: "Soya Milk", price: 16.50, total: 33.00, itemcode: "" },
    { image: "./assets/item-images/iced-coffee.png", itemname: "Tea C", price: 4.70, total: 23.50, itemcode: "" },
    { image: "./assets/item-images/iced-coffee.png", itemname: "Streamed Timsum", price: 7.30, total: 7.30, itemcode: "" },
    { image: "./assets/item-images/iced-coffee.png", itemname: "Porridge", price: 11.20, total: 11.20, itemcode: "" },
    { image: "./assets/item-images/iced-coffee.png", itemname: "Iced Tea", price: 11.70, total: 11.70, itemcode: "" },
    { image: "./assets/item-images/iced-coffee.png", itemname: "Dumplings", price: 16.10, total: 16.10, itemcode: "" },
    { image: "./assets/item-images/iced-coffee.png", itemname: "Iced Coffee", price: 13.50, total: 27.00, itemcode: "" },
    { image: "./assets/item-images/iced-coffee.png", itemname: "Coffee C", price: 16.50, total: 16.50, itemcode: "" }
  ]
  function addcartitem(item: invitemtype) {
    checkoutlist.push({
      itemcode: item.itemcode,
      image: item.itemimage,
      price: item.price,
      total: item.price,
      itemname: item.itemname
    })
  }

  return (<div className="content">
    <div className="overflow-hidden scrollbar-none w-full one">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex gap-2 text-nowrap text-md"><IconPosCafe icon="menu" color="black" size={24} />Current Bill</div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col items-end">
            <div className="text-ss-45 h-min">Total Amount</div>
            <div className="text-violet-800 font-bold h-min -mt-1.5 lg:text-lg" id="checkout-total-amount">$146.30</div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden scrollbar-none flex w-full h-full items-center justify-end gap-2.5 two">
      <input type="text" className="bg-white w-full border border-gray-100 shadow-sm shadow-gray-200 text-gray-800 p-2.5 bg-position-[8px] pl-7 rounded-lg font-roboto text-ss-45 bg-search bg-no-repeat bg-size-[1rem] lg:text-ss-60 xl:text-ss-70 lg:rounded-xl" name="search" placeholder="Search menu items..." autoComplete="off" onChange={search}></input>
      <div className="h-full w-fit flex items-center justify-center">
        <div className={`w-auto h-9/12 lg:h-11/12 flex items-center justify-center aspect-4/3 rounded-md shadow-sm ${(activeView == "grid") ? "bg-gpurple-reverse" : ""}`} onClick={() => handleView("grid")}>
          <IconPosCafe icon="grid" color={(activeView == "grid") ? "white" : "black"} size={14} />
        </div>
        <div className={`bg-white w-auto h-9/12 lg:h-11/12 flex items-center justify-center aspect-4/3 rounded-md shadow-sm  ${(activeView == "list") ? "bg-gpurple-reverse" : ""}`} onClick={() => handleView("list")}>
          <IconPosCafe icon="list" color={(activeView == "list") ? "white" : "black"} size={16} />
        </div>
      </div>
    </div>
    <div className="bg-white rounded-md shadow-sm overflow-hidden scrollbar-none p-3.5 relative three">
      {(!priceAmendment) ? (
        <table className="border-collapse text-center w-[98%]">
          <thead>
            <tr>
              <th>
                <div className="flex items-center ml-3 text-ss-45 w-1/4 lg:text-ss-70">Item</div>
              </th>
              <th className="text-ss-45 w-[20%] lg:text-ss-70">Qty</th>
              <th className="text-ss-45 w-[20%] lg:text-ss-70">Unit Price</th>
              <th className="text-ss-45 w-[25%] lg:text-ss-70">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="border-t border-gray-100 relative">
            {
              (checkoutlist.length > 0) ? (
                checkoutlist.map((item, index) => (
                  <tr key={index}>
                    <td className="pt-1 text-center">
                      <div className="flex items-center justify-start gap-1">
                        <img src={item.image} className="bg-ired-light p-1.5 rounded-md h-6 overflow-hidden"></img>
                        <div className="text-wrap text-left text-ss-45 font-bold lg:text-ss-70">{item.itemname}</div>
                      </div>
                    </td>
                    <td>
                      <div className="aligncount"><input type="number" placeholder="2"
                        className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-ss-45 border border-gray-200 rounded-md text-center p-0.5 w-7 lg:text-ss-70" name="count" value="2" onChange={() => { }}></input>
                      </div>
                    </td>
                    <td>
                      <div className="text-ss-45 font-bold lg:text-ss-70">${item.price.toFixed(2)}</div>
                    </td>
                    <td>
                      <div className="text-ss-45 font-bold lg:text-ss-70">${item.total.toFixed(2)}</div>
                    </td>
                    <td><IconPosCafe icon="delete" size={10} color="black" />
                    </td>
                  </tr>
                ))
              ) : (<tr className="">
                <td colSpan={5}>
                  <div className="h-full aspect-12/10 flex flex-col gap-1 items-center justify-center">
                    <div className="bg-gray-100 p-2 rounded-full">{<IconPosCafe icon="nolist" color="violet" size={24} />}</div>
                    <div className="text-black text-ss-55 mt-2">No items added yet</div>
                    <div className="text-gray-500 text-ss-45">Select items from menu to add to the list</div>
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      ) : (<div className="h-full w-full flex gap-2 flex-col">
        <div className="flex gap-2 items-center">
          <IconPosCafe icon="tag" color="purple" />
          <div className="text-ss-70 font-bold">Price Amendment</div>
        </div>
        <div className="w-full h-px bg-gray-100"></div>
        <div className="flex w-full justify-between">
          <div className="text-ss-55">Total Amount</div>
          <div className="text-ss-70">$146.30</div>
        </div>
        <div className="flex w-full justify-between">
          <div className="text-ss-55">GST Amount (7%)</div>
          <div className="text-ss-70">$10.24</div>
        </div>
        <div className="w-full h-px bg-gray-100"></div>
        <div className="flex w-full justify-between">
          <div className="text-ss-70">Payable</div>
          <div className="text-md">$156.54</div>
        </div>
        <div className="w-full h-px bg-gray-100"></div>
        <div className="flex w-full justify-between">
          <div className="text-ss-55">Tender</div>
          <input type="number" autoComplete="false" placeholder="$160.00" className="border rounded-md border-gray-300 text-end w-1/3 text-sm text-thin" />
        </div>
        <div className="flex w-full justify-between bg-purple-100 p-2 items-center rounded-md">
          <div className="text-ss-55">Change (Balance)</div>
          <div className="text-sm">$3.46</div>
        </div>
        <div></div>
      </div>)}
      {
        (checkoutlist.length > 0) && (!priceAmendment) ? (
          <div className="bg-info flex justify-start align-top gap-1 p-1 px-2 mt-1 rounded-md relative bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#0e08f6"><path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            <div className=" text-black font-thin text-ss-30 md:text-ss-40 lg:text-ss-55">
              <p>Click item to create billing entry. If item alreadyexists, quantity will increase.</p>
              <p>Cancel item removes the last billed item. Delete All clears local data.</p>
              <p>Main menu will redirect to menu page.</p>
            </div>
          </div>
        ) : null
      }
    </div>
    <div className="bg-white rounded-md shadow-sm overflow-hidden scrollbar-none four">
      <div className="w-full flex flex-col overflow-hidden scrollbar-none text-black relative h-full gap-2 p-1 md:p-3.5">
        {
          categorylist.map((category, index) => (
            <div key={index} className={`flex items-center justify-start gap-2 px-2 py-2 lg:py-3 lg:px-4 rounded-md ${(activeCategory == category.name) ? "bg-gpurple text-white" : ""}`} onClick={() => handleCategory(category.name)}>
              {(activeCategory == category.name) ? <IconPosCafe icon={category.icon} size={14} /> : <IconPosCafe icon={category.icon} size={14} color="black" />}
              <span className="text-ss-45 xl:text-ss-60">{category.name}</span>
            </div>
          ))
        }
      </div>
    </div>
    <div className="bg-white rounded-md shadow-sm overflow-hidden relative overflow-y-scroll scrollbar-none five">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2.5 p-3.5 lg:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
        {
          inventorylist.map((item, index) => (
            <div key={index} className="flex flex-col rounded-md items-center aspect-square p-2 relative shadow-sm shadow-gray-100 border border-gray-100 option-item-select" onClick={()=>addcartitem(item)}>
              <img src={item.itemimage} className="absolute h-9/12"></img>
              <div className="absolute flex flex-col w-full h-7 items-center justify-center bottom-0 bg-white rounded-md lg:h-2/5">
                <span className="text-ss-40 relative w-full text-center lg:text-ss-50">{item.itemname}</span>
                <span className="font-noto text-ss-40 text-gray-700 text-thin relative lg:text-ss-50">{""}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div className="bg-white rounded-md shadow-sm overflow-hidden scrollbar-none flex flex-col items-center w-full p-3.5 gap-1 -mt-2 six">
      <div className="flex w-full gap-2 items-end">
        <div className="grow w-1/3">
          <div className="text-ss-45 lg:text-ss-60">Item Number</div>
          <input type="text" placeholder="Scan / Enter item Number" className="w-full p-1 items-center justify-center rounded-md text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5 bg-barcode bg-no-repeat bg-right bg-size-[12px] lg:text-ss-60" name="itemnumber" id="calc-itemnumber-name"></input>
        </div>
        <div className="grow w-1/5">
          <div className="text-ss-45 lg:text-ss-60">Quantity</div>
          <div className="flex w-full items-center justify-center text-center rounded-md text-black bg-gray-50 border border-gray-200 text-ss-45">
            <div className="px-2.5 text-ss-50">-</div>
            <input type="text" placeholder="1" className="w-full p-1 items-center justify-center text-center text-black bg-white text-ss-50 lg:text-ss-60" name="quantity" value="1" onChange={() => { }}></input>
            <div className="px-2.5 text-ss-50">+</div>
          </div>
        </div>
        <div className="bg-gpurple text-white text-center text-ss-45 rounded-md p-1 py-1.5 aspect-16/4 lg:text-ss-60">Add</div>
      </div>
      <div className="w-1/3 h-px bg-gray-200"></div>
      <div className="flex w-full gap-2 grow justify-between">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="w-full">
            <div className="w-full">
              <div className="text-ss-45 lg:text-ss-60">Table No</div>
              <input type="text" placeholder="Enter table no" className="w-full p-1 items-center justify-center rounded-md text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5 lg:text-ss-60" name="tableno"></input>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full">
              <div className="text-ss-45 lg:text-ss-60">No of Cover</div>
              <input type="text" placeholder="Enter no of cover" className="w-full p-1 items-center justify-center rounded-md text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5 lg:text-ss-60" name="cover"></input>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 grow md:max-w-50 md:max-h-35">
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">7</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">8</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">9</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">4</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">5</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">6</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">1</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">2</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">3</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">0</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm text-ss-50 lg:text-ss-60">.</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-md text-black shadow-sm"><IconPosCafe icon="backspace" color="black" size={10} /></div>
        </div>
        <div className="">
          <div className="bg-gpurple text-white text-center rounded-md  p-1 py-1.5 text-ss-45 aspect-16/4 mb-1 lg:text-ss-60">AC</div>
          <div className="bg-gpurple text-white text-center rounded-md  p-1 py-1.5 text-ss-45 aspect-16/4 lg:text-ss-60">Clear</div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden rounded-md seven bg-bviolet0 flex gap-px grid-cols-[repeat(3, 60px)]">
      <div className="h-full flex flex-col md:flex-row">
        <div className="bg-bviolet1 flex items-center justify-center flex-col h-full rounded-md gap-1 md:aspect-square">
          <IconPosCafe icon="add" />
          <div className="text-white text-ss-45 font-thin lg:text-ss-70">New Bill</div>
        </div>
        <div className="bg-bviolet2 flex items-center justify-center flex-col h-full rounded-md gap-1 lg:aspect-4/3 p-2.5 md:p-0" onClick={() => { handlePriceView(!priceAmendment); }}>
          <IconPosCafe icon="tag" />
          <div className="text-white text-ss-45 font-thin px-2 text-center lg:text-ss-70 lg:text-wrap">Price Amendment</div>
        </div>
      </div>
      <div className="grid gap-px grid-cols-[repeat(3,1fr)] grow">
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-md text-white text-ss-55 font-thin lg:text-ss-70">$2</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-md text-white text-ss-55 font-thin lg:text-ss-70">$5</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-md text-white text-ss-55 font-thin lg:text-ss-70">$10</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-md text-white text-ss-55 font-thin lg:text-ss-70">$20</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-md text-white text-ss-55 font-thin lg:text-ss-70">$50</div>
        <div className="bg-bviolet3 flex flex-col items-center justify-center rounded-md">
          <IconPosCafe icon="gift" size={14} />
          <div className="text-white text-ss-45 font-thin text-center lg:text-ss-70">Gift Voucher</div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden rounded-md bg-ggreen gap-0.5 grid grid-cols-2 grid-rows-2 eight grid-eight">
      <div className="flex flex-col justify-center items-center rounded-md font-thin bg-ggreen">
        <IconPosCafe icon="cashbox" size={14} />
        <div className="text-white text-ss-45 lg:text-ss-70">Open Cash Box</div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-md font-thin bg-ggreen">
        <IconPosCafe icon="star" size={14} />
        <div className="text-white text-ss-45 lg:text-ss-70">Goods Return</div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-md font-thin bg-ggreen">
        <IconPosCafe icon="reset" size={14} />
        <div className="text-white text-ss-45 lg:text-ss-70">Cancel Item</div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-md font-thin bg-ggreen">
        <IconPosCafe icon="cart" size={14} />
        <div className="text-white text-ss-45 lg:text-ss-70">Add Item</div>
      </div>
    </div>
    <div className="overflow-hidden rounded-md nine grid-nine bg-gorange text-sm">
      <div className="grid grid-cols-4 gap-0.5 rounded-md h-1/2">
        <div className="flex text-wrap justify-center items-center rounded-md text-center h-full bg-gorange flex-col md:flex-row">
          <IconPosCafe icon="disable" size={14} />
          <div className="text-white text-ss-45 w-min lg:text-ss-70">Terminate Transaction</div>
        </div>
        <div className="flex text-wrap justify-center items-center rounded-md text-center h-full bg-gorange flex-col md:flex-row">
          <IconPosCafe icon="print" size={14} />
          <div className="text-white text-ss-45 w-min lg:text-ss-70">Print</div>
        </div>
        <div className="flex text-wrap justify-center items-center rounded-md text-center h-full bg-gorange flex-col md:flex-row">
          <IconPosCafe icon="bookmark" size={14} />
          <div className="text-white text-ss-45 w-min lg:text-ss-70">Reserved Transaction</div>
        </div>
        <div className="flex text-wrap justify-center items-center rounded-md text-center h-full bg-gorange flex-col md:flex-row">
          <IconPosCafe icon="delete" size={14} />
          <div className="text-white text-ss-45 w-min lg:text-ss-70">Delete All Transaction</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0.5 rounded-md h-1/2">
        <div className="w-full h-full rounded-md">
          <div className="h-full w-full bg-gorange flex items-center justify-center  rounded-md flex-col md:flex-row">
            <IconPosCafe icon="reset" size={14} />
            <div className="text-white text-ss-45 lg:text-ss-70">Restore</div>
          </div></div>
        <div className="w-full h-full rounded-md">
          <div className="h-full w-full flex items-center justify-center rounded-md flex-col md:flex-row">
            <IconPosCafe icon="home" size={14} />
            <div className="text-white text-ss-45 lg:text-ss-70">Main Menu</div>
          </div></div>
      </div>
    </div>
  </div>);
}