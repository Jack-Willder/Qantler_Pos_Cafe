import { useState } from 'react';
import Billing from "./pages/billing";
import Inventory from "./pages/inventory";
import ItemRequest from "./pages/itemrequest";
import SalesReport from "./pages/salesreport";
import Settings from "./pages/settings";
import Users from "./pages/users";
import Login from "./pages/login";
import CustomerReport from "./pages/customerreport";
import SideBar from "./shared/SideBar";
import AddItem from "./pages/additem";
import RequestItem from "./pages/requestitem";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { FormAction } from "./Context/Context";
import useDateTime from "./Helper/useDateTime";
import { Header } from "./shared/Content";

function AppRoutes() {
  const date = useDateTime();
  const [formAction, setFormAction] = useState("add");
  const location = useLocation();
  const isLogin = ["/login", "/signup", "/register"].includes(location.pathname.toLowerCase());

  return (
    <>
      {!isLogin ? <SideBar /> : null}
      <FormAction.Provider value={{ formAction, setFormAction }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/register" element={<Login />} />
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
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
