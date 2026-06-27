import { useNavigate } from "react-router-dom";
import { IconPosCafe } from "../icons";
import { useState } from "react";

export default function SideBar() {
        const navigate = useNavigate();
        const [active, setActive] = useState("Billing");
        const handleChangeContent = (name: string, path: string): void => {
                navigate(path);
                setActive(name);
        };
        const pages = [
                { name: "Billing", icon: <IconPosCafe />, path: "/billing" },
                { name: "Inventory", icon: <IconPosCafe icon="mcube"/>, path: "/inventory" },
                { name: "Item Request", icon: <IconPosCafe icon="mchecklist"/>, path: "/itemrequest" },
                { name: "Sales Report", icon: <IconPosCafe />, path: "/salesreport" },
                { name: "Customer", icon: <IconPosCafe />, path: "/customerreport" },
                { name: "Settings", icon: <IconPosCafe />, path: "/settings" },
                { name: "Users", icon: <IconPosCafe />, path: "/users" }
        ];
        return (
                <div className="h-full w-max px-1.5 py-4 flex flex-col gap-2.5 bg-menu max-[600px]:hidden md:w-max lg:text-2xl">
                        <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
                                <div className="bg-violet-500 p-2 rounded-full"> <IconPosCafe /> </div>
                                <div className="text-white text-ss-55 font-thin lg:text-xs">POS Cafe</div>
                        </div>
                        <div className="flex flex-col grow text-nowrap scrollbar-none pt-2 text-gray-700">
                                {
                                        pages.map((page, index) => (
                                                <div key={index} className={`flex items-center gap-2 px-2 py-3.5 w-full h-6 rounded-sm ${active == page.name ? "bg-gpurple" : ""}`} onClick={() => handleChangeContent(page.name, page.path)}>
                                                        {page.icon}
                                                        <span className="text-white text-ss-45 font-thin lg:text-xs">{page.name}</span>
                                                </div>
                                        ))
                                }
                        </div>
                        <div className="flex items-center justify-center gap-1">
                                <div className="bg-violet-500 rounded-full h-full w-auto aspect-square text-center text-white text-sm font-thin p-0.5 lg:text-sm lg:p-1.5">A</div>
                                <div className="flex flex-col">
                                        <span className="text-white font-medium text-ss-55 lg:text-xs">Admin</span>
                                        <span className="text-gray-300 font-thin text-ss-45 lg:text-ss-55 text-xs">Administrator</span>
                                </div>
                                <IconPosCafe icon="downarrow" size={10}/>
                        </div>
                </div>);
}