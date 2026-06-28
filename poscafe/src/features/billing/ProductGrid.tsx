import type { invitemtype } from "../../Types/Types";

type ProductGridProps = {
  items: invitemtype[];
  activeView: string;
  onSelectItem: (item: invitemtype) => void;
};

export function ProductGrid({ items, activeView, onSelectItem }: ProductGridProps) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden relative overflow-y-scroll scrollbar-none five">
      <div
        className={
          activeView === "list"
            ? "flex flex-col gap-2 p-3.5"
            : "grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2.5 p-3.5 lg:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]"
        }
      >
        {items.map((item) => (
          <button
            type="button"
            key={item.itemCode}
            className={
              activeView === "list"
                ? "flex min-h-16 w-full items-center gap-3 rounded-md border border-gray-100 p-2 text-left shadow-sm shadow-gray-100 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                : "flex flex-col rounded-md items-center aspect-square p-2 relative shadow-sm shadow-gray-100 border border-gray-100 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            }
            onClick={() => onSelectItem(item)}
            disabled={item.inStock === 0}
          >
            {activeView === "list" ? (
              <>
                <img src={item.itemImage} alt="" className="h-12 w-12 shrink-0 rounded-md object-contain" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-ss-55 font-semibold text-gray-900 lg:text-ss-65">{item.itemName}</div>
                  <div className="truncate text-ss-45 text-gray-500 lg:text-ss-55">{item.category}</div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="font-noto text-ss-55 font-semibold text-gray-800 lg:text-ss-65">₹{item.price}</span>
                  <span className={`${item.inStock !== 0 ? "bg-purple-100 text-purple-700" : "bg-red-100 text-red-600"} rounded-sm px-2 py-0.5 text-ss-40 font-bold lg:text-ss-50`}>
                    {item.inStock} in stock
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className={`absolute top-1 left-1 ${item.inStock != 0 ? "bg-ipurple" : "bg-ired"} text-white text-ss-45 font-bold rounded-sm flex items-center justify-center h-4 z-10 aspect-square`}>
                  <div className="h-min w-min">{item.inStock}</div>
                </div>
                <img src={item.itemImage} alt="" className="absolute h-9/12 object-contain" />
                <div className="absolute flex flex-col w-full h-7 items-center justify-center bottom-0 bg-white rounded-md lg:h-2/5">
                  <span className="text-ss-40 relative w-full truncate px-1 text-center lg:text-ss-50">{item.itemName}</span>
                  <span className="font-noto text-ss-40 text-gray-700 text-thin relative lg:text-ss-50">₹{item.price}</span>
                </div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
