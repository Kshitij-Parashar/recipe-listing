import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

/** Represents Pagination component for applying pagination to categories grid and recipes list */
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const [page, setPage] = useState(currentPage);

  /** Calculates page based on action passed: prev or next */
  const pagination = (action) => {
    switch (action) {
      case 'next':
        const nextPage =
          currentPage < totalPages ? currentPage + 1 : currentPage;
        setPage(nextPage);
        paginate(nextPage);
        break;
      case 'prev':
        const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;
        setPage(prevPage);
        paginate(prevPage);
        break;
      default:
        break;
    }
  }

  return (
    /** hidden div just for the purpose of unit test */
    <>
      <input
        id="currentPage"
        value={page}
        onChange={(val) => val}
        className="hide"
      />
      <div className="pagination">
        <button
          onClick={() => {
            pagination('prev');
          }}
          className="previous"
          id="prevPage"
        >
          &laquo; Prev
        </button>
        <button
          onClick={() => {
            pagination('next');
          }}
          id="nextPage"
          className="next"
        >
          Next &raquo;
        </button>
      </div>
    </>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
