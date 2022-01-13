import React from "react";

export const AppPagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
  const pagesCount = Math.ceil(length / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <div>
        <ul className="pagination pagination-sm">
          <li className={"page-item " + (currentPage === 1 && "disabled")}>
            <button
              onClick={() => onPageChanged(currentPage - 1)}
              className="page-link">
              &laquo;
            </button>
          </li>
          {pages.map(page => (
              <li className={"page-item " + (currentPage === page && "active")} key={page}>
                <button
                  onClick={() => onPageChanged(page)}
                  className="page-link">{page}</button>
              </li>
            )
          )}
          <li className={"page-item " + (currentPage === pagesCount && "disabled")}>
            <button onClick={() => onPageChanged(currentPage + 1)} className="page-link">&raquo;</button>
          </li>
        </ul>
      </div>
    </>
  )
};

AppPagination.getDate = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  return items.slice(start, start + itemsPerPage);
};
