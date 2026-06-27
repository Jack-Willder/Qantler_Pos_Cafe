const billing = `<div class="popup remove-all" id="popup">
<div class="align-popup">
        <span class="material-symbols-outlined success-symbol">calendar_month</span>
        <div class="popup-message">Bill Saved to the localstorage</div>
</div>
</div>
<div class="save-bill remove-all"><div class="save-bill-menu">
<div class="align-save-bill-menu">
        <div class="save-title">Save Bill</div>
        <div class="align-customer-date">
                <div class="save-customer"><div class="save-customer-text">Customer Name</div><input type="text" id="customer-name" placeholder="Enter customer name"></div>
                <div class="save-date"><div class="save-date-text">Billing Date</div><input type="date" name="bill-date" id="bill-date" placeholder="Bill Date"></div>
        </div>
        <div class="save-bill-action option-select" id="customer-bill-save">Save</div>
</div>
</div></div>
<div class="content">
<div class="card one">
<div class="grid-total">
        <div class="billtitle">Current Bill<span
                        class="material-symbols-outlined more-symbol">more_vert</span></div>
        <div class="totalamount">
                <div class="aligntotal">
                        <div class="amounttitle">Total Amount</div>
                        <div class="amount" id="checkout-total-amount">$146.30</div>
                </div>
        </div>
</div>
</div>
<div class="search card two grid-search">
<input type="text" class="bar" name="search" placeholder="Search menu items..." autocomplete="off">
<div class="changelayout">
        <div class="layoutgrid option-select">
                <span class="material-symbols-outlined symbol">
                        grid_view
                </span>
        </div>
        <div class="layoutlist">
                <span class="material-symbols-outlined symbol">
                        list
                </span>
        </div>
</div>
</div>
<div class="card three grid-bill">
<table>
        <thead>
                <tr>
                        <td>
                                <div class="alignnames alignhead">Item</div>
                        </td>
                        <td>Qty</td>
                        <td>Unit Price</td>
                        <td>Total</td>
                        <td></td>
                </tr>
        </thead>
        <tbody>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Soya Milk</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="2"
                                                class="bill-item-count" name="count" value="2">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$16.50</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$33.00</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Tea C</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="5"
                                                class="bill-item-count" name="count" value="5">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$4.70</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$23.50</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">Streamed Timsum</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="1"
                                                class="bill-item-count" name="count" value="1">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$7.30</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$7.30</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">Porridge</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="1"
                                                class="bill-item-count" name="count" value="1">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$11.20</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$11.20</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="/assets/iced-coffee.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Iced Tea</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="1"
                                                class="bill-item-count" name="count" value="1">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$11.70</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$11.70</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">Dumplings</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="1"
                                                class="bill-item-count" name="count" value="1">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$16.10</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$16.10</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="/assets/iced-coffee.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Iced Coffee</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="2"
                                                class="bill-item-count" name="count" value="2">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$13.50</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$27.00</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="/assets/iced-coffee.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Coffee C</div>
                                </div>
                        </td>
                        <td>
                                <div class="aligncount"><input type="text" placeholder="1"
                                                class="bill-item-count" name="count" value="1">
                                </div>
                        </td>
                        <td>
                                <div class="bill-itemname">$16.50</div>
                        </td>
                        <td>
                                <div class="bill-itemname">$16.50</div>
                        </td>
                        <td><span class="material-symbols-outlined delete-symbol">delete</span>
                        </td>
                </tr>
        </tbody>
</table>
<div class="info">
        <span class="material-symbols-outlined info-symbol">
                info
        </span>
        <div class="infotext">
                Click item to create billing entry. If item alreadyexists, quantity will
                increase.<br>Cancel item removes the last billed item. Delete All clears local
                data.<br>Main menu will redirect to menu page.
        </div>
</div>
</div>
<div class="card four grid-types">
<div class="types-options">
        <div class="option-type option-select" data-category="Beverage">
                <span class="material-symbols-outlined symbol">
                        local_cafe
                </span>
                <span class="opname">Beverage</span>
        </div>
        <div class="separator"></div>
        <div class="option-type" data-category="Steamed Bun">
                <span class="material-symbols-outlined symbol">
                        bakery_dining
                </span>
                <span class="opname">Steamed<br> Bun</span>
        </div>
        <div class="separator"></div>
        <div class="option-type" data-category="Steamed Timsum">
                <span class="material-symbols-outlined symbol">
                        onsen
                </span>
                <span class="opname">Steamed<br> Timsum</span>
        </div>
        <div class="separator"></div>
        <div class="option-type" data-category="Deep Fry Timsum">
                <span class="material-symbols-outlined symbol">
                        change_history
                </span>
                <span class="opname">Deep Fry<br> Timsum</span>
        </div>
        <div class="separator"></div>
        <div class="option-type" data-category="Bake">
                <span class="material-symbols-outlined symbol">
                        oven
                </span>
                <span class="opname">Bake</span>
        </div>
        <div class="separator"></div>
        <div class="option-type" data-category="Noodle/Dumplings">
                <span class="material-symbols-outlined symbol">
                        ramen_dining
                </span>
                <span class="opname">Noodle/<br>
                        Dumplings</span>
        </div>
        <div class="separator"></div>
        <div class="option-type" data-category="Porridge">
                <span class="material-symbols-outlined symbol">
                        soup_kitchen
                </span>
                <span class="opname">Porridge</span>
        </div>
        <div class="separator"></div>
        <div class="option-type" data-category="all">
                <span class="material-symbols-outlined symbol">
                        grid_view
                </span>
                <span class="opname">All Items</span>
        </div>
</div>
</div>
<div class="card five grid-items">
<div class="items-nextpage" id="items-nextpage"></div>
<div class="items-hideoverflow" id="items-hideoverflow"></div>
<div class="items-options">
        <div class="option-item option-item-select">
                <img src="/assets/coffee black.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Coffee Black</span>
                <span class="opname-chinese">咖啡黑</span>
        </div>
        <div class="option-item">
                <img src="/assets/tea black.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Tea Black</span>
                <span class="opname-chinese">茶黑</span>
        </div>
        <div class="option-item">
                <img src="/assets/chrysanthemum tea.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Chrysanthemum Tea</span>
                <span class="opname-chinese">菊花茶</span>
        </div>
        <div class="option-item">
                <img src="/assets/coffee.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Coffee</span>
                <span class="opname-chinese">咖啡</span>
        </div>
        <div class="option-item">
                <img src="/assets/tea.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Tea</span>
                <span class="opname-chinese">茶</span>
        </div>
        <div class="option-item">
                <img src="/assets/chinese tea.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Chinese Tea</span>
                <span class="opname-chinese">中国茶</span>
        </div>
        <div class="option-item">
                <img src="/assets/iced coffee black.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Iced Coffee Black</span>
                <span class="opname-chinese">咖啡黑</span>
        </div>
        <div class="option-item">
                <img src="/assets/iced-tea-black.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Iced Tea Black</span>
                <span class="opname-chinese">茶黑</span>
        </div>
        
        <div class="option-item">
                <img src="/assets/soya milk.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">soya Milk</span>
                <span class="opname-chinese">牛奶</span>
        </div>
        <div class="option-item">
                <img src="/assets/iced-coffee.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Iced Coffee</span>
                <span class="opname-chinese">冰咖啡</span>
        </div>
        <div class="option-item">
                <img src="/assets/iced tea.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Iced Tea</span>
                <span class="opname-chinese">冰茶</span>
        </div>
        <div class="option-item">
                <img src="/assets/grass jelly.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Grass Jelly</span>
                <span class="opname-chinese">仙草</span>
        </div>
        <div class="option-item">
                <img src="/assets/coffee c.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Coffee C</span>
                <span class="opname-chinese">咖啡C</span>
        </div>
        <div class="option-item">
                <img src="/assets/tea c.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Tea C</span>
                <span class="opname-chinese">茶C</span>
        </div>
        <div class="option-item">
                <img src="/assets/black and white.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Black & White</span>
                <span class="opname-chinese">黑, 白</span>
        </div>
        <div class="option-item">
                <img src="/assets/milo.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Milo</span>
                <span class="opname-chinese">米露</span>
        </div>
        <div class="option-item">
                <img src="/assets/iced-milo.png"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Iced Milo</span>
                <span class="opname-chinese">冰 Milo</span>
        </div>
        <div class="option-item">
                <img src="/assets/takeaway water.webp"
                        alt="coffee" srcset="" name="item"
                        class="item-img">
                <span class="opname">Takeaway (Water)</span>
                <span class="opname-chinese">外带 (水)</span>
        </div>
</div>
</div>
<div class="card six grid-calc">
<div class="crow-top">
        <div class="align-item-number">
                <div class="itemnumber-name">Item Number</div>
                <input type="text" placeholder="Scan / Enter item Number" class="itemnumber-input cinput" name="itemnumber" id="calc-itemnumber-name">
        </div>
        <div class="align-quantity">
                <div class="quantity-name">Quantity</div>
                <div class="align-quantity-input">
                        <div class="minus">-</div>
                        <input type="text" placeholder="1" class="quantity-input cinput" name="quantity" value="1">
                        <div class="plus">+</div>
                </div>
        </div>
        <div class="calc-add">
                <div class="add-name">Add</div>
                <div class="add-button cbutton">Add</div>
        </div>
</div>
<div class="crow-separator"></div>
<div class="crow-bottom">
        <div class="calc-table">
                <div class="crow-align-tablename">
                        <div class="align-tablename">
                                <div class="tableno-name">Table No</div>
                                <input type="text" placeholder="Enter table no" class="tableno-input cinput" name="tableno">
                        </div>
                </div>
                <div class="crow-align-cover">
                        <div class="align-cover">
                                <div class="cover-name">No of Cover</div>
                                <input type="text" placeholder="Enter no of cover" class="cover-input cinput" name="cover">
                        </div>
                </div>
        </div>
        <div class="calc-calc">
                <div class="cb-7 cb">7</div>
                <div class="cb-8 cb">8</div>
                <div class="cb-9 cb">9</div>
                <div class="cb-4 cb">4</div>
                <div class="cb-5 cb">5</div>
                <div class="cb-6 cb">6</div>
                <div class="cb-1 cb">1</div>
                <div class="cb-2 cb">2</div>
                <div class="cb-3 cb">3</div>
                <div class="cb-0 cb">0</div>
                <div class="cb-dot cb">.</div>
                <div class="cb-del cb"><span class="material-symbols-outlined cb-del-symbol">backspace</span></div>
        </div>
        <div class="crow-button">
                <div class="ac-button cbutton">AC</div>
                <div class="clear-button cbutton">Clear</div>
        </div>
</div>
</div>
<div class="card seven grid-seven">
<div class="newbill" id="new-checkout-bill">
        <span class="material-symbols-outlined action-symbol">
                add_circle
        </span>
        <div class="bill-name">New Bill</div>
</div>
<div class="price">
        <span class="material-symbols-outlined action-symbol">
                shoppingmode
        </span>
        <div class="price-name">Price Amendment</div>
</div>
<div class="pricegroup">
        <div class="ptwo pgroup">$2</div>
        <div class="pfive pgroup">$5</div>
        <div class="pten pgroup">$10</div>
        <div class="ptnty pgroup">$20</div>
        <div class="pfity pgroup">$50</div>
        <div class="pgift pgroup">
                <span class="material-symbols-outlined action-symbol">
                        featured_seasonal_and_gifts
                </span>
                <div class="price-name">Gift Voucher</div>
        </div>
</div>
</div>
<div class="card eight grid-eight">
<div class="cashbox">
        <span class="material-symbols-outlined action-symbol">
                point_of_sale
        </span>
        <div class="cashbox-name">Open Cash Box</div>
</div>
<div class="goodsreturn">
        <span class="material-symbols-outlined action-symbol">
                comic_bubble
        </span>
        <div class="goodsreturn-name">Goods Return</div>
</div>
<div class="cancelitem">
        <span class="material-symbols-outlined action-symbol">
                restart_alt
        </span>
        <div class="cancelitem-name">Cancel Item</div>
</div>
<div class="additem">
        <span class="material-symbols-outlined action-symbol">
                shopping_cart
        </span>
        <div class="additem-name">Add Item</div>
</div>
</div>
<div class="card nine grid-nine">
<div class="arowone">
        <div class="tcan">
                <span class="material-symbols-outlined transaction-symbol">
                        contactless_off
                </span>
                <div class="tcan-name">Terminate Transaction</div>
        </div>
        <div class="print">
                <span class="material-symbols-outlined transaction-symbol">
                        print
                </span>
                <div class="print-name">Print</div>
        </div>
        <div class="tres">
                <span class="material-symbols-outlined transaction-symbol">
                        bookmark
                </span>
                <div class="tres-name">Reserved Transaction</div>
        </div>
        <div class="tdel">
                <span class="material-symbols-outlined transaction-symbol">
                        delete
                </span>
                <div class="tdel-name">Delete All Transaction</div>
        </div>
</div>
<div class="arowtwo">
        <div class="restore">
                <div class="tdel">
                <span class="material-symbols-outlined transaction-symbol">
                        restart_alt
                </span>
                <div class="tdel-name">Restore</div>
        </div></div>
        <div class="mainmenu">
                <div class="tdel">
                <span class="material-symbols-outlined transaction-symbol">
                        home
                </span>
                <div class="tdel-name">Main Menu</div>
        </div></div>
</div>
</div>
</div>`;

