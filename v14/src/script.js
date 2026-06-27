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
                                                                        src="iced-coffee.png"
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
                                                                        src="iced-coffee.png"
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
                                                                        src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
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
                                <div class="option-type option-select">
                                        <span class="material-symbols-outlined symbol">
                                                local_cafe
                                        </span>
                                        <span class="opname">Beverage</span>
                                </div>
                                <div class="separator"></div>
                                <div class="option-type">
                                        <span class="material-symbols-outlined symbol">
                                                bakery_dining
                                        </span>
                                        <span class="opname">Steamed<br> Bun</span>
                                </div>
                                <div class="separator"></div>
                                <div class="option-type">
                                        <span class="material-symbols-outlined symbol">
                                                onsen
                                        </span>
                                        <span class="opname">Steamed<br> Timsum</span>
                                </div>
                                <div class="separator"></div>
                                <div class="option-type">
                                        <span class="material-symbols-outlined symbol">
                                                change_history
                                        </span>
                                        <span class="opname">Deep Fry<br> Timsum</span>
                                </div>
                                <div class="separator"></div>
                                <div class="option-type">
                                        <span class="material-symbols-outlined symbol">
                                                oven
                                        </span>
                                        <span class="opname">Bake</span>
                                </div>
                                <div class="separator"></div>
                                <div class="option-type">
                                        <span class="material-symbols-outlined symbol">
                                                ramen_dining
                                        </span>
                                        <span class="opname">Noodle/<br>
                                                Dumplings</span>
                                </div>
                                <div class="separator"></div>
                                <div class="option-type">
                                        <span class="material-symbols-outlined symbol">
                                                soup_kitchen
                                        </span>
                                        <span class="opname">Porridge</span>
                                </div>
                                <div class="separator"></div>
                                <div class="option-type">
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
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Coffee Black</span>
                                        <span class="opname-chinese">咖啡黑</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/023/438/448/small/espresso-coffee-cutout-free-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea Black</span>
                                        <span class="opname-chinese">茶黑</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/previews/020/482/048/non_2x/chrysanthemum-tea-in-a-glass-isolated-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Chrysanthemum Tea</span>
                                        <span class="opname-chinese">菊花茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/023/742/327/small/latte-coffee-isolated-illustration-ai-generative-free-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Coffee</span>
                                        <span class="opname-chinese">咖啡</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://png.pngtree.com/png-vector/20250123/ourmid/pngtree-steaming-tea-in-a-transparent-glass-mug-with-subtle-reflections-png-image_15314690.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea</span>
                                        <span class="opname-chinese">茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/058/988/343/small/tea-set-with-teapot-and-cup-on-black-background-cut-out-transparent-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Chinese Tea</span>
                                        <span class="opname-chinese">中国茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/previews/024/984/823/non_2x/illustration-ice-coffee-in-the-glass-cup-fresh-coffee-ice-pro-transparent-background-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Coffee Black</span>
                                        <span class="opname-chinese">咖啡黑</span>
                                </div>
                                <div class="option-item">
                                        <img src="iced-tea-black.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Tea Black</span>
                                        <span class="opname-chinese">茶黑</span>
                                </div>



                                
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">soya Milk</span>
                                        <span class="opname-chinese">牛奶</span>
                                </div>
                                <div class="option-item">
                                        <img src="iced-coffee.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Coffee</span>
                                        <span class="opname-chinese">冰咖啡</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/previews/050/610/328/non_2x/refreshing-iced-tea-in-a-clear-glass-isolated-on-transparent-background-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Tea</span>
                                        <span class="opname-chinese">冰茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://png.pngtree.com/png-clipart/20250228/original/pngtree-takjil-ice-black-grass-jelly-for-iftar-ramadhan-kareem-png-image_20529932.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Grass Jelly</span>
                                        <span class="opname-chinese">仙草</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/059/599/181/small/cup-of-black-coffee-isolated-cut-out-transparent-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Coffee C</span>
                                        <span class="opname-chinese">咖啡C</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea C</span>
                                        <span class="opname-chinese">茶C</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-tea-cup-image-png-image_14722832.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Black & White</span>
                                        <span class="opname-chinese">黑, 白</span>
                                </div>
                                <div class="option-item">
                                        <img src="milo.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Milo</span>
                                        <span class="opname-chinese">米露</span>
                                </div>
                                <div class="option-item">
                                        <img src="iced-milo.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Milo</span>
                                        <span class="opname-chinese">冰 Milo</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/047/420/976/small_2x/trendy-water-caps-and-bottles-elevate-your-hydration-game-free-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Takeaway (Water)</span>
                                        <span class="opname-chinese">外带 (水)</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/016/349/669/small/cup-of-tea-with-fresh-tea-leaves-on-saucer-transparant-background-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea</span>
                                        <span class="opname-chinese">茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/058/988/343/small/tea-set-with-teapot-and-cup-on-black-background-cut-out-transparent-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Chinese Tea</span>
                                        <span class="opname-chinese">中国茶</span>
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
                                                <select name="opg-select" id="opg-select" class="opg-select">
                                                        <option value="opg-all">All Categories</option>
                                                </select>
                                        </div> 
                                </div>
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
                                        <div class="option-group-name">Status</div>
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
                                                                                src="iced-coffee.png"
                                                                                alt="coffee" srcset="" name="item"
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
                                                                                src="iced-coffee.png"
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
                                                                <input type="number" class="additem-instock-input" placeholder="Enter stock quantity"  id="additem-form-instock" min="1" max="1000" required>
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
                                                        <td>Price</td>
                                                        <td>Unit</td>
                                                        <td>Purchased</td>
                                                        <td>Sold</td>
                                                        <td>In Stock</td>
                                                        <td>Status</td>
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
                                                        <td><div class="inv-category">50</div></td>
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
                                                                                src="iced-coffee.png"
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
                                                                                src="iced-coffee.png"
                                                                                alt="coffee" srcset="" name="item"
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
                                                                                src="iced-coffee.png"
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
                "itemimage": "soyamilk.png",
                "category": "Beverage",
                "unit": "Cup",
                "itemname": "Soya Milk",
                "itemdesc": "Soya Milk",
                "price": "3.00",
                "instock": "52",
                "supplier": "Local"
        },
        {
                "itemcode": "ITM-000002",
                "itemimage": "teac.png",
                "category": "Beverage",
                "unit": "Cup",
                "itemname": "Tea C",
                "itemdesc": "Tea C",
                "price": "4.70",
                "instock": "50",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000003",
                "itemimage": "steamedtimsum.png",
                "category": "Steamed Timsum",
                "unit": "Pcs",
                "itemname": "Steamed Timsum",
                "itemdesc": "Steamed Timsum",
                "price": "7.30",
                "instock": "40",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000004",
                "itemimage": "porridge.png",
                "category": "Porridge",
                "unit": "Bowl",
                "itemname": "Porridge",
                "itemdesc": "Porridge",
                "price": "11.20",
                "instock": "10",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000005",
                "itemimage": "icedtea.png",
                "category": "Beverage",
                "unit": "Glass",
                "itemname": "Iced Coffee",
                "itemdesc": "Iced Coffee",
                "price": "11.70",
                "instock": "10",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000006",
                "itemimage": "dumplings.png",
                "category": "Noodle/Dumplings",
                "unit": "Pcs",
                "itemname": "Dumplings",
                "itemdesc": "Dumplings",
                "price": "16.10",
                "instock": "10",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000007",
                "itemimage": "icedcoffee.png",
                "category": "Beverage",
                "unit": "Glass",
                "itemname": "Iced Coffee",
                "itemdesc": "Iced Coffee",
                "price": "13.50",
                "instock": "10",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000008",
                "itemimage": "coffeec.png",
                "category": "Beverage",
                "unit": "Cup",
                "itemname": "Coffee C",
                "itemdesc": "Coffee C",
                "price": "16.50",
                "instock": "10",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000009",
                "itemimage": "milo.png",
                "category": "Beverage",
                "unit": "Cup",
                "itemname": "Milo",
                "itemdesc": "Milo",
                "price": "15.00",
                "instock": "15",
                "supplier": "Local",
        },
        {
                "itemcode": "ITM-000010",
                "itemimage": "chinesetea.png",
                "category": "Beverage",
                "unit": "Cup",
                "itemname": "Chinese Tea",
                "itemdesc": "Chinese Tea",
                "price": "4.20",
                "instock": "30",
                "supplier": "Local",
        }
];


