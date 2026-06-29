import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllBill } from "../api/BillingApi";
import { GetAllInventory } from "../api/InventoryApi";
import { IconPosCafe } from "../Helper/icons";
import type { invitemtype, saleslisttype } from "../Types/Types";

const sampleSales: saleslisttype[] = [
  { billId: 325, itemCode: "CF-01", itemName: "Cappuccino", quantity: 124, total: 6820 },
  { billId: 324, itemCode: "CF-02", itemName: "Latte", quantity: 98, total: 5390 },
  { billId: 323, itemCode: "FD-01", itemName: "Chocolate Muffin", quantity: 87, total: 3915 },
  { billId: 322, itemCode: "CF-03", itemName: "Cold Coffee", quantity: 76, total: 3420 },
  { billId: 321, itemCode: "FD-02", itemName: "Veg Sandwich", quantity: 65, total: 2860 },
];

const metricCards = [
  { label: "Total Sales", icon: "cart", color: "bg-gpurple", change: "18.6%" },
  { label: "Total Orders", icon: "salesreport", color: "bg-emerald-500", change: "12.4%" },
  { label: "Total Customers", icon: "person", color: "bg-orange-500", change: "8.7%" },
  { label: "Average Order Value", icon: "star", color: "bg-blue-500", change: "6.3%" },
  { label: "Total Profit", icon: "cashbox", color: "bg-violet-600", change: "16.8%" },
];

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });

