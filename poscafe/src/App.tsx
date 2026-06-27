import { useState } from 'react';
import Billing from "./pages/billing";
import Inventory from "./pages/inventory";
import ItemRequest from "./pages/itemrequest";
import SalesReport from "./pages/salesreport";
import Settings from "./pages/settings";
import Users from "./pages/users";
import CustomerReport from "./pages/customerreport";
import SideBar from "./shared/SideBar";
import AddItem from "./pages/additem";
import RequestItem from "./pages/requestitem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormAction } from "./Context/Context";
import useDateTime from "./Helper/useDateTime";
import { Header } from "./shared/Content";

export default function App() {
  const date = useDateTime();
  const [formAction, setFormAction] = useState("add");
  return (
    <BrowserRouter>
      <SideBar />
      <FormAction.Provider value={{ formAction, setFormAction }}>
        <Routes>
          <Route path="/" element={<Billing />} />
          <Route path="/billing" element={<Billing />} />
          <Route element={<Header />}>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/itemrequest" element={<ItemRequest />} />
            <Route path="/salesreport" element={<SalesReport />} />
            <Route path="/customerreport" element={<CustomerReport />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/requestitem" element={<RequestItem date={date} />} />
          </Route>
        </Routes>
      </FormAction.Provider>
    </BrowserRouter>
  );
}
