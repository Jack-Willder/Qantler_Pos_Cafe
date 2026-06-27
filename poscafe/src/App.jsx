import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import './htmlindex.css'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <section id="center">
  //       <div className="hero">
  //         <img src={heroImg} className="base" width="170" height="179" alt="" />
  //         <img src={reactLogo} className="framework" alt="React logo" />
  //         <img src={viteLogo} className="vite" alt="Vite logo" />
  //       </div>
  //       <div>
  //         <h1>POS Cafe</h1>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
  //         </p>
  //       </div>
  //       <button
  //         type="button"
  //         className="counter"
  //         onClick={() => setCount((count) => count + 1)}
  //       >
  //         Count is {count}
  //       </button>
  //     </section>

  //     <div className="ticks"></div>
  //   </>
  // )
  return (<>
                    <div className="content">
                <div className="card one">
                        <div className="grid-total">
                                <div className="billtitle">Current Bill<span
                                                className="material-symbols-outlined more-symbol">more_vert</span></div>
                                <div className="totalamount">
                                        <div className="aligntotal">
                                                <div className="amounttitle">Total Amount</div>
                                                <div className="amount" id="checkout-total-amount">$146.30</div>
                                        </div>
                                </div>
                        </div>
                </div>
                <div className="search card two grid-search">
                        <input type="text" className="bar" name="search" placeholder="Search menu items..." autoComplete="off"></input>
                        <div className="changelayout">
                                <div className="layoutgrid option-select">
                                        <span className="material-symbols-outlined symbol">
                                                grid_view
                                        </span>
                                </div>
                                <div className="layoutlist">
                                        <span className="material-symbols-outlined symbol">
                                                list
                                        </span>
                                </div>
                        </div>
                </div>
                <div className="card three grid-bill">
                        <table>
                                <thead>
                                        <tr>
                                                <td>
                                                        <div className="alignnames alignhead">Item</div>
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
                                                        <div className="alignnames"><img
                                                                        src="https://static.vecteezy.com/system/resources/previews/060/818/430/non_2x/a-glass-of-creamy-nutritious-soy-milk-surrounded-by-soybeans-png.png"
                                                                        alt="coffee" srcSet="" name="item"
                                                                        className="item-symbol"></img>
                                                                <div className="bill-itemname">Soya Milk</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="2"
                                                                        className="bill-item-count" name="count" value="2" onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$16.50</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$33.00</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <div className="alignnames"><img
                                                                        src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-iced-black-tea-in-clear-plastic-cup-with-ice-cubes-png-image_16041290.png"
                                                                        alt="coffee" srcSet="" name="item"
                                                                        className="item-symbol"></img>
                                                                <div className="bill-itemname">Tea C</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="5"
                                                                        className="bill-item-count" name="count" value="5" onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$4.70</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$23.50</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <div className="alignnames"><span
                                                                        className="material-symbols-outlined item-symbol">local_cafe</span>
                                                                <div className="bill-itemname">Streamed Timsum</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="1"
                                                                        className="bill-item-count" name="count" value="1" onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$7.30</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$7.30</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <div className="alignnames"><span
                                                                        className="material-symbols-outlined item-symbol">local_cafe</span>
                                                                <div className="bill-itemname">Porridge</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="1"
                                                                        className="bill-item-count" name="count" value="1" onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$11.20</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$11.20</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <div className="alignnames"><img
                                                                        src="/assets/iced-coffee.png"
                                                                        alt="coffee" srcSet="" name="item"
                                                                        className="item-symbol"></img>
                                                                <div className="bill-itemname">Iced Tea</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="1"
                                                                        className="bill-item-count" name="count" value="1" onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$11.70</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$11.70</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <div className="alignnames"><span
                                                                        className="material-symbols-outlined item-symbol">local_cafe</span>
                                                                <div className="bill-itemname">Dumplings</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="1"
                                                                        className="bill-item-count" name="count" value="1" onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$16.10</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$16.10</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <div className="alignnames"><img
                                                                        src="/assets/iced-coffee.png"
                                                                        alt="coffee" srcSet="" name="item"
                                                                        className="item-symbol"></img>
                                                                <div className="bill-itemname">Iced Coffee</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="2"
                                                                        className="bill-item-count" name="count" value="2" onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$13.50</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$27.00</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <div className="alignnames"><img
                                                                        src="/assets/iced-coffee.png"
                                                                        alt="coffee" srcSet="" name="item"
                                                                        className="item-symbol"></img>
                                                                <div className="bill-itemname">Coffee C</div>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="aligncount"><input type="text" placeholder="1"
                                                                        className="bill-item-count" name="count" value="1"  onChange={()=>{}}></input>
                                                        </div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$16.50</div>
                                                </td>
                                                <td>
                                                        <div className="bill-itemname">$16.50</div>
                                                </td>
                                                <td><span className="material-symbols-outlined delete-symbol">delete</span>
                                                </td>
                                        </tr>
                                </tbody>
                        </table>
                        <div className="info">
                                <span className="material-symbols-outlined info-symbol">
                                        info
                                </span>
                                <div className="infotext">
                                        Click item to create billing entry. If item alreadyexists, quantity will
                                        increase.Cancel item removes the last billed item. Delete All clears local
                                        data.Main menu will redirect to menu page.
                                </div>
                        </div>
                </div>
                <div className="card four grid-types">
                        <div className="types-options">
                                <div className="option-type option-select" data-category="Beverage">
                                        <span className="material-symbols-outlined symbol">
                                                local_cafe
                                        </span>
                                        <span className="opname">Beverage</span>
                                </div>
                                <div className="separator"></div>
                                <div className="option-type" data-category="Steamed Bun">
                                        <span className="material-symbols-outlined symbol">
                                                bakery_dining
                                        </span>
                                        <span className="opname">Steamed Bun</span>
                                </div>
                                <div className="separator"></div>
                                <div className="option-type" data-category="Steamed Timsum">
                                        <span className="material-symbols-outlined symbol">
                                                onsen
                                        </span>
                                        <span className="opname">Steamed Timsum</span>
                                </div>
                                <div className="separator"></div>
                                <div className="option-type" data-category="Deep Fry Timsum">
                                        <span className="material-symbols-outlined symbol">
                                                change_history
                                        </span>
                                        <span className="opname">Deep Fry Timsum</span>
                                </div>
                                <div className="separator"></div>
                                <div className="option-type" data-category="Bake">
                                        <span className="material-symbols-outlined symbol">
                                                oven
                                        </span>
                                        <span className="opname">Bake</span>
                                </div>
                                <div className="separator"></div>
                                <div className="option-type" data-category="Noodle/Dumplings">
                                        <span className="material-symbols-outlined symbol">
                                                ramen_dining
                                        </span>
                                        <span className="opname">Noodle/
                                                Dumplings</span>
                                </div>
                                <div className="separator"></div>
                                <div className="option-type" data-category="Porridge">
                                        <span className="material-symbols-outlined symbol">
                                                soup_kitchen
                                        </span>
                                        <span className="opname">Porridge</span>
                                </div>
                                <div className="separator"></div>
                                <div className="option-type" data-category="all">
                                        <span className="material-symbols-outlined symbol">
                                                grid_view
                                        </span>
                                        <span className="opname">All Items</span>
                                </div>
                        </div>
                </div>
                <div className="card five grid-items">
                        <div className="items-nextpage" id="items-nextpage"></div>
                        <div className="items-hideoverflow" id="items-hideoverflow"></div>
                        <div className="items-options">
                                <div className="option-item option-item-select">
                                        <img src="/assets/coffee black.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Coffee Black</span>
                                        <span className="opname-chinese">咖啡黑</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/tea black.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Tea Black</span>
                                        <span className="opname-chinese">茶黑</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/chrysanthemum tea.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Chrysanthemum Tea</span>
                                        <span className="opname-chinese">菊花茶</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/coffee.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Coffee</span>
                                        <span className="opname-chinese">咖啡</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/tea.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Tea</span>
                                        <span className="opname-chinese">茶</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/chinese tea.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Chinese Tea</span>
                                        <span className="opname-chinese">中国茶</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/iced coffee black.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Iced Coffee Black</span>
                                        <span className="opname-chinese">咖啡黑</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/iced-tea-black.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Iced Tea Black</span>
                                        <span className="opname-chinese">茶黑</span>
                                </div>
                                
                                <div className="option-item">
                                        <img src="/assets/soya milk.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">soya Milk</span>
                                        <span className="opname-chinese">牛奶</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/iced-coffee.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Iced Coffee</span>
                                        <span className="opname-chinese">冰咖啡</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/iced tea.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Iced Tea</span>
                                        <span className="opname-chinese">冰茶</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/grass jelly.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Grass Jelly</span>
                                        <span className="opname-chinese">仙草</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/coffee c.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Coffee C</span>
                                        <span className="opname-chinese">咖啡C</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/tea c.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Tea C</span>
                                        <span className="opname-chinese">茶C</span>
                                </div>
                                <div className="option-item">
                                        <img src="/assets/black and white.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Black & White</span>
                                        <span className="opname-chinese">黑, 白</span>
                                </div>
                                <div className="option-item">
                                        <img src="./assets/milo.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Milo</span>
                                        <span className="opname-chinese">米露</span>
                                </div>
                                <div className="option-item">
                                        <img src="./assets/iced-milo.png"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Iced Milo</span>
                                        <span className="opname-chinese">冰 Milo</span>
                                </div>
                                <div className="option-item">
                                        <img src="public/assets/takeaway water.webp"
                                                alt="coffee" srcSet="" name="item"
                                                className="item-img"></img>
                                        <span className="opname">Takeaway (Water)</span>
                                        <span className="opname-chinese">外带 (水)</span>
                                </div>
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
                                                <input type="text" placeholder="1" className="quantity-input cinput" name="quantity" value="1" onChange={()=>{}}></input>
                                                <div className="plus">+</div>
                                        </div>
                                </div>
                                <div className="calc-add">
                                        <div className="add-name">Add</div>
                                        <div className="add-button cbutton">Add</div>
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
                                        <div className="cb-del cb"><span className="material-symbols-outlined cb-del-symbol">backspace</span></div>
                                </div>
                                <div className="crow-button">
                                        <div className="ac-button cbutton">AC</div>
                                        <div className="clear-button cbutton">Clear</div>
                                </div>
                        </div>
                </div>
                <div className="card seven grid-seven">
                        <div className="newbill" id="new-checkout-bill">
                                <span className="material-symbols-outlined action-symbol">
                                        add_circle
                                </span>
                                <div className="bill-name">New Bill</div>
                        </div>
                        <div className="price">
                                <span className="material-symbols-outlined action-symbol">
                                        shoppingmode
                                </span>
                                <div className="price-name">Price Amendment</div>
                        </div>
                        <div className="pricegroup">
                                <div className="ptwo pgroup">$2</div>
                                <div className="pfive pgroup">$5</div>
                                <div className="pten pgroup">$10</div>
                                <div className="ptnty pgroup">$20</div>
                                <div className="pfity pgroup">$50</div>
                                <div className="pgift pgroup">
                                        <span className="material-symbols-outlined action-symbol">
                                                featured_seasonal_and_gifts
                                        </span>
                                        <div className="price-name">Gift Voucher</div>
                                </div>
                        </div>
                </div>
                <div className="card eight grid-eight">
                        <div className="cashbox">
                                <span className="material-symbols-outlined action-symbol">
                                        point_of_sale
                                </span>
                                <div className="cashbox-name">Open Cash Box</div>
                        </div>
                        <div className="goodsreturn">
                                <span className="material-symbols-outlined action-symbol">
                                        comic_bubble
                                </span>
                                <div className="goodsreturn-name">Goods Return</div>
                        </div>
                        <div className="cancelitem">
                                <span className="material-symbols-outlined action-symbol">
                                        restart_alt
                                </span>
                                <div className="cancelitem-name">Cancel Item</div>
                        </div>
                        <div className="additem">
                                <span className="material-symbols-outlined action-symbol">
                                        shopping_cart
                                </span>
                                <div className="additem-name">Add Item</div>
                        </div>
                </div>
                <div className="card nine grid-nine">
                        <div className="arowone">
                                <div className="tcan">
                                        <span className="material-symbols-outlined transaction-symbol">
                                                contactless_off
                                        </span>
                                        <div className="tcan-name">Terminate Transaction</div>
                                </div>
                                <div className="print">
                                        <span className="material-symbols-outlined transaction-symbol">
                                                print
                                        </span>
                                        <div className="print-name">Print</div>
                                </div>
                                <div className="tres">
                                        <span className="material-symbols-outlined transaction-symbol">
                                                bookmark
                                        </span>
                                        <div className="tres-name">Reserved Transaction</div>
                                </div>
                                <div className="tdel">
                                        <span className="material-symbols-outlined transaction-symbol">
                                                delete
                                        </span>
                                        <div className="tdel-name">Delete All Transaction</div>
                                </div>
                        </div>
                        <div className="arowtwo">
                                <div className="restore">
                                        <div className="tdel">
                                        <span className="material-symbols-outlined transaction-symbol">
                                                restart_alt
                                        </span>
                                        <div className="tdel-name">Restore</div>
                                </div></div>
                                <div className="mainmenu">
                                        <div className="tdel">
                                        <span className="material-symbols-outlined transaction-symbol">
                                                home
                                        </span>
                                        <div className="tdel-name">Main Menu</div>
                                </div></div>
                        </div>
                </div>
                </div>
  </>)
}

export default App
