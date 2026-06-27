
export function getPageNumbers(totalPages: number, currentPage: number) {
  const maxpages = 5;
  let start = Math.max(1, currentPage - Math.floor(maxpages / 2));
  const end = Math.min(totalPages, start + maxpages - 1);
  const pageNumbers: Array<number | string> = [];

  if (end - start < maxpages - 1) {
    start = Math.max(1, end - maxpages + 1);
  }

  if (start > 1) {
    pageNumbers.push(1);
    if (start > 2) pageNumbers.push("...");
  }

  for (let page = start; page <= end; page++) {
    pageNumbers.push(page);
  }

  if (end < totalPages) {
    if (end < totalPages - 1) pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
}

export function getPaginatedItems<T>(items: T[], currentPage: number, itemsPerPage: number) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return items.slice(startIndex, endIndex);
}