const inventory = `<div class="inventory-content">
                        <div class="statusbar">
                                <div class="titlebar">
                                        <span class="material-symbols-outlined menu-symbol">menu</span>
                                        <div class="inventorytitle">Inventory</div>
                                </div>
                                <div class="search card two datetimegrid">
                                <div class="datetime">
                                        <div class="dategrid">
                                                <span class="material-symbols-outlined calendar-symbol">
                                                        calendar_month
                                                </span>
                                                <div class="date">
                                                        <div class="date-names">
                                                                <span class="datename">20 May 2024</span>
                                                                <span class="dayname">Monday</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="separator"></div>
                                        <div class="timegrid">
                                                <span class="material-symbols-outlined time-symbol">
                                                        schedule
                                                </span>
                                                <div class="time">
                                                        <span class="timename">10:30 AM</span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        </div>
                        <div class="inventory-card grid-filter-card">
                                <div class="align-option-group">
                                        <div class="option-group-name">Category</div>
                                        <div class="selector">
                                                <span class="material-symbols-outlined menu-symbol">grid_view</span>
                                                <select name="opg-select" id="opg-select-category" class="opg-select" required>
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
                                <div class="align-option-group">
                                        <div class="option-group-name">Item Name</div>
                                        <div class="selector">
                                                <span class="material-symbols-outlined menu-symbol">local_cafe</span>
                                                <select name="opg-select" id="opg-select-items" class="opg-select">
                                                        <option value="all">All Items</option>
                                                </select>
                                        </div>
                                </div>
                                <div class="align-option-group">
                                        <div class="option-group-name">Status</div>
                                        <div class="selector">
                                                <select name="opg-select" id="opg-select-status" class="opg-select">
                                                        <option value="all">All Status</option>
                                                        <option value="instock">In Stock</option>
                                                        <option value="lowstock">Low Stock</option>
                                                        <option value="outofstock">Out of Stock</option>
                                                </select>
                                        </div> 
                                </div>
                                <div class="align-option-group">
                                        <div class="option-group-name">Date From</div>
                                        <input class="opg-date-select" type="date" id="opg-select-dfrom" value="2024-05-20"></input>
                                </div>
                                <div class="align-option-group">
                                        <div class="option-group-name">Date To</div>
                                        <input class="opg-date-select" type="date" id="opg-select-dto" value="2024-05-20"></input>
                                </div>
                                <div class="t-bfilter-group">
                                        <div class="t-bfilter t-baction-filter option-select" id="inventory-action-filter">
                                                <span class="material-symbols-outlined calendar-symbol">
                                                        filter_alt
                                                </span>
                                                <span class="datename">Filter</span>
                                        </div>
                                        <div class="t-bfilter t-baction-reset" id="inventory-action-reset">
                                                <span class="material-symbols-outlined calendar-symbol">
                                                        refresh
                                                </span>
                                                <span class="datename">Reset</span>
                                        </div>
                                </div>
                        </div>
                        <div class="inventory-card grid-main-table-card">
                                <div class="tablebar">
                                <div class="align-ttitle">
                                        <div class="tabletitle">Inventory List</div>
                                        <div class="tableitems">Total 128 items found</div>
                                </div>
                                <div class="tbutton-group">
                                        <div class="align-tbutton-group">
                                                <div class="t-bfilter option-sudo-select" id="additem" data-target="additem">
                                                        <span class="material-symbols-outlined calendar-symbol">
                                                                add_circle
                                                        </span>
                                                        <span class="datename">Add Item</span>
                                                </div>
                                                <div class="t-bfilter option-select" id="additem" data-target="request">
                                                        <span class="material-symbols-outlined calendar-symbol">
                                                                download
                                                        </span>
                                                        <span class="datename">Request Item</span>
                                                </div>
                                                <div class="t-bfilter">
                                                        <span class="material-symbols-outlined calendar-symbol">
                                                                book_6
                                                        </span>
                                                        <span class="datename">Export to Excel</span>
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
                                                                <div class="alignnames"><img
                                                                                src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                                                alt="coffee" srcset="" name="item"
                                                                                class="item-symbol">
                                                                        <div class="bill-itemname">Soya Milk</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Beverage</div></td>
                                                        <td><div class="inv-price">$3.00</div></td>
                                                        <td><div class="inv-unit">Cup</div></td>
                                                        <td><div class="inv-purchased">150</div></td>
                                                        <td><div class="inv-sold">98</div></td>
                                                        <td><div class="inv-instock">52</div></td>
                                                        <td><div class="inv-status">In Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><img
                                                                                src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png"
                                                                                alt="coffee" srcset="" name="item"
                                                                                class="item-symbol">
                                                                        <div class="bill-itemname">Tea C</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Beverage</div></td>
                                                        <td><div class="inv-price">$4.70</div></td>
                                                        <td><div class="inv-unit">Cup</div></td>
                                                        <td><div class="inv-purchased">200</div></td>
                                                        <td><div class="inv-sold">150</div></td>
                                                        <td><div class="inv-instock">50</div></td>
                                                        <td><div class="inv-status">In Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><span
                                                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                                                        <div class="bill-itemname">Streamed Timsum</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Steamed Timsum</div></td>
                                                        <td><div class="inv-price">$7.30</div></td>
                                                        <td><div class="inv-unit">Pcs</div></td>
                                                        <td><div class="inv-purchased">120</div></td>
                                                        <td><div class="inv-sold">80</div></td>
                                                        <td><div class="inv-instock">40</div></td>
                                                        <td><div class="inv-status">In Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><span
                                                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                                                        <div class="bill-itemname">Porridge</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Porridge</div></td>
                                                        <td><div class="inv-price">$11.20</div></td>
                                                        <td><div class="inv-unit">Bowl</div></td>
                                                        <td><div class="inv-purchased">100</div></td>
                                                        <td><div class="inv-sold">90</div></td>
                                                        <td><div class="inv-instock inv-instock-orange">10</div></td>
                                                        <td><div class="inv-status inv-status-orange">Low Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><img
                                                                                src="/assets/iced tea.webp"
                                                                                alt="tea" srcset="" name="item"
                                                                                class="item-symbol">
                                                                        <div class="bill-itemname">Iced Tea</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Beverage</div></td>
                                                        <td><div class="inv-price">$11.70</div></td>
                                                        <td><div class="inv-unit">Glass</div></td>
                                                        <td><div class="inv-purchased">180</div></td>
                                                        <td><div class="inv-sold">170</div></td>
                                                        <td><div class="inv-instock inv-instock-orange">10</div></td>
                                                        <td><div class="inv-status inv-status-orange">Low Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><span
                                                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                                                        <div class="bill-itemname">Dumplings</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Noodle/Dumplings</div></td>
                                                        <td><div class="inv-price">$16.10</div></td>
                                                        <td><div class="inv-unit">Pcs</div></td>
                                                        <td><div class="inv-purchased">80</div></td>
                                                        <td><div class="inv-sold">70</div></td>
                                                        <td><div class="inv-instock inv-instock-orange">10</div></td>
                                                        <td><div class="inv-status inv-status-orange">Low Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><img
                                                                                src="/assets/iced-coffee.png"
                                                                                alt="coffee" srcset="" name="item"
                                                                                class="item-symbol">
                                                                        <div class="bill-itemname">Iced Coffee</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Beverage</div></td>
                                                        <td><div class="inv-price">$13.50</div></td>
                                                        <td><div class="inv-unit">Glass</div></td>
                                                        <td><div class="inv-purchased">160</div></td>
                                                        <td><div class="inv-sold">160</div></td>
                                                        <td><div class="inv-instock inv-instock-red">0</div></td>
                                                        <td><div class="inv-status inv-status-red">Out of Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><img
                                                                                src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                                                alt="coffee" srcset="" name="item"
                                                                                class="item-symbol">
                                                                        <div class="bill-itemname">Coffee C</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Beverage</div></td>
                                                        <td><div class="inv-price">$16.50</div></td>
                                                        <td><div class="inv-unit">Cup</div></td>
                                                        <td><div class="inv-purchased">140</div></td>
                                                        <td><div class="inv-sold">140</div></td>
                                                        <td><div class="inv-instock inv-instock-red">0</div></td>
                                                        <td><div class="inv-status inv-status-red">Out of Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><img
                                                                                src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                                                alt="coffee" srcset="" name="item"
                                                                                class="item-symbol">
                                                                        <div class="bill-itemname">Milo</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Beverage</div></td>
                                                        <td><div class="inv-price">$15.00</div></td>
                                                        <td><div class="inv-unit">Cup</div></td>
                                                        <td><div class="inv-purchased">60</div></td>
                                                        <td><div class="inv-sold">45</div></td>
                                                        <td><div class="inv-instock">15</div></td>
                                                        <td><div class="inv-status">In Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <div class="alignnames"><img
                                                                                src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                                                alt="coffee" srcset="" name="item"
                                                                                class="item-symbol">
                                                                        <div class="bill-itemname">Chinese Tea</div>
                                                                </div>
                                                        </td>
                                                        <td><div class="inv-category">Beverage</div></td>
                                                        <td><div class="inv-price">$4.20</div></td>
                                                        <td><div class="inv-unit">Cup</div></td>
                                                        <td><div class="inv-purchased">90</div></td>
                                                        <td><div class="inv-sold">60</div></td>
                                                        <td><div class="inv-instock">30</div></td>
                                                        <td><div class="inv-status">In Stock</div></td>
                                                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                                                </tr>
                                        </tbody>
                                </table>
                                <div class="table-pages">
                                        <div class="align-tshow">
                                                <div class="entries">
                                                        <div class="showtext">show</div> 
                                                        <select name="entriescount" id="entriescount" class="entriescount">
                                                                <option value="10">10</option>
                                                                <option value="20">20</option>
                                                                <option value="30">30</option>
                                                        </select> 
                                                        <div class="entriestext">entries</div>
                                                </div>
                                        </div>
                                        <div class="align-tshow">
                                                <div class="entries">
                                                        <div class="t-pages option-select">1</div> 
                                                        <div class="t-pages">2</div> 
                                                        <div class="t-pages">3</div> 
                                                        <div class="t-pages">4</div> 
                                                        <div class="t-pages">5</div> 
                                                        <div class="t-pages">...</div> 
                                                        <div class="t-pages">13</div> 
                                                </div>
                                        </div>
                                        <div class="align-tshow">
                                                <div class="entries">
                                                        <div class="showingtext">showing 1 to 10 of 128 entries</div> 
                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>`;

