import { IconPosCafe } from "../../Helper/icons";

type MenuToolbarProps = {
  activeView: string;
  onSearch: (value: string) => void;
  onViewChange: (view: string) => void;
};

export function MenuToolbar({ activeView, onSearch, onViewChange }: MenuToolbarProps) {
  return (
    <div className="overflow-hidden scrollbar-none flex w-full h-full items-center justify-end gap-2.5 two">
      <input
        type="text"
        className="bg-white w-full border border-gray-100 shadow-sm shadow-gray-200 text-gray-800 p-2.5 bg-position-[8px] pl-7 rounded-lg font-roboto text-ss-45 bg-search bg-no-repeat bg-size-[1rem] lg:text-ss-60 xl:text-ss-70 lg:rounded-xl"
        name="search"
        placeholder="Search menu items..."
        autoComplete="off"
        onChange={(event) => onSearch(event.target.value)}
      />
      <div className="h-full w-fit flex items-center justify-center">
        <div
          className={`w-auto h-9/12 lg:h-11/12 flex items-center justify-center aspect-4/3 rounded-md shadow-sm ${activeView === "grid" ? "bg-gpurple-reverse" : ""}`}
          onClick={() => onViewChange("grid")}
        >
          <IconPosCafe icon="grid" color={activeView === "grid" ? "white" : "black"} size={14} />
        </div>
        <div
          className={`bg-white w-auto h-9/12 lg:h-11/12 flex items-center justify-center aspect-4/3 rounded-md shadow-sm ${activeView === "list" ? "bg-gpurple-reverse" : ""}`}
          onClick={() => onViewChange("list")}
        >
          <IconPosCafe icon="list" color={activeView === "list" ? "white" : "black"} size={16} />
        </div>
      </div>
    </div>
  );
}
