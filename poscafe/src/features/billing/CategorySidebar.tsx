import { inventoryCategories } from "../../data/initialInventory";
import { IconPosCafe } from "../../Helper/icons";

type CategorySidebarProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function CategorySidebar({ activeCategory, onCategoryChange }: CategorySidebarProps) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden scrollbar-none four">
      <div className="w-full flex flex-col overflow-hidden scrollbar-none text-black relative h-full gap-2 p-1 md:p-3.5">
        {inventoryCategories.map((category) => (
          <div
            key={category.name}
            className={`flex items-center justify-start gap-2 px-2 py-2 lg:py-3 lg:px-4 rounded-md ${activeCategory === category.name ? "bg-gpurple text-white" : ""}`}
            onClick={() => onCategoryChange(category.name)}
          >
            <IconPosCafe icon={category.icon} size={14} color={activeCategory === category.name ? undefined : "black"} />
            <span className="text-ss-45 xl:text-ss-60">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