const additem = `<div class="popup remove-all" id="popup">
<div class="align-popup">
        <span class="material-symbols-outlined success-symbol">calendar_month</span>
        <div class="popup-message">Bill Saved to the localstorage</div>
</div>
</div>
<div class="additem-content">
<div class="additem-statusbar">
<div class="additem-topbar">
        <div class="additem-titlebar">
                <span class="material-symbols-outlined additem-menu-symbol">menu</span>
                <div class="additem-inventorytitle">Inventory</div>
        </div>
        <div class="search card two datetimegrid">
        <div class="datetime">
                <div class="dategrid">
                        <span class="material-symbols-outlined calendar-symbol">
                                calendar_month
                        </span>
                        <div class="date">
                                <div class="date-names">
                                        <span class="datename">20 May 2024</span>
                                        <span class="dayname">Monday</span>
                                </div>
                        </div>
                </div>
                <div class="separator"></div>
                <div class="timegrid">
                        <span class="material-symbols-outlined time-symbol">
                                schedule
                        </span>
                        <div class="time">
                                <span class="timename">10:30 AM</span>
                        </div>
                </div>
        </div>
        </div>
</div>
<div class="additem-navbar">
        <div class="additem-navbar-align">
                <div class="additem-navbar-inventory">Inventory</div>
                <span class="material-symbols-outlined additem-navbar-arrow">keyboard_arrow_right</span>
                <div class="additem-navbar-inventory">Add Inventory</div>
        </div>
</div>
</div>
<div class="additem-card">
<div class="additem-card-title">
        <div class="additem-itemtitle-text">Add New Item</div>
        <div class="additem-itemdescription-text">Add a new item to your inventory</div>
</div>
<div class="additem-card-separator"></div>
<div class="additem-card-content">
        <div class="additem-form">
                <div class="additem-card-left">
                        <div class="additem-itemcode">
                                <div class="additem-title-text">Item Code</div>
                                <input type="text" class="additem-itemcode-input" placeholder="ITM-000129" id="additem-form-itemcode" disabled>
                                <div class="additem-desc-text">Auto-generated</div>
                        </div>
                        <div class="additem-itemimage">
                                <div class="additem-title-text">Item Image</div>
                                <div class="additem-itemimage-input">
                                        <span class="material-symbols-outlined cloud-symbol">
                                                cloud_upload
                                        </span>
                                        <input type="file" accept="image/png, image/jpg, image/jpeg" placeholder="Click to upload or drag and drop" id="additem-form-itemimage" required="required">
                                        <div class="additem-fileupload">
                                                <div class="additem-fileupload-title">Click to upload or drag and drop</div>
                                                <div class="additem-fileupload-desc">PNG, JPG or WEBP (Max. 2MB)</div>
                                        </div>
                                </div>
                                <div class="additem-desc-text hide-text">Auto-Generated</div>
                        </div>
                        <div class="additem-category">
                                <div class="additem-title-text additem-important">Category</div>
                                <select name="category" id="additem-form-category" required>
                                        <option value="" selected disabled hidden>Select Category</option>
                                        <option value="Beverage">Beverage</option>
                                        <option value="Steamed Bun">Steamed Bun</option>
                                        <option value="Steamed Timsum">Steamed Timsum</option>
                                        <option value="Deep Fry Timsum">Deep Fry Timsum</option>
                                        <option value="Bake">Bake</option>
                                        <option value="Noodle/Dumplings">Noodle/ Dumplings</option>
                                        <option value="Porridge">Porridge</option>
                                </select>
                                <div class="additem-desc-text hide-text">Auto-generated</div>
                        </div>
                        <div class="additem-unit">
                                <div class="additem-title-text additem-important">Unit</div>
                                <select name="category" id="additem-form-unit" required>
                                        <option value="" selected disabled hidden>Select Unit</option>
                                        <option value="Bowl">Bowl</option>
                                        <option value="Cup">Cup</option>
                                        <option value="Pcs">Pcs</option>
                                        <option value="Glass">Glass</option>
                                </select>
                                <div class="additem-desc-text hide-text">Auto-generated</div>
                        </div>
                        <div class="additem-status hide-all">
                                <div class="additem-title-text">Status</div>
                                <select name="category" id="additem-form-status" required>
                                        <option value="instock" selected>In Stock</option>
                                        <option value="lowstock">Low Stock</option>
                                        <option value="outofstock">Out of Stock</option>
                                </select>
                                <div class="additem-desc-text">Status is auto-populated based on In Stock quantity.</div>
                        </div>
                </div>
                <div class="additem-card-right">
                        <div class="additem-itemname">
                                <div class="additem-title-text  additem-important">Item Name</div>
                                <input type="text" class="additem-itemname-input" placeholder="Enter item name" id="additem-form-itemname" required>
                                <div class="additem-desc-text hide-text">Auto-generated</div>
                        </div>
                        <div class="additem-itemdesc">
                                <div class="additem-title-text">Item Description</div>
                                <textarea name="additem-itemdesc" class="additem-itemdesc-input" placeholder="Enter item description" id="additem-form-itemdesc"></textarea>
                                <div class="additem-desc-text hide-text">Auto-generated</div>
                        </div>
                        <div class="additem-price">
                                <div class="additem-title-text additem-important">Price</div>
                                <input type="number" class="additem-price-input" placeholder="Enter price" id="additem-form-price" min="1" max="1000" step="0.1" required>
                                <div class="additem-desc-text hide-text">Auto-generated</div>
                        </div>
                        <div class="additem-instock">
                                <div class="additem-title-text additem-important">In Stock</div>
                                <input type="number" class="additem-instock-input" placeholder="Enter stock quantity"  id="additem-form-instock" min="0" max="1000" required>
                                <div class="additem-desc-text hide-text">Auto-generated</div>
                        </div>
                        <div class="additem-supplier">
                                <div class="additem-title-text">Supplier</div>
                                <select name="additem-supplier-option" id="additem-form-supplier">
                                        <option value="" selected disabled hidden>Select supplier</option>
                                        <option value="Local">Local</option>
                                </select>
                                <div class="additem-desc-text hide-text">Status is auto-populated based on In Stock quantity.</div>
                        </div>
                </div>
        </div>
        <div class="additem-baction-group">
                <div class="additem-baction" id="additem" data-target="inventory">
                        <span class="datename">Cancel</span>
                </div>
                <div class="additem-baction option-select" id="additem-form-addinvitem" >
                        <span class="material-symbols-outlined save-symbol">
                                save
                        </span>
                        <span class="datename">Save</span>
                </div>
                <div class="additem-baction option-select inv-baction-delete remove-all" id="additem-form-deleteinvitem">
                        <span class="material-symbols-outlined save-symbol">
                                delete
                        </span>
                        <span class="datename">Delete</span>
                </div>
        </div>
</div>
</div>
</div>`;

const request = `<div class="itemrequest-content">
<div class="popup remove-all" id="popup">
        <div class="align-popup">
                <span class="material-symbols-outlined success-symbol">calendar_month</span>
                <div class="popup-message">Bill Saved to the localstorage</div>
        </div>
</div>        
<div class="itemrequest-statusbar">
        <div class="itemrequest-titlebar">
                <span class="material-symbols-outlined menu-symbol">menu</span>
                <div class="itemrequest-inventorytitle">Item Request</div>
        </div>
        <div class="search card two datetimegrid">
        <div class="datetime">
                <div class="dategrid">
                        <span class="material-symbols-outlined calendar-symbol">
                                calendar_month
                        </span>
                        <div class="date">
                                <div class="date-names">
                                        <span class="datename">20 May 2024</span>
                                        <span class="dayname">Monday</span>
                                </div>
                        </div>
                </div>
                <div class="separator"></div>
                <div class="timegrid">
                        <span class="material-symbols-outlined time-symbol">
                                schedule
                        </span>
                        <div class="time">
                                <span class="timename">10:30 AM</span>
                        </div>
                </div>
        </div>
</div>
</div>
<div class="itemrequest-card grid-filter-card">
        <div class="align-option-group">
                <div class="option-group-name">Item Name</div>
                <div class="selector">
                        <span class="material-symbols-outlined menu-symbol">local_cafe</span>
                        <select name="opg-select" id="filter-items" class="opg-select">
                                <option value="opg-all">All Items</option>
                        </select>
                </div> 
        </div>
        <div class="align-option-group">
                <div class="option-group-name">Quantity</div>
                <input class="opg-date-select" id="filter-quantity" type="number" value="50"></input>
        </div>
        <div class="align-option-group">
                <div class="option-group-name">Expected Date</div>
                <input class="opg-date-select" id="filter-expected-date" type="date" value="2024-05-20"></input>
        </div>
        <div class="t-bfilter-group">
                <div class="t-bfilter option-select" id="filter-request-items">
                        <span class="material-symbols-outlined calendar-symbol">
                                filter_alt
                        </span>
                        <span class="datename">Filter</span>
                </div>
                <!-- <div class="t-bfilter">
                        <span class="material-symbols-outlined calendar-symbol">
                                refresh
                        </span>
                        <span class="datename">Reset</span>
                </div> -->
        </div>
</div>
<div class="inventory-card grid-main-table-card">
        <div class="tablebar">
        <div class="align-ttitle">
                <div class="tabletitle">Request List</div>
                <div class="tableitems">Total 128 items added</div>
        </div>
        <div class="tbutton-group">
                <div class="align-tbutton-group">
                        <div class="t-bfilter option-select" id="request-item-action">
                                <span class="material-symbols-outlined calendar-symbol">
                                        download
                                </span>
                                <span class="datename">Request Item</span>
                        </div>
                </div>
        </div>
</div>
        <table>
                <thead>
                        <tr>
                                <td>Item</td>
                                <td>Quantity</td>
                                <td>Expected Date</td>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Soya Milk</div>
                                        </div>
                                </td>
                                <td><div class="inv-instock">52</div></td>
                                <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><span
                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
                                                <div class="bill-itemname">Streamed Timsum</div>
                                        </div>
                                </td>
                                <td><div class="inv-instock">40</div></td>
                                <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><span
                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
                                                <div class="bill-itemname">Porridge</div>
                                        </div>
                                </td>
                                <td><div class="inv-instock inv-instock-orange">10</div></td>
                                <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="/assets/iced-coffee.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Iced Coffee</div>
                                        </div>
                                </td>
                                <td><div class="inv-instock inv-instock-red">0</div></td>
                                <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                        </tr>
                </tbody>
        </table>
        <div class="table-pages">
                <div class="align-tshow">
                        <div class="entries">
                                <div class="showtext">show</div> 
                                <select name="entriescount" id="entriescount" class="entriescount">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                </select> 
                                <div class="entriestext">entries</div>
                        </div>
                </div>
                <div class="align-tshow">
                        <div class="entries">
                                <div class="t-pages option-select">1</div> 
                                <div class="t-pages">2</div> 
                                <div class="t-pages">3</div> 
                                <div class="t-pages">4</div> 
                                <div class="t-pages">5</div> 
                                <div class="t-pages">...</div> 
                                <div class="t-pages">13</div> 
                        </div>
                </div>
                <div class="align-tshow">
                        <div class="entries">
                                <div class="showingtext">showing 1 to 10 of 128 entries</div> 
                        </div>
                </div>
        </div>
</div>
</div>`;

