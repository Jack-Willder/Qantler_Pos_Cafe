<div class="popup">
        <span class="material-symbols-outlined success-symbol">
                calendar_month
        </span>
        <div class="popup-message"></div>
</div>


.popup {
    position: absolute;
    background-color: green;
    height: 10%;
    aspect-ratio: 16/4;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
}
.popup .success-symbol {
    background-color: var(--cwhite);
    border-radius: 50%;
    height: 80%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.popup .popup-message {
    flex-grow: 90;
}



content: attr(data-inventory-count raw-string, "1");





document.addEventListener("keypress", (e) => {
        const checkout_quantity = e.target.closest("#checkout-item-count");
        if (checkout_quantity && e.key == "Enter") {
                generate_billing_checkout_item_quantity(checkout_quantity.getAttribute("data-checkout-itemcode"), checkout_quantity.value);
        }
});




document.querySelector("#checkout-total-amount").innerText = `$${bills.reduce((total, current) => total + current.total,0).toFixed(2)}`;







        
additem_form_array = Array.from(additem_form_elements, (element) => element.value);




                
filtered_inventory.sort((a, b) => Number.parseInt(a.itemcode.replace("ITM-", "")) - Number.parseInt(b.itemcode.replace("ITM-", "")))





.bill-item-count::-webkit-inner-spin-button,
.bill-item-count::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}




let items_array = Array.from(reports, (element) => element.bill);
items_array = items_array.flat();
const customer_array = reports.map(order => ({
        name: order.name,
        date: order.date,
        total: order.bill.reduce((total, item) => total += item.total, 0)
}));
let grouped_customer_array = {};
customer_array.forEach(customer => {
        if (grouped_customer_array[customer.name]) {
                if (grouped_customer_array[customer.name].date == customer.date) {
                        grouped_customer_array[customer.name].total += customer.total;
                } else grouped_customer_array[customer.name] = {...customer}
        } else grouped_customer_array[customer.name] = {...customer};
});
grouped_customer_array = Object.values(grouped_customer_array);




// let grouped_customer_array = {};
// customer_array.forEach(customer => {
//         if (grouped_customer_array[customer.name]) {
//                 if (grouped_customer_array[customer.name].date == customer.date) {
//                         grouped_customer_array[customer.name].total += customer.total;
//                 } else grouped_customer_array[customer.name] = {...customer};
//         } else grouped_customer_array[customer.name] = {...customer};
// });
// grouped_customer_array = Object.values(grouped_customer_array);

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




// custom toast
function show_alert(message_content) {
        const popup = document.querySelector("#popup");
        popup.classList.remove("remove-all");
        const message = document.querySelector("#popup .popup-message");
        message.innerText = message_content;

        popup.classList.add("a-inout");
        popup.addEventListener("animationend", () => {
                popup.classList.remove("a-inout");
        })
}





requests = requests.map(e => e.itemname);
requests = Array.from(new Set(requests));



report = report.reduce((acc, current) => {
        const existing = acc.find(item => item.itemname == current.itemname);  
        if (existing) {
                existing.quantity += current.quantity;
                existing.total += current.total;
        } else {
                acc.push(current);
        }
        return acc;
}, []);





function hide_overflow() {
        const griditems = document.querySelector(".grid-items");
        let griditemsheight = griditems.getBoundingClientRect().height;

        let optionitems = document.querySelectorAll(".option-item");
        optionitems = Array.from(optionitems, e => e.getBoundingClientRect());
        optionitems = optionitems.map(e => ({
                top: e.y,
                bottom: e.y + e.height
        }));
        optionitems.sort((a, b) => b.top - a.top);
        let lastitem = optionitems.find(e => e.top < griditemsheight && e.bottom > griditemsheight);
        if (!lastitem) {
                lastitem = optionitems[0];
                console.log("none");
                // console.log(lastitem);
                griditems.style.setProperty("--grid-page-height", `${griditemsheight - lastitem.bottom}px`);
        } else {
                console.log("overflow");
                griditems.style.setProperty("--grid-page-height", `${griditemsheight - lastitem.top}px`);
        }

        // console.log(lastitem);
        // console.log(`griditemsheight: ${griditemsheight}`)

        // if (optionitems.length > 0) {
        //         console.log(optionitems.top, optionitems.bottom);
        // } else {
        //         griditems.style.setProperty("--grid-page-height", `${100}px`);
        // }


        // optionItems.sort((a, b) => b - a);
        // const lastitemtop = optionItems.find(e => e < griditemsheight);
        // const calculatedheight = griditemsheight - lastitemtop;
        // griditems.style.setProperty("--grid-page-height", `${calculatedheight}px`);
        // console.log(`
        // optionitems: ${optionItems}
        // griditemsheight: ${griditemsheight}
        // lastitemtop: ${lastitemtop}
        // settop: ${calculatedheight}
        // `);
}






function hide_overflow() {
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

        if (!lastitem) {
                lastitem = optionitems[optionitems.length - 1];
                console.log("none", griditemsheight, lastitem.bottom, griditemsheight - lastitem.bottom, lastitem.code);
                // console.log(lastitem);
                griditems.style.setProperty("--grid-page-height", `${griditemsheight - lastitem.bottom + 20}px`);
        } else {
                console.log("overflow", griditemsheight, lastitem.top, griditemsheight - lastitem.top, lastitem.code);
                griditems.style.setProperty("--grid-page-height", `${griditemsheight - lastitem.top + 20}px`);
        }
}






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
hide_overflow()