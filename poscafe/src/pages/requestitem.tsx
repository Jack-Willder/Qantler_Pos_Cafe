import { useState } from "react";
import { IconPosCafe, BadgePosCafe } from "../icons";

export default function RequestItem() {
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
        { image: <BadgePosCafe color="purple" />, itemname: "Soya Milk", price: "$16.50", total: "$33.00" },
        { image: <BadgePosCafe color="green" />, itemname: "Tea C", price: "$4.70", total: "$23.50" },
        { image: <BadgePosCafe color="orange" />, itemname: "Streamed Timsum", price: "$7.30", total: "$7.30" },
        { image: <BadgePosCafe color="blue" />, itemname: "Porridge", price: "$11.20", total: "$11.20" },
        { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Iced Tea", price: "$11.70", total: "$11.70" },
        { image: <BadgePosCafe color="grey" />, itemname: "Dumplings", price: "$16.10", total: "$16.10" },
        { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Iced Coffee", price: "$13.50", total: "$27.00" },
        { image: <img src="./assets/item-images/iced-coffee.png" className="item-symbol"></img>, itemname: "Coffee C", price: "$16.50", total: "$16.50" }
    ];





    return (


        <div className="content-area">
            <div className="popup remove-all" id="popup">
                <div className="align-popup">
                    <span className="material-symbols-outlined success-symbol">calendar_month</span>
                    <div className="popup-message">Bill Saved to the localstorage</div>
                </div>
            </div>
            <div className="additem-content requestitem-content">
                <div className="additem-statusbar">
                    <div className="additem-topbar">
                        <div className="additem-titlebar">
                            <IconPosCafe color="black" />
                            <div className="additem-inventorytitle">Item Request</div>
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
                    <div className="additem-navbar">
                        <div className="additem-navbar-align">
                            <div className="additem-navbar-inventory">Item Request</div>
                            <span className="material-symbols-outlined additem-navbar-arrow">keyboard_arrow_right</span>
                            <div className="additem-navbar-inventory">Request Items</div>
                        </div>
                    </div>
                </div>
                <div className="additem-card">
                    <div className="additem-card-title">
                        <div className="additem-itemtitle-text">Request Item</div>
                        <div className="additem-itemdescription-text">Request more items for your inventory</div>
                    </div>
                    <div className="additem-card-separator"></div>
                    <div className="additem-card-content">
                        <div className="additem-form">
                            <div className="additem-card-left">
                                <div className="additem-itemname">
                                    <div className="additem-title-text  additem-important">Item Name</div>
                                    <select name="additem-itemname-option" id="additem-form-itemname">
                                        <option value="" selected disabled hidden>Select Item Name</option>
                                    </select>
                                    <div className="additem-desc-text hide-text">Auto-generated</div>
                                </div>
                                <div className="additem-supplier">
                                    <div className="additem-title-text  additem-important">Quantity</div>
                                    <input type="number" className="additem-quantity-input" placeholder="Quantity" id="additem-form-quantity" value="1" min="1" max="1000" step="1"></input>
                                    <div className="additem-desc-text hide-text">Status is auto-populated based on In Stock quantity.</div>
                                </div>
                                <div className="additem-itemcode">
                                    <div className="additem-title-text  additem-important">Expected Date</div>
                                    <input type="datetime-local" className="additem-exdate-input" placeholder="ITM-000129" id="additem-form-exdate" value="2026-06-03T00:15"></input>
                                    <div className="additem-desc-text hide-text">Auto-generated</div>
                                </div>
                                <div className="additem-instock">
                                    <div className="additem-title-text">In Stock</div>
                                    <input type="number" className="additem-instock-input" placeholder="Stock quantity" id="additem-form-instock" min="0" max="1000" required disabled></input>
                                    <div className="additem-desc-text">Auto-generated</div>
                                </div>
                            </div>
                        </div>
                        <div className="additem-baction-group">
                            <div className="additem-baction" id="additem" data-target="request">
                                <span className="datename">Cancel</span>
                            </div>
                            <div className="additem-baction option-select" id="requestitem-action" >
                                <IconPosCafe color="black" />
                                <span className="datename">Confirm Request</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}