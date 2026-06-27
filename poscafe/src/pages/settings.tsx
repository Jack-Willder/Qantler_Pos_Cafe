import { useState } from "react";
import { IconPosCafe, BadgePosCafe } from "../Helper/icons";

export default function Billing() {
  const [activeCategory, setActiveCategory] = useState("Beverage");
  const [activeView, setActiveView] = useState("grid");
  const handleCategory = (categoryname: string): void => { setActiveCategory(categoryname || "Beverage"); };
  const handleView = (viewname: string): void => { setActiveView(viewname || "Beverage"); };

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

  const inventorylist = [
    { imgpath: "./assets/item-images/coffee black.webp", itemname: "Coffee Black", chinesename: "咖啡黑" },
    { imgpath: "./assets/item-images/tea black.webp", itemname: "Tea Black", chinesename: "茶黑" },
    { imgpath: "./assets/item-images/coffee.webp", itemname: "Chrysanthemum Tea", chinesename: "菊花茶" },
    { imgpath: "./assets/item-images/coffee.webp", itemname: "Coffee", chinesename: "咖啡" },
    { imgpath: "./assets/item-images/tea.png", itemname: "Tea", chinesename: "茶" },
    { imgpath: "./assets/item-images/chinese tea.webp", itemname: "Chinese Tea", chinesename: "中国茶" },
    { imgpath: "./assets/item-images/iced coffee black.webp", itemname: "Iced Coffee Black", chinesename: "咖啡黑" },
    { imgpath: "./assets/item-images/iced-tea-black.png", itemname: "Iced Tea Black", chinesename: "茶黑" },
    { imgpath: "./assets/item-images/soya milk.webp", itemname: "soya Milk", chinesename: "牛奶" },
    { imgpath: "./assets/item-images/iced-coffee.png", itemname: "Iced Coffee", chinesename: "冰咖啡" },
    { imgpath: "./assets/item-images/iced tea.webp", itemname: "Iced Tea", chinesename: "冰茶" },
    { imgpath: "./assets/item-images/grass jelly.png", itemname: "Grass Jelly", chinesename: "仙草" },
    { imgpath: "./assets/item-images/coffee c.webp", itemname: "Coffee C", chinesename: "咖啡C" },
    { imgpath: "./assets/item-images/tea c.png", itemname: "Tea C", chinesename: "茶C" },
    { imgpath: "./assets/item-images/black and white.png", itemname: "Black & White", chinesename: "黑, 白" },
    { imgpath: "./assets/item-images/milo.png", itemname: "Milo", chinesename: "米露" },
    { imgpath: "./assets/item-images/iced-milo.png", itemname: "Iced Milo", chinesename: "冰 Milo" },
    { imgpath: "./assets/item-images/takeaway water.webp", itemname: "Takeaway (Water)", chinesename: "外带 (水)" }
  ];


  const checkoutlist = [
    { image: <BadgePosCafe color="purple" size={12} />, itemname: "Soya Milk", price: "$16.50", total: "$33.00" },
    { image: <BadgePosCafe color="green" size={12} />, itemname: "Tea C", price: "$4.70", total: "$23.50" },
    { image: <BadgePosCafe color="orange" size={12} />, itemname: "Streamed Timsum", price: "$7.30", total: "$7.30" },
    { image: <BadgePosCafe color="blue" size={12} />, itemname: "Porridge", price: "$11.20", total: "$11.20" },
    { image: <img src="./assets/item-images/iced-coffee.png" className="bg-ired-light p-1.5 rounded-sm h-6 overflow-hidden"></img>, itemname: "Iced Tea", price: "$11.70", total: "$11.70" },
    { image: <BadgePosCafe color="brown" size={12} />, itemname: "Dumplings", price: "$16.10", total: "$16.10" },
    { image: <img src="./assets/item-images/iced-coffee.png" className="bg-igrey-light p-1.5 rounded-sm h-6 overflow-hidden"></img>, itemname: "Iced Coffee", price: "$13.50", total: "$27.00" },
    { image: <img src="./assets/item-images/iced-coffee.png" className="bg-iash-light p-1.5 rounded-sm h-6 overflow-hidden"></img>, itemname: "Coffee C", price: "$16.50", total: "$16.50" }
  ];





  return (<div className="content">
    <div className="overflow-hidden scrollbar-none w-full one">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex gap-2 text-nowrap text-md"><IconPosCafe icon="menu" color="black" size={24} />Current Bill</div>
        <div className="h-full flex flex-col">
          <div className="flex flex-col items-end">
            <div className="text-ss-45 h-min">Total Amount</div>
            <div className="text-violet-800 font-bold h-min" id="checkout-total-amount">$146.30</div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden scrollbar-none flex w-full h-full items-center justify-end gap-2 two">
      <input type="text" className="bg-white w-10/12 border border-gray-100 shadow-sm shadow-gray-200 text-gray-800 p-2.5 bg-position-[8px] pl-7 rounded-md font-roboto text-ss-45 bg-search bg-no-repeat bg-size-[1rem]" name="search" placeholder="Search menu items..." autoComplete="off"></input>
      <div className="h-full w-fit flex items-center justify-center">
        <div className={`w-auto h-10/12 flex items-center justify-center aspect-square rounded-sm shadow-sm ${(activeView == "grid") ? "bg-gpurple-reverse" : ""}`} onClick={() => handleView("grid")}>
          <IconPosCafe icon="grid" color={(activeView == "grid") ? "white" : "black"} />
        </div>
        <div className={`bg-white w-auto h-10/12 flex items-center justify-center aspect-square rounded-sm shadow-sm  ${(activeView == "list") ? "bg-gpurple-reverse" : ""}`} onClick={() => handleView("list")}>
          <IconPosCafe icon="list" color={(activeView == "list") ? "white" : "black"} />
        </div>
      </div>
    </div>
    <div className="bg-white rounded-sm shadow-sm overflow-hidden scrollbar-none p-3.5 relative three">
      <table className="border-collapse text-center w-[98%]">
        <thead>
          <tr>
            <th>
              <div className="flex items-center ml-3 text-ss-45 w-1/4">Item</div>
            </th>
            <th className="text-ss-45 w-[20%]">Qty</th>
            <th className="text-ss-45 w-[20%]">Unit Price</th>
            <th className="text-ss-45 w-[20%]">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-100">
          {
            checkoutlist.map((item, index) => (
              <tr key={index}>
                <td className="pt-1 text-center">
                  <div className="flex items-center justify-start gap-1">
                    {item.image}
                    <div className="text-ss-45 font-bold">{item.itemname}</div>
                  </div>
                </td>
                <td>
                  <div className="aligncount"><input type="number" placeholder="2"
                    className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-ss-45 border border-gray-200 rounded-sm text-center p-0.5 w-7" name="count" value="2" onChange={() => { }}></input>
                  </div>
                </td>
                <td>
                  <div className="text-ss-45 font-bold">{item.price}</div>
                </td>
                <td>
                  <div className="text-ss-45 font-bold">{item.total}</div>
                </td>
                <td><IconPosCafe icon="delete" size={10} color="black" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="bg-info flex justify-start align-top gap-1 p-1 px-2 mt-1 rounded-sm relative bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#0e08f6"><path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
        <div className=" text-black font-thin text-ss-50">
          <p>Click item to create billing entry. If item alreadyexists, quantity will increase.</p>
          <p>Cancel item removes the last billed item. Delete All clears local data.</p>
          <p>Main menu will redirect to menu page.</p>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-sm shadow-sm overflow-hidden scrollbar-none four">
      <div className="w-full flex flex-col overflow-hidden scrollbar-none text-black p-3.5 relative h-full gap-2">
        {
          categorylist.map((category, index) => (
            <div key={index} className={`flex items-center gap-2 px-2 py-2 rounded-sm ${(activeCategory == category.name) ? "bg-gpurple text-white" : ""}`} onClick={() => handleCategory(category.name)}>
              {(activeCategory == category.name) ? <IconPosCafe icon={category.icon} size={16} /> : <IconPosCafe icon={category.icon} size={14} color="black" />}
              <span className="text-ss-45">{category.name}</span>
            </div>
          ))
        }
      </div>
    </div>
    <div className="bg-white rounded-sm shadow-sm overflow-hidden scrollbar-none relative five">
      <div className="grid grid-cols-4 gap-2.5 overflow-y-scroll scrollbar-none p-3.5">
        {
          inventorylist.map((item, index) => (
            <div key={index} className="flex flex-col rounded-sm items-center aspect-square p-2 relative shadow-sm shadow-gray-100 border border-gray-100 option-item-select">
              <img src={item.imgpath} className="absolute h-9/12"></img>
              <div className="absolute flex flex-col w-full h-7 items-center justify-center bottom-0 bg-white rounded-sm">
                <span className="text-ss-40 relative w-full text-center">{item.itemname}</span>
                <span className="font-noto text-ss-40 text-gray-700 text-thin relative">{item.chinesename}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div className="bg-white rounded-sm shadow-sm overflow-hidden scrollbar-none flex flex-col items-center w-full p-3.5 gap-1 six">
      <div className="flex w-full gap-2 grow items-end">
        <div className="grow w-1/3">
          <div className="text-ss-45">Item Number</div>
          <input type="text" placeholder="Scan / Enter item Number" className="w-full p-1 items-center justify-center rounded-sm text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5 bg-barcode bg-no-repeat bg-right bg-size-[12px]" name="itemnumber" id="calc-itemnumber-name"></input>
        </div>
        <div className="grow w-1/5">
          <div className="text-ss-45">Quantity</div>
          <div className="flex w-full items-center justify-center text-center rounded-sm text-black bg-gray-50 border border-gray-200 text-ss-45">
            <div className="px-2.5 text-ss-50">-</div>
            <input type="text" placeholder="1" className="w-full p-1 items-center justify-center text-center text-black bg-white text-ss-50" name="quantity" value="1" onChange={() => { }}></input>
            <div className="px-2.5 text-ss-50">+</div>
          </div>
        </div>
        <div className="bg-gpurple text-white text-center text-ss-45 rounded-sm p-1 py-1.5 aspect-16/4">Add</div>
      </div>
      <div className="w-1/6 h-2 bg-black"></div>
      <div className="flex w-full gap-2 grow">
        <div className="flex flex-col gap-2">
          <div className="">
            <div>
              <div className="text-ss-45">Table No</div>
              <input type="text" placeholder="Enter table no" className="w-full p-1 items-center justify-center rounded-sm text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5" name="tableno"></input>
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-ss-45">No of Cover</div>
              <input type="text" placeholder="Enter no of cover" className="w-full p-1 items-center justify-center rounded-sm text-black bg-gray-50 border border-gray-200 text-ss-45 pl-1.5" name="cover"></input>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 grow">
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">7</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">8</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">9</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">4</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">5</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">6</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">1</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">2</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">3</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">0</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm text-ss-50">.</div>
          <div className="flex items-center justify-center bg-grey-100 border border-gray-100 rounded-sm text-black shadow-sm"><IconPosCafe icon="backspace" color="black" size={10} /></div>
        </div>
        <div className="">
          <div className="bg-gpurple text-white text-center rounded-sm  p-1 py-1.5 text-ss-45 aspect-16/4 mb-1">AC</div>
          <div className="bg-gpurple text-white text-center rounded-sm  p-1 py-1.5 text-ss-45 aspect-16/4">Clear</div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden rounded-sm seven bg-bviolet0 flex gap-px mt-2 grid-cols-[repeat(3, 60px)]">
      <div className="bg-bviolet1 flex items-center justify-center flex-col rounded-sm aspect-square gap-1">
        <IconPosCafe icon="add" />
        <div className="text-white text-ss-45 font-thin">New Bill</div>
      </div>
      <div className="bg-bviolet2 flex items-center justify-center flex-col  rounded-sm aspect-4/3 gap-1">
        <IconPosCafe icon="tag" />
        <div className="text-white text-ss-45 font-thin">Price Amendment</div>
      </div>
      <div className="grid gap-px grid-cols-[repeat(3,1fr)] grow">
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-sm text-white text-ss-55 font-thin">$2</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-sm text-white text-ss-55 font-thin">$5</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-sm text-white text-ss-55 font-thin">$10</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-sm text-white text-ss-55 font-thin">$20</div>
        <div className="bg-bviolet3 flex flex-col justify-center items-center rounded-sm text-white text-ss-55 font-thin">$50</div>
        <div className="bg-bviolet3 flex flex-col items-center justify-center rounded-sm">
          <IconPosCafe icon="gift" size={14} />
          <div className="text-white text-ss-45 font-thin">Gift Voucher</div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden rounded-sm bg-ggreen gap-0.5 grid mt-2 grid-cols-2 grid-rows-2 eight grid-eight">
      <div className="flex flex-col justify-center items-center rounded-sm font-thin bg-ggreen">
        <IconPosCafe icon="cashbox" size={14} />
        <div className="text-white text-ss-45">Open Cash Box</div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-sm font-thin bg-ggreen">
        <IconPosCafe icon="star" size={14} />
        <div className="text-white text-ss-45">Goods Return</div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-sm font-thin bg-ggreen">
        <IconPosCafe icon="reset" size={14} />
        <div className="text-white text-ss-45">Cancel Item</div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-sm font-thin bg-ggreen">
        <IconPosCafe icon="cart" size={14} />
        <div className="text-white text-ss-45">Add Item</div>
      </div>
    </div>
    <div className="overflow-hidden rounded-sm nine grid-nine bg-gorange text-sm mt-2">
      <div className="grid grid-cols-4 gap-0.5 rounded-sm h-1/2">
        <div className="flex text-wrap justify-center items-center rounded-sm text-center h-full bg-gorange">
          <IconPosCafe icon="disable" size={14} />
          <div className="text-white text-ss-45 w-min">Terminate Transaction</div>
        </div>
        <div className="flex text-wrap justify-center items-center rounded-sm text-center h-full bg-gorange">
          <IconPosCafe icon="print" size={14} />
          <div className="text-white text-ss-45 w-min">Print</div>
        </div>
        <div className="flex text-wrap justify-center items-center rounded-sm text-center h-full bg-gorange">
          <IconPosCafe icon="bookmark" size={14} />
          <div className="text-white text-ss-45 w-min">Reserved Transaction</div>
        </div>
        <div className="flex text-wrap justify-center items-center rounded-sm text-center h-full bg-gorange">
          <IconPosCafe icon="delete" size={14} />
          <div className="text-white text-ss-45 w-min">Delete All Transaction</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0.5 rounded-sm h-1/2">
        <div className="w-full h-full rounded-sm">
          <div className="h-full w-full bg-gorange flex items-center justify-center  rounded-sm">
            <IconPosCafe icon="reset" size={14} />
            <div className="text-white text-ss-45">Restore</div>
          </div></div>
        <div className="w-full h-full rounded-sm">
          <div className="h-full w-full flex items-center justify-center rounded-sm">
            <IconPosCafe icon="home" size={14} />
            <div className="text-white text-ss-45">Main Menu</div>
          </div></div>
      </div>
    </div>
  </div>);
}