function option_activate() {
        let options = document.querySelectorAll(".option");
        let content = document.querySelector(".content-area");

        // page navigation
        options.forEach(element => {
        element.addEventListener("click", () => {
                options.forEach(elm => elm.classList.remove("option-select"));
                element.classList.add("option-select");
                let target = element.getAttribute("data-target");
                if(target == "billing") content.innerHTML = billing;
                if (target == "inventory") {
                        content.innerHTML = inventory;
                        generate_inventory_rows();
                };
                // if (target == "additem") content.innerHTML = additem;
                if (target == "request") content.innerHTML = request;
                if (target == "report") content.innerHTML = report;
                if (target == "settings") content.innerHTML = settings;
                if (target == "users") content.innerHTML = users;
                canceladditems = document.querySelectorAll("#additem")
        })
    });

        document.addEventListener("click", (e) => {
                // page navigation
                const handleadditems = e.target.closest("#additem");
                if (handleadditems) {
                        let target = handleadditems.getAttribute("data-target");
                        if (target == "inventory") {
                                content.innerHTML = inventory;
                                generate_inventory_rows();
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

                //Table actions
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
        })
}
option_activate()


function manage_localstorage() {
        if (!localStorage.getItem("inventory")) {
                localStorage.inventory = JSON.stringify(init_inventory);
                const test_inv = JSON.parse(localStorage.getItem("inventory"));
                console.table(test_inv);
                alert("Table Initialised");
        }
}
manage_localstorage()


function generate_itemcode() {
        let inventory_content = JSON.parse(localStorage.getItem("inventory"));
        let lastinv_number = inventory_content[inventory_content.length - 1].itemcode;
        let newitemcode = "";
        for (let index = lastinv_number.length - 1; index >= 0; index--) {
                newitemcode = lastinv_number[index] + newitemcode;
                if (lastinv_number[index] == 0) break;
                if (lastinv_number[index] == "-") break;
        }
        newitemcode = Number.parseInt(newitemcode);
        newitemcode = "" + newitemcode;
        for (let index = 0; index < (6 - newitemcode.length); index++) {
                newitemcode = "0" + newitemcode;
        }
        newitemcode = "ITM-" + newitemcode;
        return newitemcode;


        // let newitemnumber = JSON.parse(localStorage.getItem("inventory")).length - 1
        // let newitemnumberstring = "" + newitemnumber;
        // let newitemcode = newitemnumberstring;
        // for (let index = 0; index < (6 - newitemnumberstring.length); index++) {
        //         newitemcode = "0" + newitemcode;
        // }
        // newitemcode = "ITM-" + newitemcode;
        // return newitemcode;
}


function generate_inventory_rows() {
        const inventory = JSON.parse(localStorage.getItem("inventory"));
        let inventory_content = "";
        inventory.forEach(element => {
                let inventory_row = ""
                inventory_row += `<tr id="inventory-table-rows" data-itemcode="${element.itemcode}">
                        <td>
                                <div class="alignnames"><img
                                                src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                alt="${element.itemname}" class="item-symbol">
                                        <div class="bill-itemname">${element.itemname}</div>
                                </div>
                        </td>
                        <td><div class="inv-category">${element.category}</div></td>
                        <td><div class="inv-price">$${element.price}</div></td>
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

// insert rows
function add_inventory(addinv) {
        const manage_inventory = JSON.parse(localStorage.getItem("inventory"));
        manage_inventory.push(addinv);
        localStorage.inventory = JSON.stringify(manage_inventory);
        alert("Inventory Updated");
}

// read rows
function get_inventory_item(itemcode) {
        let inventory_content = JSON.parse(localStorage.getItem("inventory"));
        return inventory_content.find((element) => element.itemcode == itemcode);
}







// Add items to inevntory function
function additems_inventory() {
        const additem_form_elements = document.querySelectorAll("#additem-form-itemcode, #additem-form-itemimage, #additem-form-category, #additem-form-unit, #additem-form-itemname, #additem-form-itemdesc, #additem-form-price, #additem-form-instock, #additem-form-supplier");
        if (additem_form_elements) {
                additem_form_array = Array.from(additem_form_elements, (elem) => elem.value);
                if (additem_form_array.includes("")) {
                        alert("All Fields are Required!")
                } else {
                        let addinv = {
                                "itemcode": additem_form_array[0],
                                "itemimage": additem_form_array[1],
                                "category": additem_form_array[2],
                                "unit": additem_form_array[3],
                                "itemname": additem_form_array[4],
                                "itemdesc": additem_form_array[5],
                                "price": additem_form_array[6],
                                "instock": additem_form_array[7],
                                "supplier": additem_form_array[8]
                        }
                        add_inventory(addinv);
                        document.querySelector("#additem-form-itemcode").value = generate_itemcode();
                };
        }
}


// Edit items from inevntory function
function edititems_inventory(edit_item_itemcode) {
        const additem_form_elements = document.querySelectorAll("#additem-form-itemcode, #additem-form-itemimage, #additem-form-category, #additem-form-unit, #additem-form-itemname, #additem-form-itemdesc, #additem-form-price, #additem-form-instock, #additem-form-supplier");
        if (additem_form_elements) {
                additem_form_array = Array.from(additem_form_elements, (elem) => elem.value);
                if (additem_form_array.includes("")) {
                        alert("All Fields are Required!")
                } else {
                        let addinv = {
                                "itemcode": edit_item_itemcode,
                                "itemimage": additem_form_array[1],
                                "category": additem_form_array[2],
                                "unit": additem_form_array[3],
                                "itemname": additem_form_array[4],
                                "itemdesc": additem_form_array[5],
                                "price": additem_form_array[6],
                                "instock": additem_form_array[7],
                                "supplier": additem_form_array[8]
                        }
                        const manage_inventory = JSON.parse(localStorage.getItem("inventory"));
                        const filtered_inventory = manage_inventory.filter((element) => element.itemcode != edit_item_itemcode);
                        filtered_inventory.push(addinv);
                        localStorage.inventory = JSON.stringify(filtered_inventory);
                        alert("Inventory Updated");
                        document.querySelector("#additem-form-itemcode").value = generate_itemcode();
                };
        }
}


// Delete items from inevntory function
function deleteitems_inventory(delete_item_itemcode) {
        const inventory_content = JSON.parse(localStorage.getItem("inventory"));
        const deleted_inventory = inventory_content.filter((element) => element.itemcode != delete_item_itemcode);
        localStorage.inventory = JSON.stringify(deleted_inventory);
        alert("Item Deleted");

}