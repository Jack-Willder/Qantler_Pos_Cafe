import { useState } from "react";
import { IconPosCafe } from "../icons";

interface datetype {
  date: {
    date: string,
    day: string,
    time: string;
  };
}
export default function Inventory({date}:datetype) {
  const [currentPage, setCurrentPage] = useState(1);
  const inventorylist = [
    { itemimage: <img src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Soya Milk", category: "Beverage", price: "$3.00", unit: "Cup", purchased: "150", sold: "98", instock: "52", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
    { itemimage: <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png" alt="coffee" srcSet="" className="w-4.5 h-4.5"></img>, itemname: "Tea C", category: "Beverage", price: "$4.70", unit: "Cup", purchased: "200", sold: "150", instock: "50", status: "In Stock", lastupdated: "20 May 2024, 10:30AM" },
  ];

  return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-4 h-full w-full font-bold">
        <div className="flex grow">
          <div className="flex items-center justify-center gap-3">
            <IconPosCafe color="black" icon="menu" size={24} />
            <div className="text-md text-md">Customer Report</div>
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
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <IconPosCafe color="black" icon="allitems" size={12} />
              <select name="opg-select" id="opg-select-category" className="opg-select w-full" required>
                <option value="all">All Categories</option>
                <option value="Beverage">Beverage</option>
                <option value="Steamed Bun">Steamed Bun</option>
                <option value="Steamed Timsum">Steamed Timsum</option>
                <option value="Deep Fry Timsum">Deep Fry Timsum</option>
                <option value="Bake">Bake</option>
                <option value="Noodle/Dumplings">Noodle/ Dumplings</option>
                <option value="Porridge">Porridge</option>
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Item Name</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <IconPosCafe color="black" size={12} />
              <select name="opg-select" id="opg-select-items" className="opg-select w-full">
                <option value="all">All Items</option>
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Status</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="opg-select" id="opg-select-status" className="opg-select w-full">
                <option value="all">All Status</option>
                <option value="instock">In Stock</option>
                <option value="lowstock">Low Stock</option>
                <option value="outofstock">Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500">Date From</div>
            <input className="border border-gray-200 rounded-md p-2 w-full" type="date" id="opg-select-dfrom" value="2024-05-20"></input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500">Date To</div>
            <input className="border border-gray-200 rounded-md p-2 w-full" type="date" id="opg-select-dto" value="2024-05-20"></input>
          </div>
          <div className="flex h-full items-end gap-2">
            <div className="bg-gpurple flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200" id="inventory-action-filter">
              <IconPosCafe color="white" icon="filter" />
              <span className="text-white">Filter</span>
            </div>
            <div className="flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200" id="inventory-action-reset">
              <IconPosCafe color="black" icon="reset" />
              <span className="text-black">Reset</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-3 overflow-hidden h-full flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="align-ttitle">
              <div className="text-ss-70 font-bold">Inventory List</div>
              <div className="text-gray-500 text-ss-45">Total 128 items found</div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1 px-3 border border-gray-200" id="additem" data-target="additem">
                  <IconPosCafe color="purple" icon="add" />
                  <span className="text-bviolet1">Add Item</span>
                </div>
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1 px-3 bg-gpurple text-white" id="additem" data-target="request">
                  <IconPosCafe color="white" icon="download" />
                  <span className="text-white">Request Item</span>
                </div>
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1 px-3 border border-gray-200">
                  <IconPosCafe color="black" icon="book" />
                  <span className="text-black">Export to Excel</span>
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
              {inventorylist.map((item, index) => (
                <tr className="border border-gray-100" key={index}>
                  <td>
                    <div className="flex p-2 items-center gap-2">
                      {item.itemimage}
                      <div className="text-ss-55 text-center">{item.itemname}</div>
                    </div>
                  </td>
                  <td><div className="p-0.5 text-gray-500 text-ss-55 text-center">{item.category}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">{item.price}</div></td>
                  <td><div className="p-0.5 text-gray-500 text-ss-55 text-center">{item.unit}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">{item.purchased}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">{item.sold}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center text-green-500">{item.instock}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center text-green-500 bg-green-100 rounded-sm flex items-center justify-center justify-self-center w-fit">{item.status}</div></td>
                  <td><div className="p-0.5 text-ss-55 text-center">{item.lastupdated}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-ss-55">show</div>
                <select id="entriescount" className="border border-gray-200 text-ss-65 p-1 rounded-sm mx-2">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <div className="text-ss-55">entries</div>
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
            <div className="align-tshow">
              <div className="flex items-center">
                <div className="text-ss-55">showing {currentPage} to {(inventorylist.length) ? inventorylist.length : 0} of 128 entries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}