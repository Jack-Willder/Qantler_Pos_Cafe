const billing = `<div class="content">
<div class="card one">
        <div class="grid-total">
                <div class="billtitle">Current Bill<span
                                class="material-symbols-outlined more-symbol">more_vert</span></div>
                <div class="totalamount">
                        <div class="aligntotal">
                                <div class="amounttitle">Total Amount</div>
                                <div class="amount">$146.30</div>
                        </div>
                </div>
        </div>
</div>
<div class="search card two grid-search">
        <input type="text" class="bar" name="search" placeholder="Search menu items...">
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
                        <input type="text" placeholder="Scan / Enter item Number" class="itemnumber-input cinput" name="itemnumber">
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
        <div class="newbill">
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
                <div class="restore">                                <div class="tdel">
                        <span class="material-symbols-outlined transaction-symbol">
                                restart_alt
                        </span>
                        <div class="tdel-name">Restore</div>
                </div></div>
                <div class="mainmenu">                                <div class="tdel">
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

const additem = `<div class="additem-content">
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
                                                <select name="opg-select" id="opg-select" class="opg-select">
                                                        <option value="opg-all">All Items</option>
                                                </select>
                                        </div> 
                                </div>
                                <div class="align-option-group">
                                        <div class="option-group-name">Quantity</div>
                                        <input class="opg-date-select" type="number" value="50"></input>
                                </div>
                                <div class="align-option-group">
                                        <div class="option-group-name">Expected Date</div>
                                        <input class="opg-date-select" type="date" value="2024-05-20"></input>
                                </div>
                                <div class="t-bfilter-group">
                                        <div class="t-bfilter option-sudo-select">
                                                <span class="material-symbols-outlined calendar-symbol">
                                                        add_circle
                                                </span>
                                                <span class="datename">Add Item</span>
                                        </div>
                                        <div class="t-bfilter">
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
                                        <div class="tabletitle">Request List</div>
                                        <div class="tableitems">Total 128 items added</div>
                                </div>
                                <div class="tbutton-group">
                                        <div class="align-tbutton-group">
                                                <div class="t-bfilter option-select">
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

