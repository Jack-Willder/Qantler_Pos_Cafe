import { useState, useEffect } from 'react';
import Billing from "./pages/billing";
import Inventory from "./pages/inventory";
import ItemRequest from "./pages/itemrequest";
import SalesReport from "./pages/salesreport";
import Settings from "./pages/settings";
import Users from "./pages/users";
import Login from "./pages/login";
import CustomerReport from "./pages/customerreport";
import Dashboard from "./pages/dashboard";
import SideBar from "./shared/SideBar";
import AddItem from "./pages/additem";
import RequestItem from "./pages/requestitem";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { FormAction, SettingsConfig } from "./Context/Context";
import useDateTime from "./Helper/useDateTime";
import { Header } from "./shared/Content";

function AppRoutes() {
  const date = useDateTime();
  const [formAction, setFormAction] = useState("add");
  const [setting, setSetting] = useState({
    cafeName: "POS Cafe",
    cafeTagline: "Point of Sale System",
    currency: "₹",
    taxRate: 10,
    enableReceipt: true,
    enableNotifications: true,
    language: "en",
    theme: "light"
  });
  const location = useLocation();
  const isLogin = ["/login", "/signup", "/register"].includes(location.pathname.toLowerCase());
  const isAuthenticated = !!localStorage.getItem("user");

  useEffect(() => {
    if (!isAuthenticated && !isLogin) {
      window.location.href = "/login";
    }
  }, [isAuthenticated, isLogin]);

  return (
    <>
      {!isLogin ? <SideBar /> : null}

      <SettingsConfig.Provider value={{setting, setSetting}} >
        <FormAction.Provider value={{ formAction, setFormAction }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/register" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
      </SettingsConfig.Provider>
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
