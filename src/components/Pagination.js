import React from "react";

const Pagination = ({ page, setPage, hasNextPage }) => {
  const changePage = (amount) => {
    setPage((prevPage) => prevPage + amount);
  };
  return (
    <ul className="flex -mx-4">
      {page !== 1 && (
        <li className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-gray-200">
          <a
            className="flex items-center font-semibold"
            href="#"
            onClick={() => changePage(-1)}
          >
            <span className="mx-1">Previous</span>
          </a>
        </li>
      )}

      {page !== 1 && (
        <li className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-gray-200">
          <a className="font-semibold" href="#" onClick={() => setPage(1)}>
            1
          </a>
        </li>
      )}
      {page > 2 && (
        <li className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-gray-200">
          <a className="font-semibold" href="#">
            ...
          </a>
        </li>
      )}
      {page > 2 && (
        <li className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-gray-200">
          <a className="font-semibold" href="#" onClick={() => changePage(-1)}>
            {page - 1}
          </a>
        </li>
      )}
      <li className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-gray-200">
        <a className="font-semibold" href="#">
          {page}
        </a>
      </li>
      {hasNextPage && (
        <li className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-gray-200">
          <a
            className="font-semibold"
            href="#"
            onClick={() => changePage(page + 1)}
          >
            {page + 1}
          </a>
        </li>
      )}
      {hasNextPage && (
        <li className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-gray-700 hover:text-gray-200">
          <a
            className="flex items-center font-semibold"
            onClick={() => changePage(1)}
          >
            <span className="mx-1">Next</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
