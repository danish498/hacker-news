import React, { Component, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Mark from "mark.js";
import NewsData from "./NewsPage/NewsData";

export const SearchHighligh = ({ newsList, searchText }) => {
  const markInstance = useRef();

  useEffect(() => {
    if (newsList?.length && searchText) {
      handleSeach(searchText);
    }
  }, [newsList, searchText]);

  const handleSeach = (_searchText) => {
    markInstance.current = new Mark(document.querySelector("#search-node"));
    markInstance.current.unmark({
      done: () => {
        markInstance.current.mark(_searchText);
      },
    });
  };

  return (
    <div>
      <div id="search-node">
        <NewsData newsList={newsList} searchText={searchText} />
      </div>
    </div>
  );
};
