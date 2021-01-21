import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paginate = ({ postsPerPage, totalPosts, changePages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.floor(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const NumberOfPages = totalPosts / postsPerPage;
  return (
    <div className="container m-5 p-2">
      {/* <Pagination
        count={totalPosts.length % 10 === 0 ? NumberOfPages : NumberOfPages}
        onChange={() => changePages(NumberOfPages)}
        variant="outlined"
        shape="rounded"
      /> */}
      <ul className="pagination">
        <li class="page-item">
          <a class="page-link" href="!#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => changePages(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}

        <li class="page-item">
          <a class="page-link" href="!#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
