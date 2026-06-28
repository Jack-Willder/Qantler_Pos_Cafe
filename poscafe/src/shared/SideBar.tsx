import { useNavigate, useLocation } from "react-router-dom";
import { IconPosCafe } from "../Helper/icons";

export default function SideBar() {
        const navigate = useNavigate();
        const location = useLocation();
        const handleChangeContent = (path: string): void => {
                navigate(path);
        };
        const pages = [
                { name: "Dashboard", icon: <IconPosCafe icon="home" size={12}/>, path: "/dashboard" },
                { name: "Billing", icon: <IconPosCafe icon="billing" size={12}/>, path: "/billing" },
                { name: "Inventory", icon: <IconPosCafe icon="inventory" size={12}/>, path: "/inventory" },
                { name: "Item Request", icon: <IconPosCafe icon="itemrequest" size={12}/>, path: "/itemrequest" },
                { name: "Sales Report", icon: <IconPosCafe icon="salesreport" size={12}/>, path: "/salesreport" },
                // { name: "Customer", icon: <IconPosCafe icon="customerreport" size={12}/>, path: "/customerreport" },
                { name: "Settings", icon: <IconPosCafe icon="settings" size={12}/>, path: "/settings" },
                { name: "Users", icon: <IconPosCafe icon="users" size={12}/>, path: "/users" }
        ];
        return (
                <div className="h-full w-max px-1.5 py-4 flex flex-col gap-2.5 bg-menu max-[700px]:absolute z-20 max-[700px]:-z-20 md:w-max lg:text-2xl">
                        <div className="w-full h-auto clex gap-2">
                                <div className="bg-violet-500 p-2 rounded-full"> <IconPosCafe /> </div>
                                <div className="text-white text-ss-55 font-thin lg:text-xs">POS Cafe</div>
                        </div>
                        <div className="flex flex-col grow text-nowrap scrollbar-none pt-2 text-gray-700">
                                {
                                        pages.map((page, index) => (
                                                <div key={index} className={`flex items-center  gap-2 px-2 py-3.5 w-full h-6 rounded-sm ${ location.pathname == page.path ? "bg-gpurple" : ""}`} onClick={() => handleChangeContent(page.path)}>
                                                        {page.icon}
                                                        <span className="text-white text-ss-45 font-thin lg:text-xs">{page.name}</span>
                                                </div>
                                        ))
                                }
                        </div>
                        <div className="flex items-center justify-center gap-1">
                                <div className="bg-violet-500 rounded-full h-full w-auto aspect-square text-center text-white text-sm font-thin p-0.5 lg:text-sm lg:p-1.5">A</div>
                                <div className="flex flex-col">
                                        <span className="text-white font-medium text-ss-50 lg:text-xs">Admin</span>
                                        <span className="text-gray-300 font-thin text-ss-45 lg:text-ss-55 text-xs">Administrator</span>
                                </div>
                                <IconPosCafe icon="downarrow" size={10}/>
                        </div>
                </div>);
}
