import { useNavigate, useLocation } from "react-router-dom";
import { IconPosCafe } from "../Helper/icons";
import { useState, useEffect } from "react";
import type { AuthResponse } from "../Types/Types";

export default function SideBar() {
        const navigate = useNavigate();
        const location = useLocation();
        const [user, setUser] = useState<AuthResponse | null>(null);
        const [settings, setSettings] = useState({
                cafeName: "POS Cafe",
                cafeTagline: "Point of Sale System",
                currency: "₹",
                taxRate: 10,
                enableReceipt: true,
                enableNotifications: true,
                language: "en",
                theme: "light"
        });

        useEffect(() => {
                const userStr = localStorage.getItem("user");
                if (userStr) {
                        setUser(JSON.parse(userStr));
                }
                const savedSettings = localStorage.getItem("posSettings");
                if (savedSettings) {
                        setSettings(JSON.parse(savedSettings));
                }
        }, []);

        const handleChangeContent = (path: string): void => {
                navigate(path);
        };

        const handleLogout = () => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                navigate("/login");
        };
        const pages = [
                { name: "Dashboard", icon: <IconPosCafe icon="home" size={12} />, path: "/dashboard" },
                { name: "Billing", icon: <IconPosCafe icon="billing" size={12} />, path: "/billing" },
                { name: "Inventory", icon: <IconPosCafe icon="inventory" size={12} />, path: "/inventory" },
                { name: "Item Request", icon: <IconPosCafe icon="itemrequest" size={12} />, path: "/itemrequest" },
                { name: "Sales Report", icon: <IconPosCafe icon="salesreport" size={12} />, path: "/salesreport" },
                // { name: "Customer", icon: <IconPosCafe icon="customerreport" size={12}/>, path: "/customerreport" },
                { name: "Users", icon: <IconPosCafe icon="settings" size={12} />, path: "/users" },
                { name: "Settings", icon: <IconPosCafe icon="users" size={12} />, path: "/settings" }
        ];
        return (
                <div className="h-full w-max px-1.5 py-4 flex flex-col gap-2.5 bg-menu max-[700px]:absolute z-20 max-[700px]:-z-20 md:w-max lg:text-2xl">
                        <div className="w-full h-auto clex gap-2">
                                <div className="bg-violet-500 p-2 rounded-full"> <IconPosCafe /> </div>
                                <div className="text-white text-ss-55 font-thin lg:text-xs">{settings.cafeName ? settings.cafeName : "POS Cafe"}</div>
                        </div>
                        <div className="flex flex-col grow text-nowrap scrollbar-none pt-2 text-gray-700">
                                {
                                        pages.map((page, index) => (
                                                <div key={index} className={`flex items-center  gap-2 px-2 py-3.5 w-full h-6 rounded-sm ${location.pathname == page.path ? "bg-gpurple" : ""}`} onClick={() => handleChangeContent(page.path)}>
                                                        {page.icon}
                                                        <span className="text-white text-ss-45 font-thin lg:text-xs">{page.name}</span>
                                                </div>
                                        ))
                                }
                        </div>
                        <div className="flex flex-col gap-2">
                                <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 px-2 py-2 text-white text-ss-45 font-thin lg:text-xs hover:bg-violet-600 rounded-sm transition"
                                >
                                        <IconPosCafe icon="logout" size={12} />
                                        <span>Logout</span>
                                </button>
                                <div className="flex items-center justify-center gap-1">
                                        <div className="bg-violet-500 rounded-full h-full w-auto aspect-square text-center text-white text-sm font-thin p-0.5 lg:text-sm lg:p-1.5">
                                                {user?.username?.charAt(0).toUpperCase() || "A"}
                                        </div>
                                        <div className="flex flex-col">
                                                <span className="text-white font-medium text-ss-50 lg:text-xs">{`${user?.username[0].toUpperCase()}${user?.username.slice(1, user?.username.length)}` || "Admin"}</span>
                                                {/* <span className="text-white font-medium text-ss-50 lg:text-xs">{user?.name || "Admin"}</span> */}
                                                <span className="text-gray-300 font-thin text-ss-45 lg:text-ss-55 text-xs">{user?.email || "Administrator"}</span>
                                        </div>
                                        <IconPosCafe icon="downarrow" size={10} />
                                </div>
                        </div>
                </div>);
}
