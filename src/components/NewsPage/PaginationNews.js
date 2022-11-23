import React, { useMemo } from "react";

import classes from "./HackerNews.module.css";

const PaginationNews = ({ nbPages, setCurrentPage, currentPage }) => {
  console.log("cuuuuuernt page", currentPage);

  const result = useMemo(() => {
    return new Array(nbPages).fill(true).map((e, i) => i + 1);
  }, [nbPages]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center p-8 flex-wrap text-muted">
        <li
          className="page-item text-muted"
          onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <a className="page-link text-muted " aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            {/* <span className="sr-only">Previous</span> */}
          </a>
        </li>
        {result.map((page) => {
          return (
            <li
              className="page-item"
              onClick={() => setCurrentPage(page)}
              style={{ display: page > 5 ? "none" : "inline-flex" }}
              key={page}
            >
              <a className="page-link text-muted">{page}</a>
            </li>
          );
        })}

        <li
          className="page-item"
          onClick={() => {
            if (currentPage < nbPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <a className="page-link text-muted" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            {/* <span className="sr-only">Next</span> */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationNews;

////////////////////////////////////////////////////////////////////////////////////////////////////

// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// export const PaginationNews = ({ nbPages, setCurrentPage, currentPage }) => {
//   console.log(currentPage);

//   const paginationHandeler = (e, p) => {
//     console.log("what woyuld be event targt value", p);
//     if (currentPage < nbPages) {
//       setCurrentPage(currentPage + 1);
//     } else if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <Stack spacing={2}>
//       <Pagination
//         className="pagination d-flex justify-content-center p-8 flex-wrap text-muted"
//         count={nbPages}
//         shape="rounded"
//         onClick={paginationHandeler}
//       />
//     </Stack>
//   );
// };

// export default PaginationNews;
