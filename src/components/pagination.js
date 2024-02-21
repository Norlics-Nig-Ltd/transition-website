import { useEffect, useState } from "react";

const Pagination = ({
  comments,
  commentsPerPage,
  totalComments,
  currentPage,
  setCurrentPage,
  currentComments,
}) => {
  const [pageNumbers, setPageNumbers] = useState(null);
  const [activePage, setActivePage] = useState();

  useEffect(() => {
    setPageNumbers(Math.ceil(totalComments / commentsPerPage));
  }, [totalComments, commentsPerPage, currentPage, setCurrentPage]);

  const handleClick = (pageNumbers) => {
    setCurrentPage(pageNumbers);
    setActivePage(pageNumbers);
  };
  return (
    <nav className="flex items-center justify-between ">
      <h1>
        Showing {currentPage * 10 - 9} - {currentPage * 10} out of{" "}
        {totalComments}{" "}
      </h1>
      <ul className="flex gap-5 text-xl ">
        {Array(pageNumbers)
          .fill(0)
          .map((_, i) => (
            <li
              key={i}
              className={`w-12 border border-[#3f3f3f]  bg-[#3f3f3f] p-2 rounded-md text-center ${
                activePage === i + 1
                  ? "bg-white text-black"
                  : "bg-[#3f3f3f] text-white"
              }`}
            >
              <button onClick={() => handleClick(i + 1)}>{i + 1}</button>
            </li>
          ))}
      </ul>
      <p>Result per page {currentComments?.length}</p>
    </nav>
  );
};

export default Pagination;
