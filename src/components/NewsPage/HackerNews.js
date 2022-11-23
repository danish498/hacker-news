import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../features/comments/newsSlice";
import Highlighter from "react-highlight-words";
import FilterNews from "./FilterNews";

import classes from "./HackerNews.module.css";
import Header from "./Header";
import NewsData from "./NewsData";
import PaginationNews from "./PaginationNews";
import { SearchHighligh } from "../SearchHighligth";
import setCookie from "../Hooks/setCookie";

const HackerNews = () => {
  const { newsData } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("story"); // filter
  const [searchText, setSearchText] = useState("");
  const [nbPages, setNbPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResult, setSearchResult] = useState(0);
  const [searchTime, setSearchTime] = useState(0);
  const [filterBy, setFilterBy] = useState("search");
  const [searchByLastTime, setSeachByLastTime] = useState(0);

  const [searchdHistory, setSearchdHistory] = useState();

  const selectHandeler = (item) => {
    setFilter(item.target.value);
  };

  const selectHandlerDate = (event) => {
    // console.log(typeof event.target.value);
    if (event.target.value === "story") {
      setFilterBy("search_by_date");
      setFilter(event.target.value);
    } else {
      setFilterBy("search");
      setFilter("story");
    }
  };

  const onSearch = (text) => {
    // text.preventDefault();
    // console.log("event value searcjh", text);

    setSearchText(text);

    // const searchedText = searchText?.length && searchText;
    // console.log(searchedText);
  };

  /////////////////
  // setCookie("userHistory", JSON.stringify(searchText));

  useEffect(() => {
    const searchData = [];

    // sessionStorage.setItem("userHIstory", searchText);

    localStorage.setItem("userHistory", JSON.stringify([searchText]));
  }, [searchText]);

  ///////////////////////////////

  useEffect(() => {
    requestFilterNews();
  }, [filter, searchText, currentPage, filterBy, searchByLastTime]);

  console.log("data form hacker news", newsData);

  const requestFilterNews = useCallback(
    async (isReset = false) => {
      console.log("check this out", filter);
      const newsSearch = {
        filterBy: filterBy && filterBy,
        tags: filter && filter, // for dropdown
        query: searchText && searchText,
        page: currentPage && currentPage,
        numericFilters: searchByLastTime && `created_at_i>${searchByLastTime}`,
      };
      dispatch(getNewsData(newsSearch));

      // if (filterBy === "sort_by_date") {
      //   dispatch(getNewsData("sort_by_date", newsSearch));
      // }
      //  else {
      //   if (filter === "All") {
      //     dispatch(getNewsData(newsSearch)); //  On bydefault
      //   } else {
      //     dispatch(getNewsData(!isReset && newsSearch));
      //   }
      // }
    },
    [filter, searchText, currentPage, dispatch, filterBy, searchByLastTime]
  );

  const newsList = useMemo(() => {
    if (newsData?.nbPages) setNbPages(newsData.nbPages);
    if (newsData?.nbHits) setSearchResult(newsData.nbHits);
    if (newsData?.processingTimeMS) setSearchTime(newsData.processingTimeMS);
    return newsData?.hits?.length ? newsData.hits : [];
  }, [newsData]);

  useEffect(() => {
    // console/log()
    requestFilterNews(true);
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Header onSearch={onSearch} />
        <FilterNews
          selectHandeler={selectHandeler}
          searchResult={searchResult}
          setSeachByLastTime={setSeachByLastTime}
          searchTime={searchTime}
          setFilterBy={setFilterBy}
          selectHandlerDate={selectHandlerDate}
          // filterBy={filterBy}
        />
        <SearchHighligh newsList={newsList} searchText={searchText} />
        <PaginationNews
          nbPages={nbPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default HackerNews;
