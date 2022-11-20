import React from "react";
import classes from "./HackerNews.module.css";

const FilterNews = ({ selectHandeler, searchResult, searchTime }) => {
  return (
    <div className={classes.filter_container}>
      <div className={classes.drop_downFilter}>
        <div>
          <span>search</span>
          <select
            className={classes.dropDown_select}
            aria-label="Default select example"
            // onSelect={selectHandeler}
            onChange={selectHandeler}
          >
            <option value="All">All</option>
            <option value="story">Stories</option>
            <option value="comment">Comments</option>
          </select>
        </div>
        <div>
          <span>by</span>
          <select
            className={classes.dropDown_select}
            aria-label="Default select example"
          >
            <option value="1">Popularity</option>
            <option value="1">Date</option>
          </select>
        </div>
        <div>
          <span>for</span>
          <select
            className={classes.dropDown_select}
            aria-label="Default select example"
          >
            <option defaultValue>All time</option>
            <option value="1">Last 24h</option>
            <option value="2">Past Week</option>
            <option value="3">Past Month</option>
            <option value="3">Past Year</option>
            <option value="3">Custom Range</option>
          </select>
        </div>
      </div>
      <div className={classes.filterValue}>
        <p>
          {" "}
          {searchResult} results ({searchTime} milliseconds)
        </p>
      </div>
    </div>
  );
};

export default FilterNews;
