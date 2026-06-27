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