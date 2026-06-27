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
                                                <div class="t-bfilter option-select">
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
                                                                <input type="text" class="additem-itemcode-input" placeholder="ITM-000129">
                                                                <div class="additem-desc-text">Auto-generated</div>
                                                        </div>
                                                        <div class="additem-itemimage">
                                                                <div class="additem-title-text">Item Image</div>
                                                                <!-- <input type="file" accept="image/png, image/jpg, image/jpeg" placeholder="Click to upload or drag and drop"> -->
                                                                <div class="additem-itemimage-input">
                                                                        <span class="material-symbols-outlined cloud-symbol">
                                                                                cloud_upload
                                                                        </span>
                                                                        <div class="additem-fileupload">
                                                                                <div class="additem-fileupload-title">Click to upload or drag and drop</div>
                                                                                <div class="additem-fileupload-desc">PNG, JPG or WEBP (Max. 2MB)</div>
                                                                        </div>
                                                                </div>
                                                                <div class="additem-desc-text hide-text">Auto-Generated</div>
                                                        </div>
                                                        <div class="additem-category">
                                                                <div class="additem-title-text additem-important">Category</div>
                                                                <select name="category" id="additem-category-option">
                                                                        <option value="select category">Select Category</option>
                                                                </select>
                                                                <div class="additem-desc-text hide-text">Auto-generated</div>
                                                        </div>
                                                        <div class="additem-unit">
                                                                <div class="additem-title-text additem-important">Unit</div>
                                                                <select name="category" id="additem-unit-option">
                                                                        <option value="select category">Select Unit</option>
                                                                </select>
                                                                <div class="additem-desc-text hide-text">Auto-generated</div>
                                                        </div>
                                                        <div class="additem-status">
                                                                <div class="additem-title-text">Status</div>
                                                                <select name="category" id="additem-status-option">
                                                                        <option value="instock">In Stock</option>
                                                                </select>
                                                                <div class="additem-desc-text">Status is auto-populated based on In Stock quantity.</div>
                                                        </div>
                                                </div>
                                                <div class="additem-card-right">
                                                        <div class="additem-itemname">
                                                                <div class="additem-title-text  additem-important">Item Name</div>
                                                                <input type="text" class="additem-itemname-input" placeholder="Enter item name">
                                                                <div class="additem-desc-text hide-text">Auto-generated</div>
                                                        </div>
                                                        <div class="additem-itemdesc">
                                                                <div class="additem-title-text">Item Description</div>
                                                                <textarea name="additem-itemdesc" id="additem-itemdesc" class="additem-itemdesc-input" placeholder="Enter item description"></textarea>
                                                                <div class="additem-desc-text hide-text">Auto-generated</div>
                                                        </div>
                                                        <div class="additem-price">
                                                                <div class="additem-title-text additem-important">Price</div>
                                                                <input type="text" class="additem-price-input" placeholder="Enter price">
                                                                <div class="additem-desc-text hide-text">Auto-generated</div>
                                                        </div>
                                                        <div class="additem-instock">
                                                                <div class="additem-title-text additem-important">In Stock</div>
                                                                <input type="text" class="additem-instock-input" placeholder="Enter stock quantity">
                                                                <div class="additem-desc-text hide-text">Auto-generated</div>
                                                        </div>
                                                        <div class="additem-supplier">
                                                                <div class="additem-title-text">Supplier</div>
                                                                <select name="additem-supplier-option" id="additem-supplier-option">
                                                                        <option value="supplier">Select supplier</option>
                                                                </select>
                                                                <div class="additem-desc-text hide-text">Status is auto-populated based on In Stock quantity.</div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="additem-baction-group">
                                                <div class="additem-baction" id="additem" data-target="inventory">
                                                        <span class="datename">Cancel</span>
                                                </div>
                                                <div class="additem-baction option-select">
                                                        <span class="material-symbols-outlined save-symbol">
                                                                save
                                                        </span>
                                                        <span class="datename">Save</span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>`;

const request = `
<div class="card one grid-one">
        <div class="mainmenu">
        <span class="material-symbols-outlined symbol">
                home
        </span>
        <div class="opname">Item Request</div>
        </div>
</div>
`;
const report = `
<div class="card one grid-one">
        <div class="mainmenu">
        <span class="material-symbols-outlined symbol">
                home
        </span>
        <div class="opname">Sales Report</div>
        </div>