const requestitem = `<div class="popup remove-all" id="popup">
<div class="align-popup">
        <span class="material-symbols-outlined success-symbol">calendar_month</span>
        <div class="popup-message">Bill Saved to the localstorage</div>
</div>
</div>
<div class="additem-content requestitem-content">
<div class="additem-statusbar">
<div class="additem-topbar">
        <div class="additem-titlebar">
                <span class="material-symbols-outlined additem-menu-symbol">menu</span>
                <div class="additem-inventorytitle">Item Request</div>
        </div>
        <div class="search card two datetimegrid">
        <div class="datetime">
                <div class="dategrid">
                        <span class="material-symbols-outlined calendar-symbol">
                                calendar_month
                        </span>
                        <div class="date">
                                <div class="date-names">
                                        <span class="datename">20 May 2024</span>
                                        <span class="dayname">Monday</span>
                                </div>
                        </div>
                </div>
                <div class="separator"></div>
                <div class="timegrid">
                        <span class="material-symbols-outlined time-symbol">
                                schedule
                        </span>
                        <div class="time">
                                <span class="timename">10:30 AM</span>
                        </div>
                </div>
        </div>
        </div>
</div>
<div class="additem-navbar">
        <div class="additem-navbar-align">
                <div class="additem-navbar-inventory">Item Request</div>
                <span class="material-symbols-outlined additem-navbar-arrow">keyboard_arrow_right</span>
                <div class="additem-navbar-inventory">Request Items</div>
        </div>
</div>
</div>
<div class="additem-card">
<div class="additem-card-title">
        <div class="additem-itemtitle-text">Request Item</div>
        <div class="additem-itemdescription-text">Request more items for your inventory</div>
</div>
<div class="additem-card-separator"></div>
<div class="additem-card-content">
        <div class="additem-form">
                <div class="additem-card-left">
                    <div class="additem-itemname">
                        <div class="additem-title-text  additem-important">Item Name</div>
                        <select name="additem-itemname-option" id="additem-form-itemname">
                                <option value="" selected disabled hidden>Select Item Name</option>
                        </select>
                        <div class="additem-desc-text hide-text">Auto-generated</div>
                    </div>
                    <div class="additem-supplier">
                        <div class="additem-title-text  additem-important">Quantity</div>
                        <input type="number" class="additem-quantity-input" placeholder="Quantity" id="additem-form-quantity" value="1" min="1" max="1000" step="1">
                        <div class="additem-desc-text hide-text">Status is auto-populated based on In Stock quantity.</div>
                    </div>
                    <div class="additem-itemcode">
                        <div class="additem-title-text  additem-important">Expected Date</div>
                        <input type="datetime-local" class="additem-exdate-input" placeholder="ITM-000129" id="additem-form-exdate" value="2026-06-03T00:15">
                        <div class="additem-desc-text hide-text">Auto-generated</div>
                    </div>
                    <div class="additem-instock">
                        <div class="additem-title-text">In Stock</div>
                        <input type="number" class="additem-instock-input" placeholder="Stock quantity"  id="additem-form-instock" min="0" max="1000" required disabled>
                        <div class="additem-desc-text">Auto-generated</div>
                    </div>
                </div>
        </div>
        <div class="additem-baction-group">
                <div class="additem-baction" id="additem" data-target="request">
                        <span class="datename">Cancel</span>
                </div>
                <div class="additem-baction option-select" id="requestitem-action" >
                        <span class="material-symbols-outlined save-symbol">
                                download
                        </span>
                        <span class="datename">Confirm Request</span>
                </div>
                <!-- <div class="additem-baction option-select inv-baction-delete remove-all" id="additem-form-deleteinvitem">
                        <span class="material-symbols-outlined save-symbol">
                                delete
                        </span>
                        <span class="datename">Delete</span>
                </div> -->
        </div>
</div>
</div>
</div>`;

const report = `<div class="inventory-content" id="salesreport-content">
<div class="statusbar">
        <div class="titlebar">
                <span class="material-symbols-outlined menu-symbol">menu</span>
                <div class="itemrequest-inventorytitle">Sales Report</div>
        </div>
        <div class="search card two datetimegrid">
        <div class="datetime">
                <div class="dategrid">
                        <span class="material-symbols-outlined calendar-symbol">
                                calendar_month
                        </span>
                        <div class="date">
                                <div class="date-names">
                                        <span class="datename">20 May 2024</span>
                                        <span class="dayname">Monday</span>
                                </div>
                        </div>
                </div>
                <div class="separator"></div>
                <div class="timegrid">
                        <span class="material-symbols-outlined time-symbol">
                                schedule
                        </span>
                        <div class="time">
                                <span class="timename">10:30 AM</span>
                        </div>
                </div>
        </div>
</div>
</div>
<div class="inventory-card grid-filter-card">
        <div class="align-option-group">
                <div class="option-group-name">Filter By</div>
                <div class="selector">
                        <select name="opg-select" id="filter-items" class="opg-select">
                                <option value="all">All Items</option>
                        </select>
                </div> 
        </div>
        <div class="align-option-group">
                <div class="option-group-name">Date From</div>
                <input class="opg-date-select" id="filter-date-from" type="date" value="2024-05-20"></input>
        </div>
        <div class="align-option-group">
                <div class="option-group-name">Date To</div>
                <input class="opg-date-select" id="filter-date-to" type="date" value="2024-05-20"></input>
        </div>
        <div class="t-bfilter-group">
                <div class="t-bfilter option-select">
                        <span class="material-symbols-outlined calendar-symbol">
                                filter_alt
                        </span>
                        <span class="datename">Filter</span>
                </div>
        </div>
</div>
<div class="inventory-card grid-main-table-card">
        <div class="tablebar">
        <div class="align-title">
                <div class="tabletitle">Report List</div>
                <div class="tableitems">Total 128 items found</div>
        </div>
</div>
        <table id="salesreport-table">
                <thead>
                        <tr>
                                <td>Item</td>
                                <td>Sold Quantity</td>
                                <td>Total Price</td>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Soya Milk</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">98</div></td>
                                <td><div class="inv-price">$3.00</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Tea C</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">150</div></td>
                                <td><div class="inv-price">$4.70</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><span
                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
                                                <div class="bill-itemname">Streamed Timsum</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">80</div></td>
                                <td><div class="inv-price">$7.30</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><span
                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
                                                <div class="bill-itemname">Porridge</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">90</div></td>
                                <td><div class="inv-price">$11.20</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="/assets/iced-tea-black.png"
                                                        alt="tea" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Iced Tea</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">170</div></td>
                                <td><div class="inv-price">$11.70</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><span
                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
                                                <div class="bill-itemname">Dumplings</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">70</div></td>
                                <td><div class="inv-price">$16.10</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="/assets/iced-coffee.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Iced Coffee</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">160</div></td>
                                <td><div class="inv-price">$13.50</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Coffee C</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">140</div></td>
                                <td><div class="inv-price">$16.50</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Milo</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">45</div></td>
                                <td><div class="inv-price">$15.00</div></td>
                        </tr>
                        <tr>
                                <td>
                                        <div class="alignnames"><img
                                                        src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                        alt="coffee" srcset="" name="item"
                                                        class="item-symbol">
                                                <div class="bill-itemname">Chinese Tea</div>
                                        </div>
                                </td>
                                <td><div class="inv-sold">60</div></td>
                                <td><div class="inv-price">$4.20</div></td>
                        </tr>
                </tbody>
        </table>
        <div class="table-pages">
                <div class="align-tshow">
                        <div class="entries">
                                <div class="showtext">show</div> 
                                <select name="entriescount" id="entriescount" class="entriescount">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                </select> 
                                <div class="entriestext">entries</div>
                        </div>
                </div>
                <div class="align-tshow">
                        <div class="entries">
                                <div class="t-pages option-select">1</div> 
                                <div class="t-pages">2</div> 
                                <div class="t-pages">3</div> 
                                <div class="t-pages">4</div> 
                                <div class="t-pages">5</div> 
                                <div class="t-pages">...</div> 
                                <div class="t-pages">13</div> 
                        </div>
                </div>
                <div class="align-tshow">
                        <div class="entries">
                                <div class="showingtext">showing 1 to 10 of 128 entries</div> 
                        </div>
                </div>
        </div>
</div>

</div>`;

const customerreport = `<div class="additem-content customerpurchase-content remove-all" id="customerpurchase-content">
<div class="additem-statusbar">
        <div class="additem-topbar">
                <div class="additem-titlebar">
                        <span class="material-symbols-outlined additem-menu-symbol">menu</span>
                        <div class="additem-inventorytitle" style="width: max-content">Customer Purchase</div>
                </div>
                <div class="search card two datetimegrid">
                <div class="datetime">
                        <div class="dategrid">
                                <span class="material-symbols-outlined calendar-symbol">
                                        calendar_month
                                </span>
                                <div class="date">
                                        <div class="date-names">
                                                <span class="datename">20 May 2024</span>
                                                <span class="dayname">Monday</span>
                                        </div>
                                </div>
                        </div>
                        <div class="separator"></div>
                        <div class="timegrid">
                                <span class="material-symbols-outlined time-symbol">
                                        schedule
                                </span>
                                <div class="time">
                                        <span class="timename">10:30 AM</span>
                                </div>
                        </div>
                </div>
                </div>
        </div>
        <div class="additem-navbar">
                <div class="additem-navbar-align">
                        <div class="additem-navbar-inventory">Customer Reports</div>
                        <span class="material-symbols-outlined additem-navbar-arrow">keyboard_arrow_right</span>
                        <div class="additem-navbar-inventory">Customer Purchase</div>
                </div>
        </div>
</div>
<div class="additem-card">
        <div class="additem-card-title">
                <div class="additem-itemtitle-text">Customer Purchase</div>
                <div class="additem-itemdescription-text">View customer purchase history</div>
        </div>
        <div class="additem-card-separator"></div>
        <div class="additem-card-content">
                <div class="customerpurchase-customer-details">
                        <div class="additem-navbar-align">
                                <div class="alignnames"><span class="material-symbols-outlined item-symbol">person</span>
                                        <div class="aligncustomer-details">
                                                <div class="bill-itemname" id="customername">vignesh</div>
                                                <div class="additem-navbar-inventory" id="purchasedate">2026-06-03</div>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="additem-form">
                        <div class="additem-card-left">
                                <table id="customerpurchase-table">
                                        <thead>
                                                <tr>
                                                        <td>Item</td>
                                                        <td>Quantity</td>
                                                        <td>Total Price</td>
                                                </tr>
                                        </thead>
                                        <tbody>
                                        <tr id="customer-purchase" data-customername="vignesh" data-purchasedate="2026-06-03">
                                                <td>
                                                        <div class="alignnames"><span class="material-symbols-outlined item-symbol">local_cafe</span>
                                                                <div class="bill-itemname">vignesh</div>
                                                        </div>
                                                </td>
                                                <td><div class="inv-sold">30</div></td>
                                                <td><div class="inv-price">240.90</div></td>
                                        </tr>
                                        
                                        <tr id="customer-purchase" data-customername="madhan" data-purchasedate="2026-06-03">
                                                <td>
                                                        <div class="alignnames"><span class="material-symbols-outlined item-symbol">local_cafe</span>
                                                                <div class="bill-itemname">madhan</div>
                                                        </div>
                                                </td>
                                                <td><div class="inv-sold">20</div></td>
                                                <td><div class="inv-price">115.60</div></td>
                                        </tr>
                                        
                                        </tbody>
                                </table>
                        </div>
                </div>
                <div class="additem-baction-group">
                        <div class="additem-baction" id="customerpurchase-close">
                                <span class="datename">Close</span>
                        </div>
                        <div class="additem-baction option-select remove-all" id="additem-form-addinvitem" >
                                <span class="material-symbols-outlined save-symbol">
                                        save
                                </span>
                                <span class="datename">Save</span>
                        </div>
                        <div class="additem-baction option-select inv-baction-delete remove-all" id="additem-form-deleteinvitem">
                                <span class="material-symbols-outlined save-symbol">
                                        delete
                                </span>
                                <span class="datename">Delete</span>
                        </div>
                </div>
        </div>
</div>
</div>
<div class="inventory-content" id="customerreport-content">
<div class="statusbar">
<div class="titlebar">
        <span class="material-symbols-outlined menu-symbol">menu</span>
        <div class="itemrequest-inventorytitle">Customer Report</div>
</div>
<div class="search card two datetimegrid">
<div class="datetime">
        <div class="dategrid">
                <span class="material-symbols-outlined calendar-symbol">
                        calendar_month
                </span>
                <div class="date">
                        <div class="date-names">
                                <span class="datename">20 May 2024</span>
                                <span class="dayname">Monday</span>
                        </div>
                </div>
        </div>
        <div class="separator"></div>
        <div class="timegrid">
                <span class="material-symbols-outlined time-symbol">
                        schedule
                </span>
                <div class="time">
                        <span class="timename">10:30 AM</span>
                </div>
        </div>
</div>
</div>
</div>
<div class="inventory-card grid-filter-card">
<div class="align-option-group">
        <div class="option-group-name">Filter By</div>
        <div class="selector">
                <select name="opg-select" id="filter-customers" class="opg-select">
                        <option value="all">Everyone</option>
                </select>
        </div> 
</div>
<div class="align-option-group">
        <div class="option-group-name">Date From</div>
        <input class="opg-date-select" id="filter-date-from" type="date" value="2024-05-20"></input>
</div>
<div class="align-option-group">
        <div class="option-group-name">Date To</div>
        <input class="opg-date-select" id="filter-date-to" type="date" value="2024-05-20"></input>
</div>
<div class="t-bfilter-group">
        <div class="t-bfilter option-select">
                <span class="material-symbols-outlined calendar-symbol">
                        filter_alt
                </span>
                <span class="datename">Filter</span>
        </div>
</div>
</div>
<div class="inventory-card grid-main-table-card">
<div class="tablebar">
<div class="align-title">
        <div class="tabletitle">Report List</div>
        <div class="tableitems">Total 128 items found</div>
</div>
</div>
<table id="customerreport-table">
        <thead>
                <tr>
                        <td>Customer</td>
                        <td>Sold Date</td>
                        <td>Total Sales</td>
                </tr>
        </thead>
        <tbody>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Soya Milk</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">98</div></td>
                        <td><div class="inv-price">$3.00</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Tea C</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">150</div></td>
                        <td><div class="inv-price">$4.70</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">Streamed Timsum</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">80</div></td>
                        <td><div class="inv-price">$7.30</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">Porridge</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">90</div></td>
                        <td><div class="inv-price">$11.20</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="/assets/iced-tea-black.png"
                                                alt="tea" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Iced Tea</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">170</div></td>
                        <td><div class="inv-price">$11.70</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">Dumplings</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">70</div></td>
                        <td><div class="inv-price">$16.10</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="/assets/iced-coffee.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Iced Coffee</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">160</div></td>
                        <td><div class="inv-price">$13.50</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Coffee C</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">140</div></td>
                        <td><div class="inv-price">$16.50</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Milo</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">45</div></td>
                        <td><div class="inv-price">$15.00</div></td>
                </tr>
                <tr>
                        <td>
                                <div class="alignnames"><img
                                                src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-symbol">
                                        <div class="bill-itemname">Chinese Tea</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">60</div></td>
                        <td><div class="inv-price">$4.20</div></td>
                </tr>
        </tbody>
</table>
<div class="table-pages">
        <div class="align-tshow">
                <div class="entries">
                        <div class="showtext">show</div> 
                        <select name="entriescount" id="entriescount" class="entriescount">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                        </select> 
                        <div class="entriestext">entries</div>
                </div>
        </div>
        <div class="align-tshow">
                <div class="entries">
                        <div class="t-pages option-select">1</div> 
                        <div class="t-pages">2</div> 
                        <div class="t-pages">3</div> 
                        <div class="t-pages">4</div> 
                        <div class="t-pages">5</div> 
                        <div class="t-pages">...</div> 
                        <div class="t-pages">13</div> 
                </div>
        </div>
        <div class="align-tshow">
                <div class="entries">
                        <div class="showingtext">showing 1 to 10 of 128 entries</div> 
                </div>
        </div>
</div>
</div>

</div>`;