export default function Dashboard() {
  const navigate = useNavigate();
  const [sales, setSales] = useState<saleslisttype[]>(sampleSales);
  const [inventory, setInventory] = useState<invitemtype[]>([]);

  useEffect(() => {
    Promise.allSettled([GetAllBill(), GetAllInventory()]).then(([billResult, inventoryResult]) => {
      if (billResult.status === "fulfilled" && Array.isArray(billResult.value) && billResult.value.length) setSales(billResult.value);
      if (inventoryResult.status === "fulfilled" && Array.isArray(inventoryResult.value)) setInventory(inventoryResult.value);
    });
  }, []);

  const summary = useMemo(() => {
    const totalSales = sales.reduce((sum, item) => sum + Number(item.total || 0), 0);
    const orders = new Set(sales.map((item) => item.billId)).size || sales.length;
    return [currency.format(totalSales), orders.toLocaleString(), "156", currency.format(orders ? totalSales / orders : 0), currency.format(totalSales * 0.277)];
  }, [sales]);

  const topItems = useMemo(() => {
    const grouped = new Map<string, saleslisttype>();
    sales.forEach((item) => {
      const current = grouped.get(item.itemCode);
      grouped.set(item.itemCode, current ? { ...current, quantity: current.quantity + item.quantity, total: current.total + item.total } : { ...item });
    });
    return [...grouped.values()].sort((a, b) => b.quantity - a.quantity).slice(0, 5);
  }, [sales]);

  const lowStock = useMemo(() => inventory.filter((item) => item.inStock <= 6).sort((a, b) => a.inStock - b.inStock).slice(0, 5), [inventory]);
  const fallbackStock = ["Whole Beans", "Milk", "Chocolate Syrup", "Paper Cups", "Sugar"];

  return (
    <main className="h-full min-h-0 min-w-0 flex-1 overflow-y-auto bg-[#f7f8fc] text-[#11152f]">
      <DashboardTopBar />
      <div className="mx-auto flex max-w-400 flex-col gap-2 p-2 sm:p-3 lg:p-2 lg:px-4">
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {metricCards.map((metric, index) => (
            <article key={metric.label} className="flex min-h-20 items-center gap-2 rounded-md border border-[#e9eaf2] bg-white p-3 shadow-sm">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${metric.color} shadow-md`}>
                <IconPosCafe icon={metric.icon} size={16} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-ss-55 font-medium text-[#555b79] lg:text-ss-60">{metric.label}</p>
                <p className="mt-0.5 truncate text-ss-70 font-bold lg:text-ss-80">{summary[index]}</p>
                <p className="mt-0.5 text-ss-55 text-emerald-600 lg:text-ss-60">↑ {metric.change} <span className="text-[#777c99]">vs last week</span></p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-3 xl:grid-cols-[1.35fr_1fr_1fr]" style={{ minHeight: 'calc(35vh)' }}>
          <Panel className="h-full flex flex-col" title="Sales Overview" action="Daily">
            <div className="flex-1 flex flex-col min-h-0">
              <SalesChart />
              <div className="mt-2 grid grid-cols-2 rounded-md bg-[#f4f1ff] p-2">
                <div><p className="text-ss-55 text-[#666b88]">This Week Sales</p><p className="mt-0.5 text-ss-70 font-bold">{summary[0]}</p></div>
                <div className="border-l border-[#dedbef] pl-3"><p className="text-ss-55 text-[#666b88]">Last Week Sales</p><p className="mt-0.5 text-ss-70 font-bold">{currency.format(Number.parseFloat(summary[0].replace(/[^0-9.]/g, "")) / 1.186 || 0)}</p></div>
              </div>
            </div>
          </Panel>

          <Panel className="h-full flex flex-col" title="Top Selling Items" action="This Week">
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-[#eef0f5] pb-1.5 text-ss-55 text-[#737895] shrink-0">
                <span>Items</span><span>Qty Sold</span><span className="w-20 text-right">Revenue</span>
              </div>
              <div className="flex-1 overflow-y-auto min-h-0">
                {topItems.map((item, index) => {
                  const product = inventory.find((entry) => entry.itemCode === item.itemCode);
                  return <div key={item.itemCode} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-[#f0f1f5] py-2 text-ss-55 lg:text-ss-60">
                    <div className="flex min-w-0 items-center gap-1.5"><span>{index + 1}.</span>{product?.itemImage ? <img src={product.itemImage} alt="" className="h-6 w-6 rounded-md object-contain" /> : <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-50"><IconPosCafe icon="cafe" color="purple" size={14} /></div>}<span className="truncate font-semibold">{item.itemName}</span></div>
                    <span>{item.quantity}</span><span className="w-20 text-right font-medium">{currency.format(item.total)}</span>
                  </div>;
                })}
              </div>
              <DashboardButton onClick={() => navigate("/inventory")}>View All Products</DashboardButton>
            </div>
          </Panel>

          <Panel className="h-full flex flex-col" title="Recent Transactions" action="View All">
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              <div className="flex-1 overflow-y-auto min-h-0">
                {sales.slice(0, 4).map((item, index) => (
                  <div key={`${item.billId}-${index}`} className="flex items-center gap-2 border-b border-[#f0f1f5] py-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-50"><IconPosCafe icon="billing" color="purple" size={12} /></div>
                    <div className="min-w-0 flex-1"><p className="truncate text-ss-55 font-bold lg:text-ss-60">#INV-{String(item.billId).padStart(6, "0")}</p><p className="mt-0.5 text-ss-55 text-[#737895]">Today, {11 + index}:2{index} AM</p></div>
                    <div className="text-right"><p className="text-ss-55 font-bold lg:text-ss-60">{currency.format(item.total)}</p><span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-ss-45 text-emerald-600">Completed</span></div>
                  </div>
                ))}
              </div>
              <DashboardButton onClick={() => navigate("/salesreport")}>View All Transactions</DashboardButton>
            </div>
          </Panel>
        </section>

        <section className="grid gap-3 xl:grid-cols-[1.45fr_1fr]">
          <Panel title="Low Stock Alerts" action="View All Alerts" warning>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {(lowStock.length ? lowStock : fallbackStock).map((item, index) => {
                const product = typeof item === "string" ? undefined : item;
                return <div key={product?.itemCode || String(item)} className="flex min-w-0 items-center gap-1.5 rounded-md border border-[#eceef4] p-1.5">
                  {product?.itemImage ? <img src={product.itemImage} alt="" className="h-8 w-7 shrink-0 object-contain" /> : <div className="flex h-8 w-7 shrink-0 items-center justify-center rounded-sm bg-gray-100"><IconPosCafe icon="inventory" color="black" size={14} /></div>}
                  <div className="min-w-0"><p className="truncate text-ss-55 font-semibold lg:text-ss-60">{product?.itemName || String(item)}</p><p className="mt-0.5 text-ss-55 text-[#777c99]">{product?.unit || "1 unit"}</p><p className="mt-0.5 text-ss-55 font-semibold text-red-500">Stock: {product?.inStock ?? index + 3}</p></div>
                </div>;
              })}
            </div>
          </Panel>

          <Panel title="Quick Actions">
            <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-5 xl:grid-cols-5">
              {[
                ["New Bill", "billing", "/billing", "text-violet-600 bg-violet-50"],
                ["Add Product", "inventory", "/additem", "text-emerald-600 bg-emerald-50"],
                ["New Order", "cart", "/billing", "text-orange-600 bg-orange-50"],
                ["Add Customer", "person", "/users", "text-blue-600 bg-blue-50"],
                ["Reports", "salesreport", "/salesreport", "text-purple-600 bg-purple-50"],
              ].map(([label, icon, path, color]) => (
                <button key={label} onClick={() => navigate(path)} className="flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-md border border-[#e9eaf2] bg-white p-1.5 transition hover:border-violet-300 hover:shadow-sm">
                  <span className={`flex h-7 w- 7 items-center justify-center rounded-full ${color}`}><IconPosCafe icon={icon} color="purple" size={14} /></span>
                  <span className="text-center text-ss-55 font-semibold lg:text-ss-60">{label}</span>
                </button>
              ))}
            </div>
          </Panel>
        </section>
      </div>
      <footer className="mt-1 flex flex-wrap justify-between gap-2 border-t border-[#e3e5ee] bg-white px-4 py-2 text-ss-55 text-[#747a99]"><span>© 2024 POS Cafe. All rights reserved.</span><span>Made with ♥ for your business</span></footer>
    </main>
  );
}

function DashboardTopBar() {
  return <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b border-[#e5e7ef] bg-white/95 px-2 backdrop-blur sm:px-3">
    <IconPosCafe icon="menu" color="black" size={18} />
    <div className="relative max-w-md flex-1"><input className="h-8 w-full rounded-md border border-[#dfe2eb] bg-white pl-8 pr-12 text-ss-45 outline-none focus:border-violet-400" placeholder="Search anything..." /><span className="absolute left-2.5 top-2"><IconPosCafe icon="search" color="purple" size={12} /></span><kbd className="absolute right-1.5 top-1.5 hidden rounded bg-[#f3f2f8] px-1.5 py-0.5 text-ss-35 text-[#737895] sm:block">Ctrl + K</kbd></div>
    <button className="ml-auto hidden h-8 items-center gap-1.5 rounded-md border border-[#dfe2eb] px-2 text-ss-45 font-semibold md:flex"><IconPosCafe icon="calendar" color="purple" size={14} />May 15 - May 21, 2024<IconPosCafe icon="downarrow" color="purple" size={10} /></button>
    <button className="relative flex h-7 w-7 items-center justify-center rounded-full hover:bg-gray-50" aria-label="Notifications"><IconPosCafe icon="error" color="black" size={14} /><span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-violet-600" /></button>
    <div className="flex items-center gap-1.5"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-gpurple text-ss-45 font-bold text-white">AD</span><span className="hidden text-ss-45 font-semibold sm:block">Admin User<small className="mt-0.5 block font-normal text-[#777c99]">Administrator</small></span></div>
  </header>;
}

function Panel({ title, action, warning, className = "", children }: { title: string; action?: string; warning?: boolean; className?: string; children: React.ReactNode }) {
  return <article className={`rounded-md border border-[#e7e9f0] bg-white p-3 shadow-sm ${className}`}><div className="mb-2 flex items-center justify-between gap-2"><h2 className="flex items-center gap-1.5 text-ss-55 font-bold lg:text-ss-60">{warning && <IconPosCafe icon="error" color="red" size={14} />}{title}</h2>{action && <button className={`shrink-0 text-ss-55 font-semibold ${action.includes("View") ? "text-violet-600" : "rounded-md border border-[#dfe2eb] px-2 py-1 text-[#313650]"}`}>{action}{action.includes("View") && "  ›"}</button>}</div>{children}</article>;
}

function DashboardButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button onClick={onClick} className="mt-2 w-full rounded-md border border-[#e1e3ec] py-1.5 text-ss-55 font-semibold text-violet-600 transition hover:bg-violet-50">{children}　›</button>;
}

function SalesChart() {
  return <div><div className="mb-1.5 flex gap-3 text-ss-55 text-[#606681]"><span className="flex items-center gap-0.5"><i className="h-0.5 w-5 bg-violet-600" />Sales (₹)</span><span className="flex items-center gap-0.5"><i className="h-0.5 w-5 border-t-2 border-dotted border-violet-300" />Last Week (₹)</span></div><div className="relative h-36 overflow-hidden"><div className="absolute inset-0 flex flex-col justify-between">{["10K", "8K", "6K", "4K", "2K", "0"].map((label) => <div key={label} className="flex items-center gap-1.5 text-ss-55 text-[#7a809c]"><span className="w-5">{label}</span><i className="h-px flex-1 bg-[#edf0f5]" /></div>)}</div><svg viewBox="0 0 600 190" preserveAspectRatio="none" className="absolute inset-x-6 top-1 h-41.25 w-[calc(100%-2rem)] overflow-visible" aria-label="Weekly sales chart"><path d="M0 88 C55 74 70 116 120 94 S180 16 225 43 S285 148 330 121 S390 79 440 71 S535 61 600 22" fill="none" stroke="#5934f4" strokeWidth="4" /><path d="M0 104 C45 98 74 135 122 110 S180 39 225 62 S282 163 330 132 S390 78 438 92 S530 87 600 55" fill="none" stroke="#b8a7ff" strokeWidth="3" strokeDasharray="5 6" /></svg><div className="absolute bottom-0 left-6 right-0 flex justify-between text-ss-50 text-[#747a98]">{["15 May", "16 May", "17 May", "18 May", "19 May", "20 May", "21 May"].map((day) => <span key={day}>{day}</span>)}</div></div></div>;
}