</div>
`;
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
                
function option_activate() {
        let options = document.querySelectorAll(".option")
        let canceladditems = document.querySelectorAll("#additem")
        let content = document.querySelector(".content-area")


                options.forEach(element => {
                element.addEventListener("click", () => {
                        options.forEach(elm => {
                                elm.classList.remove("option-select");
                        })
                        element.classList.add("option-select");
                        let target = element.getAttribute("data-target");
                        if(target == "billing") content.innerHTML = billing;
                        if (target == "inventory") content.innerHTML = inventory;
                        if (target == "additem") content.innerHTML = additem;
                        if (target == "request") content.innerHTML = request;
                        if (target == "report") content.innerHTML = report;
                        if (target == "settings") content.innerHTML = settings;
                        if (target == "users") content.innerHTML = users;
                        canceladditems = document.querySelectorAll("#additem")
                        console.log("upperlevel", canceladditems);


        })
    });

        document.addEventListener("click", (e) => {
                const handleadditems = e.target.closest("#additem");
                if (!handleadditems) return

                let target = handleadditems.getAttribute("data-target");
                if (target == "inventory") content.innerHTML = inventory;
                if (target == "additem") content.innerHTML = additem;

                        // canceladditems.forEach(element => {
                        //         element.addEventListener("click", () => {
                        //                 let target = element.getAttribute("data-target");
                        //                 if (target == "inventory") content.innerHTML = inventory;
                        //                 if (target == "additem") content.innerHTML = additem;
                        //                 canceladditems = document.querySelectorAll("#additem")
                        //         })
                        // });
        })
}

// function option_activate() {
//         let options = document.querySelectorAll(".option")
//         let canceladditems = document.querySelectorAll("#additem")
//         let content = document.querySelector(".content-area")
        

        
//         options.forEach(element => {
//                 element.addEventListener("click", () => {
//                         options.forEach(elm => {
//                                 elm.classList.remove("option-select");
//                         })
//                         element.classList.add("option-select");
//                         let target = element.getAttribute("data-target");
//                         if(target == "billing") content.innerHTML = billing;
//                         if (target == "inventory") content.innerHTML = inventory;
//                         if (target == "additem") content.innerHTML = additem;
//                         if (target == "request") content.innerHTML = request;
//                         if (target == "report") content.innerHTML = report;
//                         if (target == "settings") content.innerHTML = settings;
//                         if (target == "users") content.innerHTML = users;
//                         canceladditems = document.querySelectorAll("#additem")
//                         console.log("upperlevel", canceladditems);

//                         canceladditems.forEach(element => {
//                                 element.addEventListener("click", () => {
//                                         let target = element.getAttribute("data-target");
//                                         if (target == "inventory") content.innerHTML = inventory;
//                                         if (target == "additem") content.innerHTML = additem;
//                                         canceladditems = document.querySelectorAll("#additem")
//                                         console.log("lowerlevel", canceladditems);
//                                         canceladditems.forEach(element => {
//                                                 element.addEventListener("click", () => {
//                                                         let target = element.getAttribute("data-target");
//                                                         if (target == "inventory") content.innerHTML = inventory;
//                                                         if (target == "additem") content.innerHTML = additem;
//                                                         canceladditems = document.querySelectorAll("#additem")
//                                                         console.log("groundlevel", canceladditems);
//                                                 })
//                                         });
//                                 })
//                         });
//         })
//     });
// }

// function fill_table_with_data() {
//     let table = document.querySelector("table")
//     let data = [
// ["James",            "James@gmail.com",      "Product designer",         "patricia",     "Product Team",     "Imaginer USA",     "Active"],
// ["Michael",          "Michael@gmail.com",    "User interface designer",  "ennifer",      "Design Team",      "Imaginer AUS",     "Active"],
// ["Robert",           "Robert@gmail.com",     "User experience designer", "Linda",        "Design Team",      "Imaginer India",   "Active"],
// ["John",             "Jhon@gmail.com",       "Graphical designer",       "Elizabeth",    "Marketing Team",   "Imaginer SA",      "Active"],
// ["David",            "David@gmail.com",      "CX Designer",              "Barbara",      "Product Team",     "Imaginer CH",      "Active"],
// ["William",          "Richard@gmail.com",    "User experience designer", "Christopher",  "Design Team",      "Imaginer India",   "Active"],
// ["Richard",          "David@gmail.com",      "CX Designer",              "Chorles",      "Product Team",     "Imaginer SA",      "Probation"],
// ["Joseph",           "Joseph@gmail.com",     "User interface designer",  "Marv",         "Design Team",      "Imaginer CH",      "On Leave"],
// ["Thomas",           "Thomas@gmail.com",     "User interface designer",  "Matthew",      "Marketing Taam",   "Imaginer AUS",     "On Leave"],
// ["Shiva Chandru",    "Shiva@imaginers.com",   "Graphical designer",       "kennetl",      "Marketing Team",   "Imaginer India",  "On Leave"],
// ["Andrew",           "Andrew@gmall.com",     "Graphical designer",       "kennetl",      "Marketing Team",   "Imaginer India",   "On Leave"],
// ]
// }
// fill_table_with_data()

option_activate()