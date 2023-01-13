import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  deletePokemons,
  getAllPokemons,
} from "../store/reducers/pokemons.reducer";

function PaginatedItems({ itemsPerPage }) {
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    // dispatch(changePage(event.selected * 10));
    dispatch(deletePokemons());
    dispatch(getAllPokemons(event.selected * 10));
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={128}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="contents uppercase stylePagination"
        activeLinkClassName={"active"}
      />
    </>
  );
}

export default PaginatedItems;
