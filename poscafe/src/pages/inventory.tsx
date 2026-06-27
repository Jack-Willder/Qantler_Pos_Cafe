// import { useState } from "react";
import { IconPosCafe, BadgePosCafe } from "../icons";

export default function Inventory() {
  // const [activeCategory, setActiveCategory] = useState("Beverage");
  // const handleCategory = (categoryname: string): void => {
  //   setActiveCategory(categoryname || "Beverage");
  // };

  // const categorylist = [
  //   { name: "Beverage", icon: <IconPosCafe /> },
  //   { name: "Steamed Bun", icon: <IconPosCafe /> },
  //   { name: "Steamed Timsum", icon: <IconPosCafe /> },
  //   { name: "Deep Fry Timsum", icon: <IconPosCafe /> },
  //   { name: "Bake", icon: <IconPosCafe /> },
  //   { name: "Noodle/ Dumplings", icon: <IconPosCafe /> },
  //   { name: "Porridge", icon: <IconPosCafe /> },
  //   { name: "All Items", icon: <IconPosCafe /> },
  // ];

  // const inventorylist = [
  //   { imgpath: "./assets/item-images/coffee black.webp", itemname: "Coffee Black", chinesename: "咖啡黑" },
  //   { imgpath: "./assets/item-images/tea black.webp", itemname: "Tea Black", chinesename: "茶黑" },
  //   { imgpath: "./assets/item-images/coffee.webp", itemname: "Chrysanthemum Tea", chinesename: "菊花茶" },
  //   { imgpath: "./assets/item-images/coffee.webp", itemname: "Coffee", chinesename: "咖啡" },
  //   { imgpath: "./assets/item-images/tea.png", itemname: "Tea", chinesename: "茶" },
  //   { imgpath: "./assets/item-images/chinese tea.webp", itemname: "Chinese Tea", chinesename: "中国茶" },
  //   { imgpath: "./assets/item-images/iced coffee black.webp", itemname: "Iced Coffee Black", chinesename: "咖啡黑" },
  //   { imgpath: "./assets/item-images/iced-tea-black.png", itemname: "Iced Tea Black", chinesename: "茶黑" },
  //   { imgpath: "./assets/item-images/soya milk.webp", itemname: "soya Milk", chinesename: "牛奶" },
  //   { imgpath: "./assets/item-images/iced-coffee.png", itemname: "Iced Coffee", chinesename: "冰咖啡" },
  //   { imgpath: "./assets/item-images/iced tea.webp", itemname: "Iced Tea", chinesename: "冰茶" },
  //   { imgpath: "./assets/item-images/grass jelly.png", itemname: "Grass Jelly", chinesename: "仙草" },
  //   { imgpath: "./assets/item-images/coffee c.webp", itemname: "Coffee C", chinesename: "咖啡C" },
  //   { imgpath: "./assets/item-images/tea c.png", itemname: "Tea C", chinesename: "茶C" },
  //   { imgpath: "./assets/item-images/black and white.png", itemname: "Black & White", chinesename: "黑, 白" },
  //   { imgpath: "./assets/item-images/milo.png", itemname: "Milo", chinesename: "米露" },
  //   { imgpath: "./assets/item-images/iced-milo.png", itemname: "Iced Milo", chinesename: "冰 Milo" },
  //   { imgpath: "./assets/item-images/takeaway water.webp", itemname: "Takeaway (Water)", chinesename: "外带 (水)" }
  // ];


  // const checkoutlist = [
  //   { image: <BadgePosCafe color="purple" />, itemname: "Soya Milk", price: "$16.50", total: "$33.00" },
  //   { image: <BadgePosCafe color="green" />, itemname: "Tea C", price: "$4.70", total: "$23.50" },
  //   { image: <BadgePosCafe color="orange" />, itemname: "Streamed Timsum", price: "$7.30", total: "$7.30" },
  //   { image: <BadgePosCafe color="blue" />, itemname: "Porridge", price: "$11.20", total: "$11.20" },
  //   { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Iced Tea", price: "$11.70", total: "$11.70" },
  //   { image: <BadgePosCafe color="grey" />, itemname: "Dumplings", price: "$16.10", total: "$16.10" },
  //   { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Iced Coffee", price: "$13.50", total: "$27.00" },
  //   { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Coffee C", price: "$16.50", total: "$16.50" }
  // ];





  return (
    <div className="content-area">
      <div className="inventory-content">
        <div className="statusbar">
          <div className="titlebar">
            <IconPosCafe color="black" />
              <div className="inventorytitle">Inventory</div>
          </div>
          <div className="search card two datetimegrid">
            <div className="datetime">
              <div className="dategrid">
                <IconPosCafe color="black" />
              <div className="date">
                  <div className="date-names">
                    <span className="datename">20 May 2024</span>
                    <span className="dayname">Monday</span>
                  </div>
                </div>
              </div>
              <div className="separator"></div>
              <div className="timegrid">
                <IconPosCafe color="black" />
              <div className="time">
                  <span className="timename">10:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory-card grid-filter-card">
          <div className="align-option-group">
            <div className="option-group-name">Category</div>
            <div className="selector">
              <IconPosCafe color="black" />
              <select name="opg-select" id="opg-select-category" className="opg-select" required>
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
          <div className="align-option-group">
            <div className="option-group-name">Item Name</div>
            <div className="selector">
              <IconPosCafe color="black" />
              <select name="opg-select" id="opg-select-items" className="opg-select">
                <option value="all">All Items</option>
              </select>
            </div>
          </div>
          <div className="align-option-group">
            <div className="option-group-name">Status</div>
            <div className="selector">
              <select name="opg-select" id="opg-select-status" className="opg-select">
                <option value="all">All Status</option>
                <option value="instock">In Stock</option>
                <option value="lowstock">Low Stock</option>
                <option value="outofstock">Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="align-option-group">
            <div className="option-group-name">Date From</div>
            <input className="opg-date-select" type="date" id="opg-select-dfrom" value="2024-05-20"></input>
          </div>
          <div className="align-option-group">
            <div className="option-group-name">Date To</div>
            <input className="opg-date-select" type="date" id="opg-select-dto" value="2024-05-20"></input>
          </div>
          <div className="t-bfilter-group">
            <div className="t-bfilter t-baction-filter option-select" id="inventory-action-filter">
              <IconPosCafe color="black" />
              <span className="datename">Filter</span>
            </div>
            <div className="t-bfilter t-baction-reset" id="inventory-action-reset">
              <IconPosCafe color="black" />
              <span className="datename">Reset</span>
            </div>
          </div>
        </div>
        <div className="inventory-card grid-main-table-card">
          <div className="tablebar">
            <div className="align-ttitle">
              <div className="tabletitle">Inventory List</div>
              <div className="tableitems">Total 128 items found</div>
            </div>
            <div className="tbutton-group">
              <div className="align-tbutton-group">
                <div className="t-bfilter option-sudo-select" id="additem" data-target="additem">
                  <IconPosCafe color="black" />
              <span className="datename">Add Item</span>
                </div>
                <div className="t-bfilter option-select" id="additem" data-target="request">
                  <IconPosCafe color="black" />
              <span className="datename">Request Item</span>
                </div>
                <div className="t-bfilter">
                  <IconPosCafe color="black" />
              <span className="datename">Export to Excel</span>
                </div>
              </div>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th data-target="sort-table-by-name">Item</th>
                <th data-target="sort-table-by-category">Category</th>
                <th data-target="sort-table-by-price">Price</th>
                <th data-target="sort-table-by-unit">Unit</th>
                <th data-target="sort-table-by-purchased">Purchased</th>
                <th data-target="sort-table-by-sold">Sold</th>
                <th data-target="sort-table-by-instock">In Stock</th>
                <th data-target="sort-table-by-status">Status</th>
                <th data-target="sort-table-by-lastupdated">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="alignnames"><img
                    src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                    alt="coffee" srcSet="" 
                    className="item-symbol"></img>
                    <div className="bill-itemname">Soya Milk</div>
                  </div>
                </td>
                <td><div className="inv-category">Beverage</div></td>
                <td><div className="inv-price">$3.00</div></td>
                <td><div className="inv-unit">Cup</div></td>
                <td><div className="inv-purchased">150</div></td>
                <td><div className="inv-sold">98</div></td>
                <td><div className="inv-instock">52</div></td>
                <td><div className="inv-status">In Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames"><img
                    src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png"
                    alt="coffee" srcSet="" 
                    className="item-symbol"></img>
                    <div className="bill-itemname">Tea C</div>
                  </div>
                </td>
                <td><div className="inv-category">Beverage</div></td>
                <td><div className="inv-price">$4.70</div></td>
                <td><div className="inv-unit">Cup</div></td>
                <td><div className="inv-purchased">200</div></td>
                <td><div className="inv-sold">150</div></td>
                <td><div className="inv-instock">50</div></td>
                <td><div className="inv-status">In Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames">
                    <BadgePosCafe color="grey"/>
                    <div className="bill-itemname">Streamed Timsum</div>
                  </div>
                </td>
                <td><div className="inv-category">Steamed Timsum</div></td>
                <td><div className="inv-price">$7.30</div></td>
                <td><div className="inv-unit">Pcs</div></td>
                <td><div className="inv-purchased">120</div></td>
                <td><div className="inv-sold">80</div></td>
                <td><div className="inv-instock">40</div></td>
                <td><div className="inv-status">In Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames">
                    <BadgePosCafe color="grey" />
                    <div className="bill-itemname">Porridge</div>
                  </div>
                </td>
                <td><div className="inv-category">Porridge</div></td>
                <td><div className="inv-price">$11.20</div></td>
                <td><div className="inv-unit">Bowl</div></td>
                <td><div className="inv-purchased">100</div></td>
                <td><div className="inv-sold">90</div></td>
                <td><div className="inv-instock inv-instock-orange">10</div></td>
                <td><div className="inv-status inv-status-orange">Low Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames">
                    <BadgePosCafe color="grey" />
                    <div className="bill-itemname">Iced Tea</div>
                  </div>
                </td>
                <td><div className="inv-category">Beverage</div></td>
                <td><div className="inv-price">$11.70</div></td>
                <td><div className="inv-unit">Glass</div></td>
                <td><div className="inv-purchased">180</div></td>
                <td><div className="inv-sold">170</div></td>
                <td><div className="inv-instock inv-instock-orange">10</div></td>
                <td><div className="inv-status inv-status-orange">Low Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames">
                    <BadgePosCafe color="grey" />
                    <div className="bill-itemname">Dumplings</div>
                  </div>
                </td>
                <td><div className="inv-category">Noodle/Dumplings</div></td>
                <td><div className="inv-price">$16.10</div></td>
                <td><div className="inv-unit">Pcs</div></td>
                <td><div className="inv-purchased">80</div></td>
                <td><div className="inv-sold">70</div></td>
                <td><div className="inv-instock inv-instock-orange">10</div></td>
                <td><div className="inv-status inv-status-orange">Low Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames">
                    <BadgePosCafe color="grey" />
                    <div className="bill-itemname">Iced Coffee</div>
                  </div>
                </td>
                <td><div className="inv-category">Beverage</div></td>
                <td><div className="inv-price">$13.50</div></td>
                <td><div className="inv-unit">Glass</div></td>
                <td><div className="inv-purchased">160</div></td>
                <td><div className="inv-sold">160</div></td>
                <td><div className="inv-instock inv-instock-red">0</div></td>
                <td><div className="inv-status inv-status-red">Out of Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames"><img
                    src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                    alt="coffee" srcSet="" 
                    className="item-symbol"></img>
                    <div className="bill-itemname">Coffee C</div>
                  </div>
                </td>
                <td><div className="inv-category">Beverage</div></td>
                <td><div className="inv-price">$16.50</div></td>
                <td><div className="inv-unit">Cup</div></td>
                <td><div className="inv-purchased">140</div></td>
                <td><div className="inv-sold">140</div></td>
                <td><div className="inv-instock inv-instock-red">0</div></td>
                <td><div className="inv-status inv-status-red">Out of Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames"><img
                    src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                    alt="coffee" srcSet="" 
                    className="item-symbol"></img>
                    <div className="bill-itemname">Milo</div>
                  </div>
                </td>
                <td><div className="inv-category">Beverage</div></td>
                <td><div className="inv-price">$15.00</div></td>
                <td><div className="inv-unit">Cup</div></td>
                <td><div className="inv-purchased">60</div></td>
                <td><div className="inv-sold">45</div></td>
                <td><div className="inv-instock">15</div></td>
                <td><div className="inv-status">In Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
              <tr>
                <td>
                  <div className="alignnames"><img
                    src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                    alt="coffee" srcSet="" 
                    className="item-symbol"></img>
                    <div className="bill-itemname">Chinese Tea</div>
                  </div>
                </td>
                <td><div className="inv-category">Beverage</div></td>
                <td><div className="inv-price">$4.20</div></td>
                <td><div className="inv-unit">Cup</div></td>
                <td><div className="inv-purchased">90</div></td>
                <td><div className="inv-sold">60</div></td>
                <td><div className="inv-instock">30</div></td>
                <td><div className="inv-status">In Stock</div></td>
                <td><div className="inv-lastupdated">20 May 2024, 10:30AM</div></td>
              </tr>
            </tbody>
          </table>
          <div className="table-pages">
            <div className="align-tshow">
              <div className="entries">
                <div className="showtext">show</div>
                <select name="entriescount" id="entriescount" className="entriescount">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <div className="entriestext">entries</div>
              </div>
            </div>
            <div className="align-tshow">
              <div className="entries">
                <div className="t-pages option-select">1</div>
                <div className="t-pages">2</div>
                <div className="t-pages">3</div>
                <div className="t-pages">4</div>
                <div className="t-pages">5</div>
                <div className="t-pages">...</div>
                <div className="t-pages">13</div>
              </div>
            </div>
            <div className="align-tshow">
              <div className="entries">
                <div className="showingtext">showing 1 to 10 of 128 entries</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}