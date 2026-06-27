import type { invitemtype } from "../../Types/Types";

type ProductGridProps = {
  items: invitemtype[];
  onSelectItem: (item: invitemtype) => void;
};

export function ProductGrid({ items, onSelectItem }: ProductGridProps) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden relative overflow-y-scroll scrollbar-none five">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2.5 p-3.5 lg:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
        {items.map((item) => (
          <div
            key={item.itemCode}
            className="flex flex-col rounded-md items-center aspect-square p-2 relative shadow-sm shadow-gray-100 border border-gray-100"
            onClick={() => onSelectItem(item)}
          >
            <div className={`absolute top-1 left-1 ${item.inStock != 0 ? "bg-ipurple" : "bg-ired"} text-white text-ss-45 font-bold rounded-sm flex items-center justify-center h-4 z-10 aspect-square`}>
              <div className="h-min w-min">
                {item.inStock}
              </div>
            </div>
            <img src={item.itemImage} className="absolute h-9/12" />
            <div className="absolute flex flex-col w-full h-7 items-center justify-center bottom-0 bg-white rounded-md lg:h-2/5">
              <span className="text-ss-40 relative w-full text-center lg:text-ss-50">{item.itemName}</span>
              <span className="font-noto text-ss-40 text-gray-700 text-thin relative lg:text-ss-50">{""}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
