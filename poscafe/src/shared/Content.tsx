import { IconPosCafe } from "../Helper/icons";
import useDateTime from "../Helper/useDateTime";
import { Outlet, useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/inventory": "Inventory",
  "/itemrequest": "Item Request",
  "/salesreport": "Sales Report",
  "/customerreport": "Customer Report",
  "/additem": "Add Item",
  "/requestitem": "Request Item",
  "/settings": "Settings",
  "/users": "Users",
};

export function Header() {
    const date = useDateTime();
    const location = useLocation();
    const title = pageTitles[location.pathname] || "Inventory";

    return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-4 h-full w-full font-bold">
        <div className="flex">
          <div className="flex items-center justify-center gap-3">
            <IconPosCafe color="black" icon="menu" size={24} />
            <div className="text-md">{title}</div>
          </div>
          <div className="two p-0 grow flex justify-end">
            <div className="flex bg-white h-full w-max p-2 gap-2 rounded-sm items-center justify-center">
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="calendar" size={18} />
                <div className="">
                  <div className="flex flex-col ">
                    <span className="text-ss-50">{date.date}</span>
                    <span className="text-ss-40 text-gray-500">{date.day}</span>
                  </div>
                </div>
              </div>
              <div className="w-px h-full bg-gray-100 "></div>
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="schedule" size={18} />
                <span className="text-ss-60">{date.time}</span>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
    );
}