const settings = `
<div class="card one grid-one">
        <div class="mainmenu">
        <span class="material-symbols-outlined symbol">
                home
        </span>
        <div class="opname">Settings</div>
        </div>
</div>
`;

const users = `
<div class="card one grid-one">
        <div class="mainmenu">
        <span class="material-symbols-outlined symbol">
                home
        </span>
        <div class="opname">Users</div>
        </div>
</div>
`;

const init_inventory = [
        {
            "itemcode": "ITM-000001",
            "itemimage": "/assets/soya milk.webp",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "Soya Milk",
            "itemdesc": "Soya Milk",
            "price": 3,
            "instock": 52,
            "oldstock": 52,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000002",
            "itemimage": "/assets/tea c.png",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "Tea C",
            "itemdesc": "Tea C",
            "price": 4.7,
            "instock": 50,
            "oldstock": 50,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000003",
            "itemimage": "/assets/coffee black.webp",
            "category": "Steamed Timsum",
            "unit": "Pcs",
            "itemname": "Steamed Timsum",
            "itemdesc": "Steamed Timsum",
            "price": 7.3,
            "instock": 40,
            "oldstock": 40,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000004",
            "itemimage": "/assets/coffee black.webp",
            "category": "Porridge",
            "unit": "Bowl",
            "itemname": "Porridge",
            "itemdesc": "Porridge",
            "price": 11.2,
            "instock": 10,
            "oldstock": 10,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000005",
            "itemimage": "/assets/iced-coffee.png",
            "category": "Beverage",
            "unit": "Glass",
            "itemname": "Iced Coffee",
            "itemdesc": "Iced Coffee",
            "price": 11.7,
            "instock": 10,
            "oldstock": 10,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000006",
            "itemimage": "/assets/coffee black.webp",
            "category": "Noodle/Dumplings",
            "unit": "Pcs",
            "itemname": "Dumplings",
            "itemdesc": "Dumplings",
            "price": 16.1,
            "instock": 10,
            "oldstock": 10,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000007",
            "itemimage": "/assets/iced-coffee.png",
            "category": "Beverage",
            "unit": "Glass",
            "itemname": "Iced milo",
            "itemdesc": "Iced milo",
            "price": 13.5,
            "instock": 10,
            "oldstock": 10,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000008",
            "itemimage": "/assets/coffee c.webp",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "Coffee C",
            "itemdesc": "Coffee C",
            "price": 16.5,
            "instock": 10,
            "oldstock": 10,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000009",
            "itemimage": "/assets/milo.png",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "Milo",
            "itemdesc": "Milo",
            "price": 15,
            "instock": 15,
            "oldstock": 15,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000010",
            "itemimage": "/assets/chinese tea.webp",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "Chinese Tea",
            "itemdesc": "Chinese Tea",
            "price": 4.2,
            "instock": 30,
            "oldstock": 30,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000011",
            "itemimage": "/assets/iced-tea-black.png",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "orange juice",
            "itemdesc": "orange juice",
            "price": 1.8,
            "instock": 3,
            "oldstock": 3,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000012",
            "itemimage": "/assets/iced-tea-black.png",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "mango juice",
            "itemdesc": "mango juice",
            "price": 1.8,
            "instock": 3,
            "oldstock": 3,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000013",
            "itemimage": "/assets/iced-tea-black.png",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "pineapple juice",
            "itemdesc": "pineapple juice",
            "price": 1.8,
            "instock": 3,
            "oldstock": 3,
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000014",
            "itemimage": "/assets/iced-tea-black.png",
            "category": "Beverage",
            "unit": "Cup",
            "itemname": "milk tea",
            "itemdesc": "milk tea",
            "price": 1.8,
            "instock": 3,
            "oldstock": 3,
            "supplier": "Local"
        }
];


// Globals
let current_category = "Beverage";
const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const dayname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const toggle = {
        itemname: false,
        category: false,
        price: false,
        unit: false,
        purchased: false,
        sold: false,
        instock: false,
        status: false,
        lastupdated: false
}
const target_data_fields = {
        "sort-table-by-name": "itemname",
        "sort-table-by-category": "category",
        "sort-table-by-price": "price",
        "sort-table-by-unit": "unit",
        "sort-table-by-purchased": "purchased",
        "sort-table-by-sold": "sold",
        "sort-table-by-instock": "instock",
        "sort-table-by-status": "status",
        "sort-table-by-lastupdated": "lastupdated"
}


function option_activate() {
        const options = document.querySelectorAll(".option");
        const content = document.querySelector(".content-area");
        
        // page navigation
        options.forEach(element => {
                element.addEventListener("click", () => {
                        options.forEach(elm => elm.classList.remove("option-select"));
                        element.classList.add("option-select");
                        let target = element.getAttribute("data-target");
                        if(target == "billing") {
                                content.innerHTML = billing;
                                generate_billing_items_list();
                                generate_billing_checkout_list();
                        }
                        if (target == "inventory") {
                                content.innerHTML = inventory;
                                generate_inventory_rows(read_inventory());
                                update_date();
                        };
                        if (target == "request") {
                                content.innerHTML = request;
                                generate_request_rows();
                                update_date();
                        };
                        if (target == "report") {
                                content.innerHTML = report;
                                generate_salesreport_rows();
                                update_date();
                        }
                        if (target == "customerreport") {
                                content.innerHTML = customerreport;
                                generate_customerreport_rows();
                                update_date();
                        }
                        if (target == "settings") content.innerHTML = settings;
                        if (target == "users") content.innerHTML = users;
                })
        });

        // actions
        document.addEventListener("click", (e) => {
                // page navigation
                const handleadditems = e.target.closest("#additem");
                if (handleadditems) {
                        let target = handleadditems.getAttribute("data-target");
                        if (target == "inventory") {
                                content.innerHTML = inventory;
                                generate_inventory_rows(read_inventory());
                                update_date();
                        };
                        if (target == "additem") {
                                content.innerHTML = additem;
                                document.querySelector(".additem-itemcode-input").value = generate_itemcode();
                                update_date();
                        };
                        if (target == "request") {
                                content.innerHTML = request;
                                options[1].classList.remove("option-select");
                                options[2].classList.add("option-select");
                                generate_request_rows();
                                update_date();
                        };
                }
                
                // Button actions
                // Add item to inventory
                const save_item = e.target.closest("#additem-form-addinvitem");
                if (save_item) additems_inventory();
                
                // Edit item from inventory
                const edit_item = e.target.closest("#additem-form-editinvitem");
                if (edit_item) edititems_inventory(edit_item.getAttribute("data-edititem"));
                
                // Delete item from inventory
                const delete_item = e.target.closest("#additem-form-deleteinvitem");
                if (delete_item) deleteitems_inventory(delete_item.getAttribute("data-deleteitem"));
                
                // Edit page navigation
                const item_table_rows = e.target.closest("#inventory-table-rows");
                if (item_table_rows) {
                        let itemcode = item_table_rows.getAttribute("data-itemcode");
                        const table_item = get_inventory_item(itemcode);
                        content.innerHTML = additem;
                        document.querySelector(".additem-content .additem-itemtitle-text").innerText = "Edit Item";
                        document.querySelector(".additem-content .additem-itemdescription-text").innerText = "Edit item from your inventory";
                        document.querySelector("#additem-form-itemcode").value = table_item.itemcode;
                        document.querySelector("#additem-form-category").value = table_item.category;
                        document.querySelector("#additem-form-unit").value = table_item.unit;
                        document.querySelector("#additem-form-itemname").value = table_item.itemname;
                        document.querySelector("#additem-form-itemdesc").value = table_item.itemdesc;
                        document.querySelector("#additem-form-price").value = table_item.price;
                        document.querySelector("#additem-form-instock").value = table_item.instock;
                        document.querySelector("#additem-form-supplier").value = table_item.supplier;
                        document.querySelector("#additem-form-itemname").value = table_item.itemname;
                        const additem_option_delete = document.querySelector(".inv-baction-delete");
                        additem_option_delete.classList.remove("remove-all");
                        additem_option_delete.setAttribute("data-deleteitem", itemcode);
                        const additem_option_editsave = document.querySelector("#additem-form-addinvitem");
                        additem_option_editsave.setAttribute("id", "additem-form-editinvitem");
                        additem_option_editsave.setAttribute("data-edititem", itemcode);
                        update_date();
                }
                
                // Table actions
                const action_filter = e.target.closest("#inventory-action-filter");
                if (action_filter) generate_filtered_inventory_rows(read_inventory());
                
                // filter actions reset
                const action_reset = e.target.closest("#inventory-action-reset");
                if (action_reset) {
                        ["#opg-select-category","#opg-select-items","#opg-select-status"]
                        .forEach(selector => document.querySelector(selector).value = "all");
                        document.querySelector("#opg-select-dfrom").value = "2024-05-20";
                        document.querySelector("#opg-select-dto").value = "2024-05-20";
                        generate_inventory_rows(read_inventory());
                }
                
                // sort tables in inventory page
                const action_sort = e.target.closest(".inventory-card table thead th");
                if (action_sort) generate_sorted_inventory_rows(read_inventory(), action_sort.getAttribute("data-target"));
                
                // Change billing page items list based on category
                const billing_category = e.target.closest(".option-type");
                if (billing_category) {
                        document.querySelectorAll(".option-type").forEach(element => element.classList.remove("option-select"));
                        billing_category.classList.add("option-select");
                        const category = billing_category.getAttribute("data-category");
                        generate_billing_items_list(category);
                        current_category = category;
                };

                // Add bills to the checkout table based on item clicks
                const billing_item = e.target.closest(".option-item");
                if (billing_item) generate_billing_checkout_list(billing_item.getAttribute("data-itemcode"));

                // Delete bills from the checkout table
                const delete_bill_item = e.target.closest("#bill-item-delete");
                if (delete_bill_item) delete_checkout_item(delete_bill_item.getAttribute("data-checkout-itemcode"));

                // New Bill Action
                const new_bill = e.target.closest("#new-checkout-bill")
                if (new_bill) {
                        if (read_bills().length != 0) {document.querySelector(".save-bill").classList.remove("remove-all");}
                        else {
                                show_alert("Empty bill. Add item to the bill", "error");
                        }
                }

                // Close New Bill Action
                // const close_new_bill = e.target.closest(".save-bill")
                // if (close_new_bill) document.querySelector(".save-bill").classList.add("remove-all");

                // Save Bill Action
                const save_bill = e.target.closest("#customer-bill-save");
                if (save_bill) save_bill_report();

                // request item action
                const request_item = e.target.closest("#request-item-action");
                if (request_item) {
                        content.innerHTML = requestitem;
                        generate_request_itemname_list();
                        update_date();
                }

                // confirm request item action
                const confirm_requestitem = e.target.closest("#requestitem-action");
                if (confirm_requestitem) {
                        add_requestitem();
                }

                // sales report page filter action
                const sales_report = e.target.closest("#salesreport-content .t-bfilter");
                if (sales_report) generate_salesreport_rows("filter");

                 // customer report page filter action
                 const customer_report = e.target.closest("#customerreport-content .t-bfilter");
                 if (customer_report) generate_customerreport_rows("filter");

                 // item request page filter action
                 const item_request = e.target.closest(".itemrequest-content .t-bfilter");
                 if (item_request) generate_request_rows("filter");

                 // customer report page customer purchase navigation
                 const customer_purchase = e.target.closest("#customerreport-table tbody tr#customer-purchase");
                 if (customer_purchase) generate_customer_purchase_report(customer_purchase.getAttribute("data-customername"), customer_purchase.getAttribute("data-purchasedate"));

                 // customer purchase report page close
                const customer_purchase_close = e.target.closest("#customerpurchase-close");
                if (customer_purchase_close) document.querySelector("#customerpurchase-content").classList.add("remove-all");

                // billing page next page action
                const items_nextpage = e.target.closest("#items-nextpage")
                if (items_nextpage) hide_overflow("change");
        });


        document.addEventListener("keypress", (e) => {
                const checkout_quantity = e.target.closest("#checkout-item-count");
                if (checkout_quantity && e.key == "Enter") {
                        generate_billing_checkout_item_quantity(checkout_quantity.getAttribute("data-checkout-itemcode"), checkout_quantity.value);
                }
        });

        document.addEventListener("input", (e) => {
                const searchbar = e.target.closest(".content .search.card.two.grid-search input[type=text]");
                if (searchbar) generate_search_items(searchbar.value);

                const request_itemname_select = e.target.closest(".requestitem-content #additem-form-itemname");
                if (request_itemname_select) generate_request_quantity(request_itemname_select.value);
        });

        window.addEventListener("resize", () => {
                if (document.querySelector(".content .car.five")) hide_overflow();
        });
}
option_activate()


