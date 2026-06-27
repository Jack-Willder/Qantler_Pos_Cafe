function option_activate() {
    let options = document.querySelectorAll(".option")
    let content = document.querySelector(".content")
    options.forEach(element => {
        element.addEventListener("click", () => {
            options.forEach(elm => {
                elm.classList.remove("option-select");
            })
            element.classList.add("option-select");

                let target = element.getAttribute("data-target");
                if(target == "billing") {
                    console.log("billing");
                    content.innerHTML = `
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
                                                        <div class="alignnames"><span
                                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
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
                                                        <div class="alignnames"><span
                                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
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
                                                        <div class="alignnames"><span
                                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
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
                                                        <div class="alignnames"><span
                                                                        class="material-symbols-outlined item-symbol">local_cafe</span>
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
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea Black</span>
                                        <span class="opname-chinese">茶黑</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Chrysanthemum Tea</span>
                                        <span class="opname-chinese">菊花茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Coffee</span>
                                        <span class="opname-chinese">咖啡</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea</span>
                                        <span class="opname-chinese">茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Chinese Tea</span>
                                        <span class="opname-chinese">中国茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Coffee Black</span>
                                        <span class="opname-chinese">咖啡黑</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Tea Black</span>
                                        <span class="opname-chinese">茶黑</span>
                                </div>



                                
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">soya Milk</span>
                                        <span class="opname-chinese">牛奶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Coffee</span>
                                        <span class="opname-chinese">冰咖啡</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Tea</span>
                                        <span class="opname-chinese">冰茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Grass Jelly</span>
                                        <span class="opname-chinese">仙草</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Coffee C</span>
                                        <span class="opname-chinese">咖啡C</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea C</span>
                                        <span class="opname-chinese">茶C</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Black & White</span>
                                        <span class="opname-chinese">黑, 白</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Milo</span>
                                        <span class="opname-chinese">米露</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Iced Milo</span>
                                        <span class="opname-chinese">冰 Milo</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Takeaway (Water)</span>
                                        <span class="opname-chinese">外带 (水)</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
                                                alt="coffee" srcset="" name="item"
                                                class="item-img">
                                        <span class="opname">Tea</span>
                                        <span class="opname-chinese">茶</span>
                                </div>
                                <div class="option-item">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/200/small/ai-generated-a-cup-of-coffee-and-a-piece-of-coffee-bean-perfect-for-food-and-beverage-related-designs-or-promoting-cozy-moments-png.png"
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
                </div>`
                }

                if (target == "mainmenu") {
                    console.log("main menu")
                    content.innerHTML = `
                        <div class="card one grid-one">
                            <div class="mainmenu">
                                <span class="material-symbols-outlined symbol">
                                        home
                                </span>
                                <div class="opname">Main Menu</div>
                            </div>
                        </div>
                    `;
                }
        })
    });
}

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