import React, { useState, useMemo, useEffect } from "react";

export interface Column<T> {
  header: React.ReactNode;
  key?: string; // unique key for the column
  align?: "left" | "center" | "right";
  sortable?: boolean;
  sortKey?: string; // key of row to sort by, defaults to key
  render?: (row: T, index: number) => React.ReactNode;
  className?: string; // custom class for cells
  headerClassName?: string; // custom class for headers
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T, index: number) => void;
  rowClassName?: string | ((row: T, index: number) => string);
  // Optional controlled sorting
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  onSort?: (key: string, order: "asc" | "desc") => void;
  // Layout customization
  className?: string; // wrapper class
  tableClassName?: string; // <table> element class
  theadClassName?: string; // <thead> row class
  tbodyClassName?: string; // <tbody> element class
  emptyMessage?: string; // message when data is empty
}

// Internal reusable SortIcon component
interface SortIconProps {
  active: boolean;
  order: "asc" | "desc";
}

function SortIcon({ active, order }: SortIconProps) {
  return (
    <div className="inline-flex flex-col ml-1.5 justify-center opacity-70 hover:opacity-100 transition-opacity">
      {/* Up arrow */}
      <svg
        className={`w-2 h-1.5 ${active && order === "asc" ? "fill-purple-600 text-purple-600" : "fill-gray-400 text-gray-400"}`}
        viewBox="0 0 10 6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 0L10 6H0L5 0Z" />
      </svg>
      {/* Down arrow */}
      <svg
        className={`w-2 h-1.5 mt-0.5 ${active && order === "desc" ? "fill-purple-600 text-purple-600" : "fill-gray-400 text-gray-400"}`}
        viewBox="0 0 10 6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 6L0 0H10L5 6Z" />
      </svg>
    </div>
  );
}

export default function TableComponent<T>({
  columns,
  data,
  onRowClick,
  rowClassName,
  sortBy,
  sortOrder,
  onSort,
  className = "w-full flex min-h-0 flex-1 flex-col gap-3 p-3",
  tableClassName = "min-w-full divide-y divide-gray-100 text-left border-collapse",
  theadClassName = "bg-gray-50/70",
  tbodyClassName = "divide-y divide-gray-100 bg-white",
  emptyMessage = "No entries found",
}: TableProps<T>) {
  // Local sort state (used if uncontrolled sorting is active)
  const [localSortBy, setLocalSortBy] = useState<string | undefined>(sortBy);
  const [localSortOrder, setLocalSortOrder] = useState<"asc" | "desc">(sortOrder || "asc");

  // Sync state with incoming props if they change
  useEffect(() => {
    if (sortBy !== undefined) {
      setLocalSortBy(sortBy);
    }
  }, [sortBy]);

  useEffect(() => {
    if (sortOrder !== undefined) {
      setLocalSortOrder(sortOrder);
    }
  }, [sortOrder]);

  const handleHeaderClick = (column: Column<T>) => {
    if (!column.sortable) return;

    const sortKey = column.sortKey || column.key;
    if (!sortKey) return;

    let nextOrder: "asc" | "desc" = "asc";
    const currentSortBy = onSort ? sortBy : localSortBy;
    const currentSortOrder = onSort ? sortOrder : localSortOrder;

    if (currentSortBy === sortKey) {
      nextOrder = currentSortOrder === "asc" ? "desc" : "asc";
    }

    if (onSort) {
      onSort(sortKey, nextOrder);
    } else {
      setLocalSortBy(sortKey);
      setLocalSortOrder(nextOrder);
    }
  };

  // Perform local sorting if uncontrolled and sortBy is set
  const sortedData = useMemo(() => {
    const activeSortBy = onSort ? sortBy : localSortBy;
    const activeSortOrder = onSort ? sortOrder : localSortOrder;

    if (onSort || !activeSortBy) {
      return data;
    }

    const sorted = [...data];
    sorted.sort((a, b) => {
      let valA = (a as any)[activeSortBy];
      let valB = (b as any)[activeSortBy];

      if (valA === valB) return 0;
      if (valA === undefined || valA === null) return 1;
      if (valB === undefined || valB === null) return -1;

      // Number comparison
      if (typeof valA === "number" && typeof valB === "number") {
        return activeSortOrder === "asc" ? valA - valB : valB - valA;
      }

      // Date comparison detection
      const dateA = Date.parse(valA);
      const dateB = Date.parse(valB);
      if (!isNaN(dateA) && !isNaN(dateB) && typeof valA === "string" && typeof valB === "string" && valA.includes("-")) {
        return activeSortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }

      // String fallback comparison
      const strA = String(valA).toLowerCase();
      const strB = String(valB).toLowerCase();

      if (strA < strB) return activeSortOrder === "asc" ? -1 : 1;
      if (strA > strB) return activeSortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, localSortBy, localSortOrder, sortBy, sortOrder, onSort]);

  const getAlignClass = (align?: "left" | "center" | "right") => {
    if (align === "center") return "text-center";
    if (align === "right") return "text-right";
    return "text-left";
  };

  const getJustifyClass = (align?: "left" | "center" | "right") => {
    if (align === "center") return "justify-center";
    if (align === "right") return "justify-end";
    return "justify-start";
  };

  const isClickable = !!onRowClick;
  const currentSortBy = onSort ? sortBy : localSortBy;
  const currentSortOrder = (onSort ? sortOrder : localSortOrder) || "asc";

  return (
    <div className={className}>
      <div className="inventory-table-scroll w-full overflow-auto border border-[#e4e7f4] rounded-sm bg-white">
        <table className={tableClassName}>
          <thead>
            <tr className={theadClassName}>
              {columns.map((column, index) => {
                const alignClass = getAlignClass(column.align);
                const isSortable = column.sortable && (column.key || column.sortKey);
                const activeSortKey = column.sortKey || column.key;
                const isCurrentSort = activeSortKey !== undefined && currentSortBy === activeSortKey;

                return (
                  <th
                    key={column.key || index}
                    className={`px-4 py-3 text-ss-55 font-bold uppercase tracking-wider text-gray-500 select-none ${alignClass} ${column.headerClassName || ""}`}
                    onClick={() => isSortable && handleHeaderClick(column)}
                    style={{ cursor: isSortable ? "pointer" : "default" }}
                  >
                    <div className={`inline-flex items-center ${getJustifyClass(column.align)}`}>
                      <span>{column.header}</span>
                      {isSortable && activeSortKey && (
                        <SortIcon active={isCurrentSort} order={isCurrentSort ? currentSortOrder : "asc"} />
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className={tbodyClassName}>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-ss-55 text-gray-500 font-medium">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              sortedData.map((row, rowIndex) => {
                const finalRowClassName =
                  typeof rowClassName === "function"
                    ? rowClassName(row, rowIndex)
                    : rowClassName ||
                      `hover:bg-violet-50/30 border-b border-gray-100 transition-colors duration-150 group ${isClickable ? "cursor-pointer" : ""}`;

                return (
                  <tr
                    key={rowIndex}
                    className={finalRowClassName}
                    onClick={() => onRowClick && onRowClick(row, rowIndex)}
                  >
                    {columns.map((column, colIndex) => {
                      const alignClass = getAlignClass(column.align);
                      return (
                        <td
                          key={column.key || colIndex}
                          className={`px-4 py-3 whitespace-nowrap text-ss-55 text-gray-900 ${alignClass} ${column.className || ""}`}
                        >
                          {column.render ? column.render(row, rowIndex) : String((row as any)[column.key || ""] || "")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