function manage_localstorage() {
        let inventory_table = false;
        let bills_table = false;
        let reports_table = false;
        let request_table = false;
        if (!localStorage.getItem("inventory")) {
                write_inventory(init_inventory);
                inventory_table = true;
        }
        if (!localStorage.getItem("bills")) {
                write_bills([]);
                bills_table = true;
        }
        if (!localStorage.getItem("reports")) {
                write_reports([]);
                reports_table = true;
        }
        if (!localStorage.getItem("requests")) {
                write_requests([{"ordercode":"ORDER-000001","itemname":"Iced milo","quantity":24,"expecteddate":"2026-06-03T10:14"},{"ordercode":"ORDER-000002","itemname":"Dumplings","quantity":32,"expecteddate":"2026-06-03T10:14"},{"ordercode":"ORDER-000003","itemname":"orange juice","quantity":16,"expecteddate":"2026-06-03T10:14"},{"ordercode":"ORDER-000004","itemname":"Dumplings","quantity":37,"expecteddate":"2026-06-03T10:14"}]);
                request_table = true;
        }
        if (inventory_table || bills_table || reports_table || request_table) show_alert("Table Intialised"); // alert("Table Initialised");
}
manage_localstorage();


function update_date() {
`".datetime .time .timename" 10:30 AM`
        if (document.querySelector(".datetime")) {
                const date = new Date();
                document.querySelectorAll(".datetime .date-names .datename").forEach(e => e.innerText = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`);
                document.querySelectorAll(".datetime .date-names .dayname").forEach(e => e.innerText = `${dayname[date.getDay()]}`);
        }
}
update_date();


function update_time() {
                if (document.querySelector(".datetime")) {
                        const date = new Date();
                        document.querySelectorAll(".datetime .time .timename").forEach(e => e.innerText = `${date.getHours() % 12 || 12}:${date.getMinutes()} ${(date.getHours() >= 12) ? "PM" : "AM"}`);
                }
                setTimeout(update_time, 1000);
}
update_time();


function hide_overflow(changepage) {
        if (changepage == "reset") {
                document.querySelector(".grid-items .items-options").style.top = `0px`;
        }
        const griditems = document.querySelector(".grid-items");
        let griditemsheight = griditems.getBoundingClientRect().y + griditems.getBoundingClientRect().height;

        let optionitems = document.querySelectorAll(".option-item");
        optionitems = Array.from(optionitems, e => ({
                item: e.getBoundingClientRect(),
                code: e.getAttribute("data-itemcode")
        }));
        optionitems = optionitems.map(e => ({
                container: griditemsheight,
                top: e.item.y,
                bottom: e.item.y + e.item.height,
                code: e.code
        }));
        let lastitem = optionitems.find(e => e.top < griditemsheight && e.bottom > griditemsheight);

        if (changepage == "change") {
                if (lastitem) {
                        document.querySelector(".grid-items .items-options").style.top = `-${lastitem.top - griditems.getBoundingClientRect().y - 10}px`
                } else {
                        document.querySelector(".grid-items .items-options").style.top = `0px`
                }
        } else {
                if (optionitems.length > 0) {
                        if (!lastitem) {
                                lastitem = optionitems[optionitems.length - 1];
                                // console.log("none", griditemsheight, lastitem.bottom, griditemsheight - lastitem.bottom, lastitem.code);
                                griditems.style.setProperty("--grid-page-height", `${griditemsheight - lastitem.bottom + 20}px`);
                        } else {
                                // console.log("overflow", griditemsheight, lastitem.top, griditemsheight - lastitem.top, lastitem.code);
                                griditems.style.setProperty("--grid-page-height", `${griditemsheight - lastitem.top + 20}px`);
                        }
                }
        }
}
hide_overflow()
        
        
function generate_itemcode() {
        let inventory_content = read_inventory();
        let lastinv_number = inventory_content[inventory_content.length - 1].itemcode;
        
        let olditemcode = Number.parseInt(lastinv_number.replace("ITM-", ""));
        // failsafe
        // if (inventory_content.length > 0) {
        //         let lastinv_number = inventory_content[inventory_content.length - 1].itemcode;
        //         olditemcode = Number.parseInt(lastinv_number.replace("ITM-", ""));
        // }
        olditemcode = olditemcode + 1;
        olditemcode = "" + olditemcode;
        
        let newitemcode = olditemcode;
        for (let index = 0; index < (6 - olditemcode.length); index++) {
                newitemcode = "0" + newitemcode;
        }
        newitemcode = "ITM-" + newitemcode;
        return newitemcode;
}


function generate_ordercode() {
        let requests_content = read_requests();
        let olditemcode = 0;
        if (requests_content.length > 0) {
                let lastinv_number = requests_content[requests_content.length - 1].ordercode;
                olditemcode = Number.parseInt(lastinv_number.replace("ORDER-", ""));
                console.log(lastinv_number.replace("ORDER-", ""));
        }
        olditemcode = olditemcode + 1;
        olditemcode = "" + olditemcode;
        
        let newitemcode = olditemcode;
        for (let index = 0; index < (6 - olditemcode.length); index++) {
                newitemcode = "0" + newitemcode;
        }
        newitemcode = "ORDER-" + newitemcode;
        return newitemcode;
}


function generate_inventory_rows(inventory) {
        const form_items_select = document.querySelector("#opg-select-items");
        const itemnames_array = Array.from(inventory, (element) => element.itemname);
        let form_filter_items = `<option value="all">All Items</option>`;
        itemnames_array.forEach(element => form_filter_items += `<option value="${element}">${element}</option>`)
        form_items_select.innerHTML = form_filter_items;
        let inventory_content = "";
        inventory.forEach(element => {
                let inventory_row = ""
                inventory_row += `<tr id="inventory-table-rows" data-itemcode="${element.itemcode}">
                        <td>
                                <div class="alignnames"><img
                                                src="${element.itemimage}"
                                                alt="${element.itemname}" class="item-symbol">
                                        <div class="bill-itemname">${element.itemname}</div>
                                </div>
                        </td>
                        <td><div class="inv-category">${element.category}</div></td>
                        <td><div class="inv-price">$${element.price.toFixed(2)}</div></td>
                        <td><div class="inv-unit">${element.unit}</div></td>
                        <td><div class="inv-purchased">0</div></td>
                        <td><div class="inv-sold">0</div></td>
                        ${generate_stock_status(element.instock)}
                        <td><div class="inv-lastupdated">20 May 2024, 10:30AM</div></td>
                </tr>`
                
                inventory_content += inventory_row;
        });
        document.querySelector(".inventory-content table tbody").innerHTML = inventory_content;
}


function generate_filtered_inventory_rows(inventory) {
        const form_filter = document.querySelectorAll("#opg-select-category, #opg-select-items, #opg-select-status, #opg-select-dfrom, #opg-select-dto");
        const form_filter_array = Array.from(form_filter, (element) => element.value);
        const form_filter_category = form_filter_array[0];
        const form_filter_itemname = form_filter_array[1];
        const form_filter_status = form_filter_array[2];
        const form_filter_dfrom = form_filter_array[3];
        const form_filter_dto = form_filter_array[4];
        if (form_filter_category != "all") inventory = inventory.filter((element) => element.category == form_filter_category);
        if (form_filter_itemname != "all") inventory = inventory.filter((element) => element.itemname == form_filter_itemname);
        if (form_filter_status != "all") {
                if (form_filter_status == "instock") inventory = inventory.filter((element) => element.instock > 10);
                if (form_filter_status == "lowstock") inventory = inventory.filter((element) => 0 < element.instock && element.instock <= 10);
                if (form_filter_status == "outofstock") inventory = inventory.filter((element) => element.instock == 0);
        }
        generate_inventory_rows(inventory);
}


// can be improved by tracking only the current field sorted (for later)
function generate_sorted_inventory_rows(inventory, target_data) {
        let field = target_data_fields[target_data];
        toggle[field] = !toggle[field];
        let ascending = toggle[field];
        let inventory_sample = inventory[0][field];
        if (typeof inventory_sample == "string") {
                if (ascending) inventory = inventory.sort((a, b) => (a[field] > b[field]) ? 1 : (b[field] > a[field]) ? -1 : 0)
                        else inventory = inventory.sort((a, b) => (a[field] < b[field]) ? 1 : (b[field] < a[field]) ? -1 : 0);
        } else {
                if (ascending) inventory = inventory.sort((a, b) => a[field] - b[field])
                        else inventory = inventory.sort((a, b) => b[field] - a[field]);
        }
        generate_filtered_inventory_rows(inventory);
}


function generate_stock_status(instock) {
        if (instock==0) {
                return `<td><div class="inv-instock inv-instock-red">${instock}</div></td>
                        <td><div class="inv-status inv-status-red">Out of Stock</div></td>`
        }
        if (instock<=10) {
                return `<td><div class="inv-instock inv-instock-orange">${instock}</div></td>
                        <td><div class="inv-status inv-status-orange">Low Stock</div></td>`
        }
        return `<td><div class="inv-instock">${instock}</div></td>
                <td><div class="inv-status">In Stock</div></td>`
}


function generate_billing_items_list(category) {
        let inventory = read_inventory();
        if (!category) category = "Beverage";
        const category_list = {
                "Beverage" : "Beverage",
                "Steamed Bun"  : "Steamed Bun",
                "Steamed Timsum"  : "Steamed Timsum",
                "Deep Fry Timsum" : "Deep Fry Timsum",
                "Bake" : "Bake",
                "Noodle/Dumplings" : "Noodle/Dumplings",
                "Porridge"  : "Porridge",
                "all": undefined
        }
        if (category_list[category]) inventory = inventory.filter((element) => element.category == category_list[category]);
        const billing_items_list = document.querySelector(".card.five.grid-items .items-options");
        let billing_items_list_content = "";
        inventory.forEach(element => {
                billing_items_list_content += `
                <div class="option-item option-item-select" data-itemcode="${element.itemcode}" data-inventory-count="${element.instock}">
                        <img src="${element.itemimage}"
                                alt="${element.itemname}" srcset="" name="item" draggable="false"
                                class="item-img">
                        <span class="opname">${element.itemname}</span>
                        <span class="opname-chinese">咖啡黑</span>
                        </div>`; 
                }); // 咖啡黑
                // <span class="opname-chinese">$${element.price}</span>
        billing_items_list.innerHTML = billing_items_list_content;
        hide_overflow("reset");
}
generate_billing_items_list();


function generate_billing_checkout_list(itemcode) {
        const inventory = read_inventory();
        const bills = read_bills();
        if (itemcode) {
                const billing_item = inventory.find((element) => element.itemcode == itemcode);
                if (billing_item.instock > 0) {
                        const existing = bills.find(element => element.itemcode == itemcode);
                        if (existing) {
                                existing.quantity += 1;
                                existing.total = existing.quantity * existing.price;
                        } else {
                                bills.push({
                                        "itemcode": billing_item.itemcode,
                                        "itemname": billing_item.itemname,
                                        "quantity": 1,
                                        "itemimage": billing_item.itemimage,
                                        "total": billing_item.price,
                                        "price": billing_item.price
                                });
                        }
                        billing_item.instock -= 1;
                }
        }
        write_bills(bills);
        write_inventory(inventory);
        billing_checkout_list = document.querySelector(".card.three.grid-bill table tbody");
        let checkout_content = "";
        bills.forEach(element => {
                checkout_content += `<tr>
                <td>
                        <div class="alignnames">
                                <img src="${element.itemimage}" alt="${element.itemname}" srcset="" name="item" draggable="false" class="item-symbol">
                                <div class="bill-itemname">${element.itemname}</div>
                        </div>
                </td>
                <td><div class="aligncount"><input type="number" class="bill-item-count" name="count" data-checkout-itemcode="${element.itemcode}" value="${element.quantity}" id="checkout-item-count" min="0" max="${inventory.find(item => item.itemcode == element.itemcode).oldstock}" autocomplete="off"></div></td>
                <td><div class="bill-itemname">$${element.price}</div></td>
                <td><div class="bill-itemname">$${(element.total).toFixed(2)}</div></td>
                <td id="bill-item-delete" data-checkout-itemcode="${element.itemcode}"><span class="material-symbols-outlined delete-symbol" >delete</span></td>
                </tr>`;
        });
        billing_checkout_list.innerHTML = checkout_content;
        generate_billing_items_list(current_category);
        document.querySelector("#checkout-total-amount").innerText = `$${bills.reduce((total, current) => total + current.total,0).toFixed(2)}`;
}
generate_billing_checkout_list();


function generate_billing_checkout_item_quantity(itemcode, quantity) {
        const inventory = read_inventory();
        billing_item = inventory.find((element) => element.itemcode == itemcode);
        const bills = read_bills();
        if (itemcode) {
                const existing = bills.find(element => element.itemcode == itemcode);
                if (existing) {
                        if (quantity < 1) {
                                existing.quantity = 1;
                                existing.total = existing.quantity * existing.price;
                                billing_item.instock = billing_item.oldstock - 1;
                        }
                        else if (quantity > billing_item.oldstock) {
                                existing.quantity = billing_item.oldstock;
                                existing.total = existing.quantity * existing.price;
                                billing_item.instock = 0
                        }
                                if ((quantity >= 1) && (quantity <= billing_item.oldstock)) {
                                        existing.quantity = parseInt(quantity);
                                        existing.total = existing.quantity * existing.price;
                                        billing_item.instock = billing_item.oldstock - quantity;
                        };
                }
        }
        write_bills(bills);
        write_inventory(inventory);
        generate_billing_checkout_list();
}
generate_billing_checkout_item_quantity();


function delete_checkout_item(delete_bill_itemcode) {
        const inventory = read_inventory();
        const bills = read_bills();
        const deleted_inventory_item = inventory.find((element) => element.itemcode == delete_bill_itemcode);
        const deleted_checkout_list = bills.filter(element => element.itemcode != delete_bill_itemcode);
        deleted_inventory_item.instock = deleted_inventory_item.oldstock;
        write_bills(deleted_checkout_list);
        write_inventory(inventory);
        generate_billing_checkout_list();
}

function save_bill_report() {
        const inventory = read_inventory();
        const bill = read_bills();
        // console.log(`ic: ${element.itemcode} qty: ${element.quantity}`);
        const reports = read_reports();
        const customer_name = document.querySelector("#customer-name").value;
        const bill_date = document.querySelector("#bill-date").value;
        if (customer_name && bill_date) {
                const report = {
                        "name": customer_name.toLowerCase(),
                        "date": bill_date,
                        "bill": bill
                }
                document.querySelector(".save-bill").classList.add("remove-all");
                reports.push(report);
                // clearing old bill
                document.querySelector(".card.three.grid-bill table tbody").innerHTML = "";
                
                bill.forEach(element => {
                        const inventory_item = inventory.find(item => item.itemcode == element.itemcode);
                        inventory_item.oldstock -= element.quantity;
                        inventory_item.instock = inventory_item.oldstock;
                });
                write_inventory(inventory);
                write_bills([]);
                write_reports(reports);
                show_alert("Bill Saved");
        } else {
                // alert("All fields required");
                show_alert("All fields required", "error");
        }
}

function generate_salesreport_rows(filter) {
        const reports = read_reports();
        reports.forEach(report => {
                report.bill.forEach(item => {
                        item.date = report.date;
                });
        });
        let items_array = Array.from(reports, (element) => element.bill);
        items_array = items_array.flat();
        let mapped_items = {};
        items_array.forEach(item => {
                if (mapped_items[item.itemcode]) {
                        mapped_items[item.itemcode].quantity += item.quantity;
                        mapped_items[item.itemcode].total += item.total;
                } else {
                        mapped_items[item.itemcode] = {...item}
                }
        })
        items_array = Object.values(mapped_items);
        // filter the items from the items array based on date from and date to
        if (filter) {
                const filter_date_from = document.querySelector("#salesreport-content #filter-date-from").value;
                const filter_date_to = document.querySelector("#salesreport-content #filter-date-to").value;
                items_array = items_array.filter(item => {
                        const item_date = new Date(item.date);
                        return item_date >= new Date(filter_date_from) && item_date <= new Date(filter_date_to);
                });
                items_array = items_array.filter(item => {
                        const filter_itemname = document.querySelector("#salesreport-content .selector #filter-items").value;
                        if (filter_itemname == "all") return true;
                        return item.itemname == filter_itemname;
                });
        }
        items_array = items_array.sort((a, b) => b.quantity - a.quantity)
        salesreport_content = "";
        items_array.forEach(element => {
                salesreport_content += `
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">${element.itemname}</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">${element.quantity}</div></td>
                        <td><div class="inv-price">${element.total.toFixed()}</div></td>
                </tr>
                `
        })
        document.querySelector("#salesreport-table tbody").innerHTML = salesreport_content;
        
        if (!filter) {
                // updating the filter fields
                let filter_content = ""
                const filter_items = document.querySelector("#salesreport-content .selector #filter-items");
                filter_content = filter_items.innerHTML;
                items_array.forEach(element => { filter_content += `<option value="${element.itemname}">${element.itemname}</option>`; });
                filter_items.innerHTML = filter_content;
                const filter_date_from = document.querySelector("#salesreport-content #filter-date-from");
                const filter_date_to = document.querySelector("#salesreport-content #filter-date-to");
                const now = new Date();
                const local_datetime_value = `${
                String(now.getFullYear())}-${
                String(now.getMonth() + 1).padStart(2, "0")}-${
                String(now.getDate()).padStart(2, "0")}`;
                filter_date_from.value = local_datetime_value;
                filter_date_to.value = local_datetime_value;
        }
}

function generate_customerreport_rows(filter) {
        const reports = read_reports();
        let items_array = Array.from(reports, (element) => element.bill);
        items_array = items_array.flat();
        const customer_array = reports.map(order => ({
                name: order.name,
                date: order.date,
                total: order.bill.reduce((total, item) => total += item.total, 0)
        }));

        let grouped_customer_array = {};
        customer_array.forEach(customer => {
                const key = `${customer.name}_${customer.date}`;
                if (grouped_customer_array[key]) {
                        grouped_customer_array[key].total += customer.total;
                } else {
                        grouped_customer_array[key] = { ...customer };
                }
        });
        grouped_customer_array = Object.values(grouped_customer_array);
        grouped_customer_array = grouped_customer_array.sort((a, b) => b.total - a.total);
        if (filter) {
                grouped_customer_array = grouped_customer_array.filter(customer => {
                        const filter_date_from = document.querySelector("#customerreport-content #filter-date-from").value;
                        const filter_date_to = document.querySelector("#customerreport-content #filter-date-to").value;
                        const date = new Date(customer.date);
                        return date >= new Date(filter_date_from) && date <= new Date(filter_date_to);
                });
                grouped_customer_array = grouped_customer_array.filter(customer => {
                        const filter_customername = document.querySelector("#customerreport-content .selector #filter-customers").value;
                        return filter_customername == "all" ? true : customer.name == filter_customername;
                });
        }
        customerreport_content = "";
        grouped_customer_array.forEach(element => {
                customerreport_content += `
                <tr id="customer-purchase" data-customername="${element.name}" data-purchasedate="${element.date}">
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">person</span>
                                        <div class="bill-itemname">${element.name}</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">${element.date}</div></td>
                        <td><div class="inv-price">${element.total.toFixed(2)}</div></td>
                </tr>
                `
        })
        document.querySelector("#customerreport-content #customerreport-table tbody").innerHTML = customerreport_content;

        if (!filter) {
                // updating the filter fields
                let filter_content = ""
                const filter_customername = document.querySelector("#customerreport-content .selector #filter-customers");
                filter_content = filter_customername.innerHTML;
                grouped_customer_array = Array.from(grouped_customer_array, (element) => element.name);
                grouped_customer_array = Array.from(new Set(grouped_customer_array));
                grouped_customer_array.forEach(customer => { filter_content += `<option value="${customer}">${customer}</option>`; });
                filter_customername.innerHTML = filter_content;
                const filter_date_from = document.querySelector("#customerreport-content #filter-date-from");
                const filter_date_to = document.querySelector("#customerreport-content #filter-date-to");
                const now = new Date();
                const local_datetime_value = `${
                String(now.getFullYear())}-${
                String(now.getMonth() + 1).padStart(2, "0")}-${
                String(now.getDate()).padStart(2, "0")}`;
                filter_date_from.value = local_datetime_value;
                filter_date_to.value = local_datetime_value;
        }
}

function generate_search_items(search_value) {
        const inventory = read_inventory();
        if (!search_value) {
                generate_billing_items_list(current_category);
        } else {
                const billing_items_list = document.querySelector(".card.five.grid-items .items-options");
                const search_filter_list = inventory.filter(e => e.itemname.toLowerCase().includes(search_value));
                let billing_items_list_content = "";
                search_filter_list.forEach(element => {
                        billing_items_list_content += `
                        <div class="option-item option-item-select" data-itemcode="${element.itemcode}" data-inventory-count="${element.instock}">
                                <img src="${element.itemimage}"
                                        alt="${element.itemname}" srcset="" name="item" draggable="false"
                                        class="item-img">
                                <span class="opname">${element.itemname}</span>
                                <span class="opname-chinese">咖啡黑</span>
                                </div>`; 
                        }); // 咖啡黑
                        // <span class="opname-chinese">$${element.price}</span>
                billing_items_list.innerHTML = billing_items_list_content;
        }
}

function generate_request_itemname_list() {
        let inventory = read_inventory();
        const request_item_names = document.querySelector(".requestitem-content #additem-form-itemname");
        const now = new Date();
        const local_datetime_value = `${
        String(now.getFullYear())}-${
        String(now.getMonth() + 1).padStart(2, "0")}-${
        String(now.getDate()).padStart(2, "0")}T${
        String(now.getHours()).padStart(2, "0")}:${
        String(now.getMinutes()).padStart(2, "0")}`;
        const request_item_exdate = document.querySelector(".requestitem-content #additem-form-exdate");
        inventory = inventory.map(e => ({
                itemcode: e.itemcode,
                itemname: e.itemname,
                instock: e.instock
        }));
        let itemname_list = `<option value="" selected disabled hidden>Select Item Name</option>`;
        inventory.forEach(e => itemname_list += `<option value="${e.itemname}">${e.itemname}</option>`);
        request_item_names.innerHTML = itemname_list;
        request_item_exdate.value = local_datetime_value;
}

function generate_request_quantity(itemname) {
        let inventory = read_inventory();
        inventory = inventory.find(e => e.itemname == itemname);
        const request_item_instock = document.querySelector(".requestitem-content #additem-form-instock");
        request_item_instock.value = inventory.instock;
}

function generate_request_rows(filter) {
        let requests = read_requests();
        if (filter) {
                const filter_itemname = document.querySelector(".itemrequest-content .selector #filter-items").value;
                const filter_quantity = document.querySelector(".itemrequest-content #filter-quantity").value;
                const filter_expected_date = document.querySelector(".itemrequest-content #filter-expected-date").value;
                if (filter_itemname != "all") requests = requests.filter(request => request.itemname == filter_itemname);
                requests = requests.filter(request => request.quantity >= filter_quantity);
                requests = requests.filter(request => request.expecteddate.split("T")[0] == filter_expected_date);
        }
        let requests_content = "";
        requests.forEach(element => {
                requests_content += `
                <tr>
                        <td>
                                <div class="alignnames"><span class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">${element.itemname}</div>
                                </div>
                        </td>
                        <td><div class="inv-instock">${element.quantity}</div></td>
                        <td><div class="inv-lastupdated">${element.expecteddate}</div></td>
                </tr>
                `
        })
        document.querySelector(".itemrequest-content tbody").innerHTML = requests_content;

        if (!filter) {
                // updating the filter fields
                let filter_content = ""
                const filter_items = document.querySelector(".itemrequest-content .selector #filter-items");
                const filter_expected_date = document.querySelector(".itemrequest-content #filter-expected-date");
                filter_content = filter_items.innerHTML;
                requests = requests.map(e => e.itemname);
                requests = Array.from(new Set(requests));
                requests.forEach(element => { filter_content += `<option value="${element}">${element}</option>`; });
                filter_items.innerHTML = filter_content;
                const now = new Date();
                const local_datetime_value = `${
                String(now.getFullYear())}-${
                String(now.getMonth() + 1).padStart(2, "0")}-${
                String(now.getDate()).padStart(2, "0")}`;
                filter_expected_date.value = local_datetime_value;
        }
}

function generate_customer_purchase_report(customer_name, purchase_date) {
        const reports = read_reports();
        console.log(customer_name, purchase_date);
        document.querySelector("#customerpurchase-content").classList.remove("remove-all");
        document.querySelector("#customerpurchase-content #customername").innerText = customer_name;
        document.querySelector("#customerpurchase-content #purchasedate").innerText = purchase_date;
        let report = reports.filter(report => report.name == customer_name && report.date == purchase_date);
        // merge all bill items into one array
        report = report.map(e => e.bill);
        report = report.flat();
        report = report.map(e => ({
                itemname: e.itemname,
                quantity: e.quantity,
                total: e.total,
                itemimage: e.itemimage
        }));
        report = report.reduce((purchase_list, current) => {
                const existing = purchase_list.find(item => item.itemname == current.itemname);  
                if (existing) {
                        existing.quantity += current.quantity;
                        existing.total += current.total;
                } else {
                        purchase_list.push(current);
                }
                return purchase_list;
        }, []);
        let customer_purchase_content = "";
        report.forEach(element => {
                customer_purchase_content += `
                <tr>
                        <td>
                                <div class="alignnames"><span
                                                class="material-symbols-outlined item-symbol">local_cafe</span>
                                        <div class="bill-itemname">${element.itemname}</div>
                                </div>
                        </td>
                        <td><div class="inv-sold">${element.quantity}</div></td>
                        <td><div class="inv-price">${element.total.toFixed(2)}</div></td>
                </tr>
                `
        });
        // report.forEach(element => {
        //         element.bill.forEach(item => {
        //                 customer_purchase_content += `
        //                 <tr>
        //                         <td>
        //                                 <div class="alignnames"><span
        //                                                 class="material-symbols-outlined item-symbol">local_cafe</span>
        //                                         <div class="bill-itemname">${item.itemname}</div>
        //                                 </div>
        //                         </td>
        //                         <td><div class="inv-sold">${item.quantity}</div></td>
        //                         <td><div class="inv-price">${item.total.toFixed(2)}</div></td>
        //                 </tr>
        //                 `
        //         });
        // });
        document.querySelector("#customerpurchase-content tbody").innerHTML = customer_purchase_content;
}

        // get inventory (read)
function read_inventory() {
        return JSON.parse(localStorage.getItem("inventory"));
}
function read_bills() {
        return JSON.parse(localStorage.getItem("bills"));
}
function read_reports() {
        return JSON.parse(localStorage.getItem("reports"));
}
function read_requests() {
        return JSON.parse(localStorage.getItem("requests"));
}
// set inventory (write)
function write_inventory(inventory_content) {
        localStorage.inventory = JSON.stringify(inventory_content);
}
function write_bills(bills_content) {
        localStorage.bills = JSON.stringify(bills_content);
}
function write_reports(reports_content) {
        localStorage.reports = JSON.stringify(reports_content);
}
function write_requests(requests_content) {
        localStorage.requests = JSON.stringify(requests_content);
}
// read rows
function get_inventory_item(itemcode) {
        let inventory_content = read_inventory();
        return inventory_content.find((element) => element.itemcode == itemcode);
}
// read item count
function get_inventory_item_count(itemcode) {
        let inventory_content = read_inventory();
        return inventory_content.find((element) => element.itemcode == itemcode);
}
// custom toast
function show_alert(message_content,alert_type) {
        const popup = document.querySelector("#popup");
        popup.classList.remove("remove-all");
        const message = document.querySelector("#popup .popup-message");
        message.innerText = message_content;
        if (!alert_type) {
                popup.classList.add("a-inout");
                popup.addEventListener("animationend", () => {
                        popup.classList.remove("a-inout");
                })
        }
        else if (alert_type == "error") {
                popup.classList.add("popup-error");
                popup.classList.add("a-inout");
                popup.addEventListener("animationend", () => {
                        popup.classList.remove("a-inout");
                        popup.classList.remove("popup-error");
                })
        }
}



// Add items to inventory function (write)
function additems_inventory() {
        const additem_form_elements = document.querySelectorAll("#additem-form-itemcode, #additem-form-itemimage, #additem-form-category, #additem-form-unit, #additem-form-itemname, #additem-form-itemdesc, #additem-form-price, #additem-form-instock, #additem-form-supplier");
        if (additem_form_elements) {
                additem_form_array = Array.from(additem_form_elements, (element) => element.value);
                if (additem_form_array.includes("")) {
                        document.querySelector(".additem-content .additem-form").classList.add("additem-form-validate");
                        // alert("All Fields are Required!")
                        show_alert("All Fields are Required!", "error")
                } else {
                        let addinv = {
                                "itemcode": additem_form_array[0],
                                "itemimage": additem_form_array[1].replace("C:\\fakepath\\", "/assets/"),
                                "category": additem_form_array[2],
                                "unit": additem_form_array[3],
                                "itemname": additem_form_array[4],
                                "itemdesc": additem_form_array[5],
                                "price": parseFloat(additem_form_array[6]),
                                "instock": parseInt(additem_form_array[7]),
                                "oldstock": parseInt(additem_form_array[7]),
                                "supplier": additem_form_array[8]
                        }        
                        const inventory = read_inventory();
                        if (inventory.find(element => element.itemname == addinv.itemname)) {
                                show_alert("ItemName Already Exists", "error");
                        } else {
                                inventory.push(addinv);
                                write_inventory(inventory);
                                // alert("Item Added");
                                show_alert("Item Added");
                                document.querySelector("#additem-form-itemcode").value = generate_itemcode();
                        }
                };
        }
}
function add_requestitem() {
        
        const additem_form_elements = document.querySelectorAll(".requestitem-content #additem-form-itemname, .requestitem-content #additem-form-quantity, .requestitem-content #additem-form-exdate");
        if (additem_form_elements) {
                additem_form_array = Array.from(additem_form_elements, (element) => element.value);
                if (additem_form_array.includes("")) {
                        // additem_form_elements.forEach(e => e.classList.add("additem-form-validate"));
                        show_alert("All Fields are Required!", "error");
                } else {
                        let addinv = {
                                "ordercode": generate_ordercode(),
                                "itemname": additem_form_array[0],
                                "quantity": parseInt(additem_form_array[1]),
                                "expecteddate": additem_form_array[2]
                        }
                        const requests = read_requests();
                        requests.push(addinv);
                        write_requests(requests);
                        show_alert("Order Placed");
                };
        }
}
// Edit items from inevntory function (update)
function edititems_inventory(edit_item_itemcode) {
        const additem_form_elements = document.querySelectorAll("#additem-form-itemcode, #additem-form-itemimage, #additem-form-category, #additem-form-unit, #additem-form-itemname, #additem-form-itemdesc, #additem-form-price, #additem-form-instock, #additem-form-supplier");
        if (additem_form_elements) {
                additem_form_array = Array.from(additem_form_elements, (element) => element.value);
                if (additem_form_array.filter((element, index) => (index != 1)).includes("")) {
                        document.querySelector(".additem-content .additem-form").classList.add("additem-form-validate");
                        // alert("All Fields are Required!");
                        show_alert("All Fields are Required!", "error");
                } else {
                        let addinv = get_inventory_item(edit_item_itemcode);
                        let temp_invupdate = {
                                "itemcode": edit_item_itemcode,
                                "itemimage": (additem_form_array[1]) ? additem_form_array[1].replace("C:\\fakepath\\", "/assets/") : addinv.itemimage,
                                "category": additem_form_array[2],
                                "unit": additem_form_array[3],
                                "itemname": additem_form_array[4],
                                "itemdesc": additem_form_array[5],
                                "price": parseFloat(additem_form_array[6]),
                                "instock": parseInt(additem_form_array[7]),
                                "oldstock": parseInt(additem_form_array[7]),
                                "supplier": additem_form_array[8]
                        }
                        addinv = temp_invupdate;
                        const manage_inventory = read_inventory();
                        const filtered_inventory = manage_inventory.filter((element) => element.itemcode != edit_item_itemcode);
                        if (filtered_inventory.find(e => e.itemname == addinv.itemname)) {
                                show_alert("ItemName Already Exists", "error");
                        } else {
                                filtered_inventory.push(addinv);
                                filtered_inventory.sort((a, b) => Number.parseInt(a.itemcode.replace("ITM-", "")) - Number.parseInt(b.itemcode.replace("ITM-", "")))
                                write_inventory(filtered_inventory);
                                // alert("Inventory Updated");
                                show_alert("Inventory Updated");
                                document.querySelector("#additem-form-itemcode").value = generate_itemcode();
                        }
                };
        }
}
// Delete items from inevntory function (delete)
function deleteitems_inventory(delete_item_itemcode) {
        const inventory_content = read_inventory();
        const deleted_inventory = inventory_content.filter((element) => element.itemcode != delete_item_itemcode);
        write_inventory(deleted_inventory);
        show_alert("Item Deleted");
}