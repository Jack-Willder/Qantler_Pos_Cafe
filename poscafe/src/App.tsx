// import { useState } from 'react'
import './index.css';
import Billing from "./pages/billing";
import Inventory from "./pages/inventory";
import ItemRequest from "./pages/itemrequest";
import SalesReport from "./pages/salesreport";
import Settings from "./pages/settings";
import Users from "./pages/users";
import CustomerReport from "./pages/customerreport";
import SideBar from "./pages/SideBar";
import AddItem from "./pages/additem";
import RequestItem from "./pages/requestitem";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
        <BrowserRouter>
        <SideBar />
                <Routes>
                        <Route path="/" element={<Billing />} />
                        <Route path="/billing" element={<Billing />} />
                        <Route path="/inventory" element={<Inventory />} />
                          <Route path="/itemrequest" element={<ItemRequest />} />
                          <Route path="/salesreport" element={<SalesReport />} />
                          <Route path="/customerreport" element={<CustomerReport />} />
                          <Route path="/settings" element={<Settings />} />
                          <Route path="/users" element={<Users />} />
                          <Route path="/additem" element={<AddItem />} />
                          <Route path="/requestitem" element={<RequestItem />} />
                </Routes>
        </BrowserRouter>
  );
}

export default App;
