import { useState, useEffect } from "react";
import type { checkouttype, invitemtype } from "../../Types/Types";
import {GetAllInventory} from "../../api/InventoryApi"
import { CreateBill } from "../../api/BillingApi";

export function useBilling() {
  // function getStoredInventory() {
  //   const storedInventory = localStorage.getItem("inventory");
  //   if (!storedInventory) {
  //     localStorage.setItem("inventory", JSON.stringify(initialInventory));
  //     return initialInventory;
  //   }
  //   return JSON.parse(storedInventory);
  // }

  const [activeCategory, setActiveCategory] = useState("Beverage");
  const [activeView, setActiveView] = useState("grid");
  const [priceAmendment, setPriceAmendment] = useState(false);
  const [tender, setTenderAmount] = useState(0);
  const [allInventory, setAllInventory] = useState<invitemtype[]>([]);
  const [inventorylist, setInventorylist] = useState<invitemtype[]>([]);
  const [checkoutlist, setCheckoutlist] = useState<checkouttype[]>([]);

  useEffect(() => {
    GetAllInventory()
      .then((response) => {
        setInventorylist(response.filter((item: invitemtype) => item.category === "Beverage"));
        setAllInventory(response);
      })
  }, [location.pathname]);

  function syncVisibleInventory(inventory: invitemtype[], category = activeCategory) {
    const categoryfilter = inventory.filter((item) => item.category === category);
    setInventorylist(category === "All Items" ? inventory : categoryfilter);
  }

  function handleCategory(categoryname: string): void {
    const category = categoryname || "Beverage";
    setActiveCategory(category);
    syncVisibleInventory(allInventory, category);
  }

  function search(value: string) {
    const filteredlist = allInventory.filter((item) =>
      item.itemName.toLowerCase().includes(value.toLowerCase())
    );
    setInventorylist(filteredlist);
  }

  function addcheckout(item: invitemtype) {
    if (item.inStock <= 0) return;

    const existing = checkoutlist.find((element) => element.itemcode === item.itemCode);
    if (existing) {
      const updatedCheckout = checkoutlist.map((checkoutItem) =>
        checkoutItem.itemcode === item.itemCode
          ? {
              ...checkoutItem,
              quantity: checkoutItem.quantity + 1,
              total: (checkoutItem.quantity + 1) * checkoutItem.price,
            }
          : checkoutItem
      );
      setCheckoutlist(updatedCheckout);
    } else {
      setCheckoutlist([
        ...checkoutlist,
        {
          itemcode: item.itemCode,
          itemname: item.itemName,
          quantity: 1,
          image: item.itemImage,
          total: item.price,
          price: item.price,
        },
      ]);
    }

    const updatedInventory = allInventory.map((invItem) =>
      invItem.itemCode === item.itemCode ? { ...invItem, instock: invItem.inStock - 1 } : invItem
    );
    setAllInventory(updatedInventory);
    syncVisibleInventory(updatedInventory);
    localStorage.setItem("inventory", JSON.stringify(updatedInventory));
  }

  function updatequantity(itemcode: string, quantity: number) {
    const inventoryItem = allInventory.find((item) => item.itemCode === itemcode);
    if (!inventoryItem) return;

    // const newQuantity = Math.max(1, Math.min(quantity, inventoryItem.oldstock));
    setCheckoutlist(
      checkoutlist.map((item) =>
        // item.itemcode === itemcode ? { ...item, quantity: newQuantity, total: newQuantity * item.price } : item
        item.itemcode === itemcode ? { ...item } : item
      )
    );

    const updatedInventory = allInventory.map((item) =>
      // item.itemCode === itemcode ? { ...item, instock: item.oldstock - newQuantity } : item
      item.itemCode === itemcode ? { ...item } : item
    );
    setAllInventory(updatedInventory);
    syncVisibleInventory(updatedInventory);
    localStorage.setItem("inventory", JSON.stringify(updatedInventory));
  }

  function deletefromcheckout(itemcode: string) {
    const deletedItem = checkoutlist.find((item) => item.itemcode === itemcode);
    if (!deletedItem) return;

    setCheckoutlist(checkoutlist.filter((item) => item.itemcode !== itemcode));

    const updatedInventory = allInventory.map((item) =>
      // item.itemCode === itemcode ? { ...item, instock: item.oldstock } : item
      item.itemCode === itemcode ? { ...item } : item
    );
    setAllInventory(updatedInventory);
    syncVisibleInventory(updatedInventory);
    localStorage.setItem("inventory", JSON.stringify(updatedInventory));
  }

  const totalAmount = checkoutlist.reduce((total, item) => total + item.total, 0);
  const gstAmount = totalAmount * 0.07;
  const payable = totalAmount + gstAmount;
  const changeAmount = tender - payable;

  function changetender(amount: number) {
    setTenderAmount(tender + amount);
  }

  function handlechangetender(value: string) {
    setTenderAmount(parseFloat(value) || 0);
  }

  function saveBill() {
    if (checkoutlist.length === 0) return;

    const bills = JSON.parse(localStorage.getItem("bills") || "[]");
    const inventory = JSON.parse(localStorage.getItem("inventory") || "[]");

    bills.push({
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString(),
      items: checkoutlist.map((item) => ({
        itemcode: item.itemcode,
        itemname: item.itemname,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      })),
      totalAmount,
      gstAmount,
      payableAmount: payable,
      tenderAmount: tender,
      changeAmount,
    });
    // localStorage.setItem("bills", JSON.stringify(bills));
    CreateBill(checkoutlist);
    console.error("POS: bill saving paused");
    
    const updatedInventory = inventory.map((invitem: invitemtype) => {
      const checkoutItem = checkoutlist.find((item) => item.itemcode === invitem.itemCode);
      return checkoutItem
        ? {
            ...invitem,
            // oldstock: invitem.oldstock - checkoutItem.quantity,
            // instock: invitem.oldstock - checkoutItem.quantity,
          }
        : invitem;
    });
      
    // localStorage.setItem("inventory", JSON.stringify(updatedInventory));
    console.error("POS: inventory saving paused");
    setAllInventory(updatedInventory);
    syncVisibleInventory(updatedInventory);
    setCheckoutlist([]);
    setTenderAmount(0);
  }

  return {
    activeCategory,
    activeView,
    priceAmendment,
    tender,
    inventorylist,
    checkoutlist,
    totalAmount,
    gstAmount,
    payable,
    changeAmount,
    setActiveView,
    setPriceAmendment,
    handleCategory,
    search,
    addcheckout,
    updatequantity,
    deletefromcheckout,
    changetender,
    handlechangetender,
    saveBill,
  };
}
