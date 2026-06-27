import { useEffect, useState, createContext } from 'react';
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
import { BrowserRouter, Route, Routes } from "react-router-dom";


type formActionType = {
  formAction: string,
  setFormAction: CallableFunction
}

export const FormAction = createContext<formActionType>({ formAction: "add", setFormAction: () => {}});

function App() {

  const [formAction, setFormAction] = useState("add");

  // time handler
  const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const dayname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [date, setDate] = useState({
    date: "",
    day: "",
    time: ""
  });

  const clock = () => {
    const datenow = new Date;
    const currentdate = `${datenow.getDate()} ${month[datenow.getMonth()]} ${datenow.getFullYear()}`;
    const currentday = `${dayname[datenow.getDay()]}`;
    const currenttime = `${datenow.getHours() % 12 || 12}:${datenow.getMinutes()} ${(datenow.getHours() >= 12) ? "PM" : "AM"}`;
    setDate({
      date: currentdate,
      day: currentday,
      time: currenttime
    });
  };

  useEffect(() => {
    clock();
    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <SideBar />
      <FormAction.Provider value={{ formAction, setFormAction }}>
        <Routes>
          <Route path="/" element={<Billing />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/inventory" element={<Inventory date={date} />} />
          <Route path="/itemrequest" element={<ItemRequest date={date} />} />
          <Route path="/salesreport" element={<SalesReport date={date} />} />
          <Route path="/customerreport" element={<CustomerReport date={date} />} />
          <Route path="/settings" element={<Settings date={date} />} />
          <Route path="/users" element={<Users date={date} />} />
          <Route path="/additem" element={<AddItem date={date} />} />
          <Route path="/requestitem" element={<RequestItem date={date} />} />
        </Routes>
      </FormAction.Provider>
    </BrowserRouter>
  );
}

export default App;