const report = `<div class="inventory-content">
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
                                                <select name="opg-select" id="opg-select" class="opg-select">
                                                        <option value="opg-all">All Status</option>
                                                </select>
                                        </div> 
                                </div>
                                <div class="align-option-group">
                                        <div class="option-group-name">Date From</div>
                                        <input class="opg-date-select" type="date" value="2024-05-20"></input>
                                </div>
                                <div class="align-option-group">
                                        <div class="option-group-name">Date To</div>
                                        <input class="opg-date-select" type="date" value="2024-05-20"></input>
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
                                <table>
                                        <thead>
                                                <tr>
                                                        <td>Item</td>
                                                        <td>Category</td>
                                                        <td>Price</td>
                                                        <td>Unit</td>
                                                        <td>Purchased</td>
                                                        <td>Sold</td>
                                                        <td>In Stock</td>
                                                        <td>Status</td>
                                                        <td>Last Updated</td>
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
                                                                                src="/assets/iced-tea.png"
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
            "supplier": "Local"
        },
        {
            "itemcode": "ITM-000007",
            "itemimage": "/assets/iced-coffee.png",
            "category": "Beverage",
            "unit": "Glass",
            "itemname": "Iced Coffee",
            "itemdesc": "Iced Coffee",
            "price": 13.5,
            "instock": 10,
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
            "supplier": "Local"
        }
];


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
                                generate_billing_items_list(read_inventory());
                                generate_billing_checkout_list(read_inventory());
                        }
                        if (target == "inventory") {
                                content.innerHTML = inventory;
                                generate_inventory_rows(read_inventory());
                        };
                        if (target == "request") content.innerHTML = request;
                        if (target == "report") content.innerHTML = report;
                        if (target == "settings") content.innerHTML = settings;
                        if (target == "users") content.innerHTML = users;
                        // canceladditems = document.querySelectorAll("#additem")
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
                        };
                        if (target == "additem") {
                                content.innerHTML = additem;
                                document.querySelector(".additem-itemcode-input").value = generate_itemcode();
                        };
                        if (target == "request") {
                                content.innerHTML = request;
                                options[1].classList.remove("option-select");
                                options[2].classList.add("option-select");
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
                
                // Table actions
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
                        generate_billing_items_list(read_inventory(), billing_category.getAttribute("data-category"))
                };

                // Add bills to the checkout table based on item clicks
                const billing_item = e.target.closest(".option-item")
                if (billing_item) generate_billing_checkout_list(read_inventory(), billing_item.getAttribute("data-itemcode"));
        })
}
option_activate()


function manage_localstorage() {
        let inventory_table = false;
        let bills_table = false;
        if (!localStorage.getItem("inventory")) {
                write_inventory(init_inventory);
                inventory_table == true;
        }
        if (localStorage.getItem("inventory")) {
                write_bills([]);
                bills_table == true;
        }
        if (inventory_table || bills_table) alert("Table Initialised");
}
manage_localstorage()


function generate_itemcode() {
        let inventory_content = read_inventory();
        let lastinv_number = inventory_content[inventory_content.length - 1].itemcode;
        
        let olditemcode = Number.parseInt(lastinv_number.replace("ITM-", ""));
        olditemcode = olditemcode + 1;
        olditemcode = "" + olditemcode;
        
        let newitemcode = olditemcode;
        for (let index = 0; index < (6 - olditemcode.length); index++) {
                newitemcode = "0" + newitemcode;
        }
        newitemcode = "ITM-" + newitemcode;
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
        console.log(typeof inventory_sample);
        console.log(field, ":", toggle[field]);

        // if (target_data == "sort-table-by-name") {
        //         if (toggle.itemname == 0) {
        //                 inventory.sort((a, b) => (a.itemname > b.itemname) ? 1 : (b.itemname > a.itemname) ? -1 : 0);
        //                 toggle.itemname = 1
        //         } else {
        //                 inventory.sort((a, b) => (a.itemname < b.itemname) ? 1 : (b.itemname < a.itemname) ? -1 : 0);
        //                 toggle.itemname = 0
        //         }
        // }
        // if (target_data == "sort-table-by-category") {
        //         if (toggle.category == 0) {
        //                 inventory.sort((a, b) => (a.category > b.category) ? 1 : (b.category > a.category) ? -1 : 0);
        //                 toggle.category = 1
        //         } else {
        //                 inventory.sort((a, b) => (a.category < b.category) ? 1 : (b.category < a.category) ? -1 : 0);
        //                 toggle.category = 0
        //         }
        // }
        // if (target_data == "sort-table-by-price") {
        //         if (toggle.price == 0) {
        //                 inventory.sort((a, b) => a.price - b.price);
        //                 toggle.price = 1
        //         } else {
        //                 inventory.sort((a, b) => b.price - a.price);
        //                 toggle.price = 0
        //         }
        // }
        // if (target_data == "sort-table-by-unit") {
        //         if (toggle.unit == 0) {
        //                 inventory.sort((a, b) => (a.unit > b.unit) ? 1 : (b.unit > a.unit) ? -1 : 0);
        //                 toggle.unit = 1
        //         } else {
        //                 inventory.sort((a, b) => (a.unit < b.unit) ? 1 : (b.unit < a.unit) ? -1 : 0);
        //                 toggle.unit = 0
        //         }
        // }
        // if (target_data == "sort-table-by-purchased") {
        //         if (toggle.purchased == 0) {
        //                 inventory.sort((a, b) => a.price - b.price);
        //                 toggle.purchased = 1
        //         } else {
        //                 inventory.sort((a, b) => b.price - a.price);
        //                 toggle.purchased = 0
        //         }
        // }
        // if (target_data == "sort-table-by-sold") {
        //         if (toggle.sold == 0) {
        //                 inventory.sort((a, b) => a.price - b.price);
        //                 toggle.sold = 1
        //         } else {
        //                 inventory.sort((a, b) => b.price - a.price);
        //                 toggle.sold = 0
        //         }
        // }
        // if (target_data == "sort-table-by-instock") {
        //         if (toggle.instock == 0) {
        //                 inventory.sort((a, b) => a.instock - b.instock);
        //                 toggle.instock = 1
        //         } else {
        //                 inventory.sort((a, b) => b.instock - a.instock);
        //                 toggle.instock = 0
        //         }
        // }
        // if (target_data == "sort-table-by-status") {
        //         if (toggle.status == 0) {
        //                 inventory.sort((a, b) => a.price - b.price);
        //                 toggle.status = 1
        //         } else {
        //                 inventory.sort((a, b) => b.price - a.price);
        //                 toggle.status = 0
        //         }
        // }
        // if (target_data == "sort-table-by-lastupdated") {
        //         if (toggle.lastupdated == 0) {
        //                 inventory.sort((a, b) => a.price - b.price);
        //                 toggle.lastupdated = 1
        //         } else {
        //                 inventory.sort((a, b) => b.price - a.price);
        //                 toggle.lastupdated = 0
        //         }
        // }
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


function generate_billing_items_list(inventory, category) {
        const category_list = {
                "Beverage" : "Beverage",
                "Steamed Bun"  : "Steamed Bun",
                "Steamed Timsum"  : "Steamed Timsum",
                "Deep Fry Timsum" : "Deep Fry Timsum",
                "Bake" : "Bake",
                "Noodle/Dumplings" : "Noodle/Dumplings",
                "Porridge"  : "Porridge"
        }
        if (category_list[category]) inventory = inventory.filter((element) => element.category == category_list[category]);
        // if (category == "Beverage") inventory = inventory.filter((element) => element.category == "Beverage");
        // if (category == "Steamed Bun") inventory = inventory.filter((element) => element.category == "Steamed Bun");
        // if (category == "Steamed Timsum") inventory = inventory.filter((element) => element.category == "Steamed Timsum");
        // if (category == "Deep Fry Timsum") inventory = inventory.filter((element) => element.category == "Deep Fry Timsum");
        // if (category == "Bake") inventory = inventory.filter((element) => element.category == "Bake");
        // if (category == "Noodle/Dumplings") inventory = inventory.filter((element) => element.category == "Noodle/Dumplings");
        // if (category == "Porridge") inventory = inventory.filter((element) => element.category == "Porridge");
        const billing_items_list = document.querySelector(".card.five.grid-items .items-options");
        let billing_items_list_content = "";
        inventory.forEach(element => {
                billing_items_list_content += `
                <div class="option-item option-item-select" data-itemcode="${element.itemcode}">
                        <img src="${element.itemimage}"
                                alt="${element.itemname}" srcset="" name="item"
                                class="item-img">
                        <span class="opname">${element.itemname}</span>
                        <span class="opname-chinese">咖啡黑</span>
                </div>`; 
        });
        billing_items_list.innerHTML = billing_items_list_content;
}
generate_billing_items_list(read_inventory());


function generate_billing_checkout_list(inventory, itemcode) {
        billing_item = inventory.find((element) => element.itemcode == itemcode);
        const bills = read_bills();
        if (itemcode) {
                const existing = bills.find(element => element.itemcode == itemcode);
                if (existing) {
                        existing.quantity += 1;
                } else {
                        bills.push({
                                "itemcode": billing_item.itemcode,
                                "itemname": billing_item.itemname,
                                "quantity": 1,
                                "itemimage": billing_item.itemimage,
                                "price": billing_item.price
                        });
                }
        }
        write_bills(bills);
        billing_checkout_list = document.querySelector(".card.three.grid-bill table tbody");
        let checkout_content = "";
        bills.forEach(element => {
                checkout_content += `<tr>
                <td>
                        <div class="alignnames">
                                <img src="${element.itemimage}" alt="${element.itemname}" srcset="" name="item" class="item-symbol">
                                <div class="bill-itemname">${element.itemname}</div>
                        </div>
                </td>
                <td><div class="aligncount"><input type="text" placeholder="2" class="bill-item-count" name="count" value="${element.quantity}"></div></td>
                <td><div class="bill-itemname">$${element.price}</div></td>
                <td><div class="bill-itemname">$${(element.quantity * element.price).toFixed(2)}</div></td>
                <td><span class="material-symbols-outlined delete-symbol" data-checkout-itemcode="${element.itemcode}" >delete</span></td>
                </tr>`;
        });
        billing_checkout_list.innerHTML = checkout_content;
        // document.querySelector(".card.three.grid-bill table tbody").innerHTML = checkout_content;
}


function read_bills() {
        return JSON.parse(localStorage.getItem("bills"));
}

function write_bills(bills_content) {
        localStorage.bills = JSON.stringify(bills_content);
}


// get inventory (read)
function read_inventory() {
        return JSON.parse(localStorage.getItem("inventory"));
}

// set inventory (write)
function write_inventory(inventory_content) {
        localStorage.inventory = JSON.stringify(inventory_content);
}

// read rows
function get_inventory_item(itemcode) {
        let inventory_content = read_inventory();
        return inventory_content.find((element) => element.itemcode == itemcode);
}






// Add items to inventory function (write)
function additems_inventory() {
        const additem_form_elements = document.querySelectorAll("#additem-form-itemcode, #additem-form-itemimage, #additem-form-category, #additem-form-unit, #additem-form-itemname, #additem-form-itemdesc, #additem-form-price, #additem-form-instock, #additem-form-supplier");
        if (additem_form_elements) {
                additem_form_array = Array.from(additem_form_elements, (elem) => elem.value);
                if (additem_form_array.includes("")) {
                        alert("All Fields are Required!")
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
                                "supplier": additem_form_array[8]
                        }        
                        const manage_inventory = read_inventory();
                        manage_inventory.push(addinv);
                        write_inventory(manage_inventory);
                        alert("Item Added");
                        document.querySelector("#additem-form-itemcode").value = generate_itemcode();
                };
        }
}


// Edit items from inevntory function (update)
function edititems_inventory(edit_item_itemcode) {
        const additem_form_elements = document.querySelectorAll("#additem-form-itemcode, #additem-form-itemimage, #additem-form-category, #additem-form-unit, #additem-form-itemname, #additem-form-itemdesc, #additem-form-price, #additem-form-instock, #additem-form-supplier");
        if (additem_form_elements) {
                additem_form_array = Array.from(additem_form_elements, (element) => element.value);
                if (additem_form_array.filter((element, index) => {if (index != 1) element}).includes("")) {
                        alert("All Fields are Required!")
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
                                "supplier": additem_form_array[8]
                        }
                        addinv = temp_invupdate;
                        const manage_inventory = read_inventory();
                        const filtered_inventory = manage_inventory.filter((element) => element.itemcode != edit_item_itemcode);
                        filtered_inventory.push(addinv);
                        filtered_inventory.sort((a, b) => Number.parseInt(a.itemcode.replace("ITM-", "")) - Number.parseInt(b.itemcode.replace("ITM-", "")))
                        write_inventory(filtered_inventory);
                        alert("Inventory Updated");
                        document.querySelector("#additem-form-itemcode").value = generate_itemcode();
                };
        }
}
// function edititems_inventory(edit_item_itemcode) {
//         const additem_form_elements = document.querySelectorAll("#additem-form-itemcode, #additem-form-itemimage, #additem-form-category, #additem-form-unit, #additem-form-itemname, #additem-form-itemdesc, #additem-form-price, #additem-form-instock, #additem-form-supplier");
//         if (additem_form_elements) {
//                 additem_form_array = Array.from(additem_form_elements, (element) => element.value);
//                 if (additem_form_array.filter((element, index) => {if (index != 1) element}).includes("")) {
//                         alert("All Fields are Required!")
//                 } else {
//                         let addinv = get_inventory_item(edit_item_itemcode);
//                         let temp_invupdate = {
//                                 "itemcode": edit_item_itemcode,
//                                 "itemimage": (additem_form_array[1]) ? additem_form_array[1].replace("C:\\fakepath\\", "/assets/") : addinv.itemimage,
//                                 "category": additem_form_array[2],
//                                 "unit": additem_form_array[3],
//                                 "itemname": additem_form_array[4],
//                                 "itemdesc": additem_form_array[5],
//                                 "price": parseFloat(additem_form_array[6]),
//                                 "instock": parseInt(additem_form_array[7]),
//                                 "supplier": additem_form_array[8]
//                         }
//                         addinv = temp_invupdate;
//                         const manage_inventory = read_inventory();
//                         const filtered_inventory = manage_inventory.filter((element) => element.itemcode != edit_item_itemcode);
//                         filtered_inventory.push(addinv);
//                         filtered_inventory.sort((a, b) => Number.parseInt(a.itemcode.replace("ITM-", "")) - Number.parseInt(b.itemcode.replace("ITM-", "")))
//                         write_inventory(filtered_inventory);
//                         alert("Inventory Updated");
//                         document.querySelector("#additem-form-itemcode").value = generate_itemcode();
//                 };
//         }
// }


// Delete items from inevntory function (delete)
function deleteitems_inventory(delete_item_itemcode) {
        const inventory_content = read_inventory();
        const deleted_inventory = inventory_content.filter((element) => element.itemcode != delete_item_itemcode);
        write_inventory(deleted_inventory);
        alert("Item Deleted");
}