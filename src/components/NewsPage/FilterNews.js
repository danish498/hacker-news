import React from "react";
import { timeValue } from "../../app/staticData";
import classes from "./HackerNews.module.css";

const FilterNews = ({
  setSeachByLastTime,
  selectHandeler,
  searchResult,
  searchTime,
  setFilterBy,
  selectHandlerDate,
}) => {
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
            <option value="story">All</option>
            <option value="story" selected>
              Stories
            </option>
            <option value="comment">Comments</option>
          </select>
        </div>
        <div>
          <span>by</span>
          <select
            className={classes.dropDown_select}
            aria-label="Default select example"
            onChange={selectHandlerDate}
          >
            <option value="1">Popularity</option>
            <option value="story">Date</option>
          </select>
        </div>
        <div>
          <span>for</span>
          <select
            className={classes.dropDown_select}
            aria-label="Default select example"
            onChange={(event) => {
              const selectecValue = event.target.value;
              if (selectecValue === 0) {
                // setSeachByLastTime(0);
                setFilterBy("search");
              } else {
                setSeachByLastTime(selectecValue);
                setFilterBy("search_by_date");
              }
            }}
          >
            {timeValue.map((inpt) => (
              <option value={inpt.value}>{inpt.label}</option>
            ))}
            <option>check</option>
            {/* <option value="1">Last 24h</option>
            <option value="2">Past Week</option>
            <option value="3">Past Month</option>
            <option value="3">Past Year</option>
            <option value="3">Custom Range</option> */}
          </select>
        </div>
      </div>
      <div className={classes.filterValue}>
        <p>
          {searchResult} results ({((searchTime / 1000) % 60).toFixed(3)}
          seconds )
        </p>
      </div>
    </div>
  );
};

export default FilterNews;
