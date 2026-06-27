import { IconPosCafe } from "../../Helper/icons";
import type { invitemtype, InventoryFilterData } from "../../Types/Types";

type InventoryFilterBarProps = {
  allInventory: invitemtype[];
  filterData: InventoryFilterData;
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onFilter: () => void;
  onReset: () => void;
};

export function InventoryFilterBar({ allInventory, filterData, onFilterChange, onFilter, onReset }: InventoryFilterBarProps) {
  const categories = Array.from(new Set(allInventory.map((item) => item.category)));
  const itemNames = Array.from(new Set(allInventory.map((item) => item.itemName)));

  return (
    <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-2 justify-between gap-2">
      <FilterSelect label="Category" name="category" value={filterData.category} onChange={onFilterChange} icon="allitems">
        <option value="">All Category</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect label="Item Name" name="item" value={filterData.item} onChange={onFilterChange}>
        <option value="">All Items</option>
        {itemNames.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect label="Status" name="status" value={filterData.status} onChange={onFilterChange}>
        <option value="">All Status</option>
        <option value="In Stock">In Stock</option>
        <option value="Low Stock">Low Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </FilterSelect>
      <DateFilter label="Date From" name="dateFrom" value={filterData.dateFrom} onChange={onFilterChange} />
      <DateFilter label="Date To" name="dateTo" value={filterData.dateTo} onChange={onFilterChange} />
      <div className="flex h-full items-end gap-2  max-[820px]:gap-1">
        <div
          className="bg-gpurple flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200 max-[820px]:p-3"
          id="inventory-action-filter"
          onClick={onFilter}
        >
          <IconPosCafe color="white" icon="filter" />
          <span className="text-white text-ss-50 max-[820px]:text-ss-45">Filter</span>
        </div>
        <div
          className="flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200 max-[820px]:p-3"
          id="inventory-action-reset"
          onClick={onReset}
        >
          <IconPosCafe color="black" icon="reset" />
          <span className="text-black text-ss-50 max-[820px]:text-ss-45">Reset</span>
        </div>
      </div>
    </div>
  );
}

type FilterSelectProps = {
  label: string;
  name: string;
  value: string;
  icon?: string;
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function FilterSelect({ label, name, value, icon, children, onChange }: FilterSelectProps) {
  return (
    <div className="border-0 w-full">
      <div className="text-ss-50 text-gray-500 max-[820px]:text-ss-45">{label}</div>
      <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200 max-[820px]:p-1">
        <IconPosCafe color="black" icon={icon} size={12} />
        <select name={name} className="opg-select w-full" value={value} onChange={onChange}>
          {children}
        </select>
      </div>
    </div>
  );
}

type DateFilterProps = {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function DateFilter({ label, name, value, onChange }: DateFilterProps) {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <div className="text-ss-50 text-gray-500 max-[820px]:text-ss-45">{label}</div>
      <input
        className="border border-gray-200 rounded-md w-full p-2 max-[820px]:p-1 max-[820px]:text-ss-50"
        type="date"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
