import { useState } from "react";
import { IconPosCafe, BadgePosCafe } from "../icons";

export default function Billing() {
  const [activeCategory, setActiveCategory] = useState("Beverage");
  const handleCategory = (categoryname: string): void => {
    setActiveCategory(categoryname || "Beverage");
  };

  const categorylist = [
    { name: "Beverage", icon: <IconPosCafe /> },
    { name: "Steamed Bun", icon: <IconPosCafe /> },
    { name: "Steamed Timsum", icon: <IconPosCafe /> },
    { name: "Deep Fry Timsum", icon: <IconPosCafe /> },
    { name: "Bake", icon: <IconPosCafe /> },
    { name: "Noodle/ Dumplings", icon: <IconPosCafe /> },
    { name: "Porridge", icon: <IconPosCafe /> },
    { name: "All Items", icon: <IconPosCafe /> },
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
    { image: <BadgePosCafe color="purple"/>, itemname: "Soya Milk", price: "$16.50", total: "$33.00" },
    { image: <BadgePosCafe color="green"/>, itemname: "Tea C", price: "$4.70", total: "$23.50" },
    { image: <BadgePosCafe color="orange"/>, itemname: "Streamed Timsum", price: "$7.30", total: "$7.30" },
    { image: <BadgePosCafe color="blue"/>, itemname: "Porridge", price: "$11.20", total: "$11.20" },
    { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Iced Tea", price: "$11.70", total: "$11.70" },
    { image: <BadgePosCafe color="grey"/>, itemname: "Dumplings", price: "$16.10", total: "$16.10" },
    { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Iced Coffee", price: "$13.50", total: "$27.00" },
    { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Coffee C", price: "$16.50", total: "$16.50" }
  ];





  return (<div className="content">
    <div className="card one">
      <div className="grid-total">
        <div className="billtitle text-nowrap">Current Bill<IconPosCafe /></div>
        <div className="totalamount">
          <div className="aligntotal">
            <div className="amounttitle">Total Amount</div>
            <div className="text-violet-800 font-bold" id="checkout-total-amount">$146.30</div>
          </div>
        </div>
      </div>
    </div>
    <div className="search card two grid-search">
      <input type="text" className="bar" name="search" placeholder="Search menu items..." autoComplete="off"></input>
      <div className="changelayout">
        <div className="layoutgrid bg-gpurple-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ffffff"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" /></svg>
        </div>
        <div className="layoutlist">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" /></svg>
        </div>
      </div>
    </div>
    <div className="card three grid-bill relative">
      <table className="border-collapse text-center w-[98%]">
        <thead>
          <tr>
            <th>
              <div className="flex items-center ml-3 text-ss-55">Item</div>
            </th>
            <th className="text-ss-55">Qty</th>
            <th className="text-ss-55">Unit Price</th>
            <th className="text-ss-55">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="border-t-2 border-gray-100">
          {
            checkoutlist.map((item, index) => (
              <tr key={index}>
                <td className="pt-2.5">
                  <div className="alignnames">{item.image}
                    <div className="text-ss-55 font-bold">{item.itemname}</div>
                  </div>
                </td>
                <td>
                  <div className="aligncount"><input type="number" placeholder="2"
                    className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-ss-55 border-2 border-gray-200 rounded-sm text-center p-1 w-10" name="count" value="2" onChange={() => {}}></input>
                  </div>
                </td>
                <td>
                  <div className="text-ss-55 font-bold">{item.price}</div>
                </td>
                <td>
                  <div className="text-ss-55 font-bold">{item.total}</div>
                </td>
                <td><svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#505050"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="bg-info flex justify-start align-top gap-2 p-2 rounded-sm relative bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#0e08f6"><path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
        <div className=" text-black font-thin text-ss-50">
          <p>Click item to create billing entry. If item alreadyexists, quantity will increase.</p>
          <p>Cancel item removes the last billed item. Delete All clears local data.</p>
          <p>Main menu will redirect to menu page.</p>
        </div>
      </div>
    </div>
    <div className="card four grid-types">
      <div className="types-options">
        {
          categorylist.map((category, index) => (
            <div key={index} className={(activeCategory == category.name) ? "option-type bg-gpurple text-white" : "option-type"} onClick={() => handleCategory(category.name)}>
              {(activeCategory == category.name) ? <IconPosCafe /> : <IconPosCafe color="black"/>}
              <span className="text-ss-55">{category.name}</span>
            </div>
          ))
        }
      </div>
    </div>
    <div className="card five grid-items">
      <div className="grid grid-cols-3 gap-2.5 overflow-y-scroll scrollbar-none py-2">
        {
          inventorylist.map((item, index) => (
            <div key={index} className="option-item option-item-select">
              <img src={item.imgpath} className="absolute h-9/12"></img>
              <span className="text-ss-40 relative top-18">{item.itemname}</span>
              <span className="font-noto text-ss-40 text-gray-700 text-thin relative top-17">{item.chinesename}</span>
            </div>
          ))
        }
      </div>
    </div>
    <div className="card six grid-calc">
      <div className="crow-top">
        <div className="align-item-number">
          <div className="itemnumber-name">Item Number</div>
          <input type="text" placeholder="Scan / Enter item Number" className="itemnumber-input cinput" name="itemnumber" id="calc-itemnumber-name"></input>
        </div>
        <div className="align-quantity">
          <div className="quantity-name">Quantity</div>
          <div className="align-quantity-input">
            <div className="minus">-</div>
            <input type="text" placeholder="1" className="quantity-input cinput" name="quantity" value="1" onChange={() => { }}></input>
            <div className="plus">+</div>
          </div>
        </div>
        <div className="calc-add">
          <div className="text-transparent">Add</div>
          <div className="bg-gpurple text-white text-center rounded-sm p-2 aspect-4/1">Add</div>
        </div>
      </div>
      <div className="crow-separator"></div>
      <div className="crow-bottom">
        <div className="calc-table">
          <div className="crow-align-tablename">
            <div className="align-tablename">
              <div className="tableno-name">Table No</div>
              <input type="text" placeholder="Enter table no" className="tableno-input cinput" name="tableno"></input>
            </div>
          </div>
          <div className="crow-align-cover">
            <div className="align-cover">
              <div className="cover-name">No of Cover</div>
              <input type="text" placeholder="Enter no of cover" className="cover-input cinput" name="cover"></input>
            </div>
          </div>
        </div>
        <div className="calc-calc">
          <div className="cb-7 cb">7</div>
          <div className="cb-8 cb">8</div>
          <div className="cb-9 cb">9</div>
          <div className="cb-4 cb">4</div>
          <div className="cb-5 cb">5</div>
          <div className="cb-6 cb">6</div>
          <div className="cb-1 cb">1</div>
          <div className="cb-2 cb">2</div>
          <div className="cb-3 cb">3</div>
          <div className="cb-0 cb">0</div>
          <div className="cb-dot cb">.</div>
          <div className="cb-del cb"><IconPosCafe /></div>
        </div>
        <div className="crow-button">
          <div className="bg-gpurple text-white text-center rounded-sm p-2 aspect-4/1 mb-1">AC</div>
          <div className="bg-gpurple text-white text-center rounded-sm p-2 aspect-4/1">Clear</div>
        </div>
      </div>
    </div>
    <div className="card seven grid-seven">
      <div className="newbill" id="new-checkout-bill">
        <IconPosCafe />
        <div className="bill-name">New Bill</div>
      </div>
      <div className="price">
        <IconPosCafe />
        <div className="price-name">Price Amendment</div>
      </div>
      <div className="pricegroup">
        <div className="ptwo pgroup">$2</div>
        <div className="pfive pgroup">$5</div>
        <div className="pten pgroup">$10</div>
        <div className="ptnty pgroup">$20</div>
        <div className="pfity pgroup">$50</div>
        <div className="pgift pgroup">
          <IconPosCafe />
          <div className="price-name">Gift Voucher</div>
        </div>
      </div>
    </div>
    <div className="card eight grid-eight">
      <div className="cashbox">
        <IconPosCafe />
        <div className="cashbox-name">Open Cash Box</div>
      </div>
      <div className="goodsreturn">
        <IconPosCafe />
        <div className="goodsreturn-name">Goods Return</div>
      </div>
      <div className="cancelitem">
        <IconPosCafe />
        <div className="cancelitem-name">Cancel Item</div>
      </div>
      <div className="additem">
        <IconPosCafe />
        <div className="additem-name">Add Item</div>
      </div>
    </div>
    <div className="card nine grid-nine bg-gorange text-sm">
      <div className="arowone">
        <div className="tcan bg-gorange">
          <IconPosCafe />
          <div className="tcan-name">Terminate Transaction</div>
        </div>
        <div className="print bg-gorange">
          <IconPosCafe />
          <div className="print-name">Print</div>
        </div>
        <div className="tres bg-gorange">
          <IconPosCafe />
          <div className="tres-name">Reserved Transaction</div>
        </div>
        <div className="tdel bg-gorange">
          <IconPosCafe />
          <div className="tdel-name">Delete All Transaction</div>
        </div>
      </div>
      <div className="arowtwo">
        <div className="restore">
          <div className="tdel bg-gorange">
            <IconPosCafe />
            <div className="tdel-name">Restore</div>
          </div></div>
        <div className="mainmenu">
          <div className="tdel bg-gorange">
            <IconPosCafe />
            <div className="tdel-name">Main Menu</div>
          </div></div>
      </div>
    </div>
  </div>);
}