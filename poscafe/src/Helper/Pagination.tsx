import { IconPosCafe } from "./icons";
import { getPageNumbers } from "./PaginationUtils";

type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  itemLabel: string;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (value: number) => void;
};

export function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  itemLabel,
  setCurrentPage,
  setItemsPerPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageNumbers = getPageNumbers(totalPages, currentPage);

  function handleItemsPerPageChange(value: number) {
    setItemsPerPage(value);
    setCurrentPage(1);
  }

  function handlePageChange(page: number | string) {
    if (typeof page === "number") {
      setCurrentPage(page);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center">
        <div className="text-ss-55 max-[820px]:text-ss-50">show</div>
        <select
          id="entriescount"
          className="border border-gray-200 text-ss-65 p-1 rounded-sm mx-2 max-[820px]:text-ss-50"
          value={itemsPerPage}
          onChange={(event) => handleItemsPerPageChange(parseInt(event.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <div className="text-ss-55 max-[820px]:text-ss-50">entries</div>
      </div>
      <div className="flex items-center gap-2 max-[820px]:gap-1">
        <PageIcon icon="dleft" onClick={() => setCurrentPage(1)} />
        <PageIcon icon="left" onClick={handlePreviousPage} />
        {pageNumbers.map((page, index) => (
          <div
            key={`${page}-${index}`}
            className={`p-2.5 max-[820px]:p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer ${page === currentPage ? "bg-gpurple text-white" : ""} ${page === "..." ? "cursor-default" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </div>
        ))}
        <PageIcon icon="right" onClick={handleNextPage} />
        <PageIcon icon="dright" onClick={() => setCurrentPage(totalPages)} />
      </div>
      <div className="align-tshow flex items-center">
        <div className="flex items-center max-[820px]:justify-center">
          <div className="text-ss-55 max-[820px]:text-ss-50">
            showing {totalItems === 0 ? 0 : startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} {itemLabel}
          </div>
        </div>
      </div>
    </div>
  );
}

type PageIconProps = {
  icon: string;
  onClick: () => void;
};

function PageIcon({ icon, onClick }: PageIconProps) {
  return (
    <div
      className="p-2 max-[820px]:p-1.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <IconPosCafe icon={icon} color="black" size={12} />
    </div>
  );
}
