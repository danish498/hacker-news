import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentData, getNewsData } from "../../features/comments/newsSlice";
import { getStoesData } from "../../features/stories/storiesSlice";
import FilterNews from "./FilterNews";

import classes from "./HackerNews.module.css";
import Header from "./Header";
import NewsData from "./NewsData";
import PaginationNews from "./PaginationNews";

const HackerNews = () => {
  const { newsData } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(); // filter
  const [searchText, setSearchText] = useState("");
  const [nbPages, setNbPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResult, setSearchResult] = useState(0);
  const [searchTime, setSearchTime] = useState(0);

  const selectHandeler = (item) => {
    console.log("item", item.target.value);
    setSearch(item.target.value);
  };

  useEffect(() => {
    if (search) {
      requestFilterNews();
    }
  }, [search, searchText, currentPage]);

  console.log("data form hacker news", newsData);

  const newsList = useMemo(() => {
    if (newsData?.nbPages) setNbPages(newsData.nbPages);
    if (newsData?.nbHits) setSearchResult(newsData.nbHits);
    if (newsData?.processingTimeMS) setSearchTime(newsData.processingTimeMS);
    return newsData?.hits?.length ? newsData.hits : [];
  }, [newsData]);

  const requestFilterNews = useCallback(
    async (isReset = false) => {
      console.log("check this out", search);
      const newsSearch = {
        tags: search && search,
        query: searchText && searchText,
        page: currentPage && currentPage,
      };
      if (search === "All") {
        dispatch(getNewsData());
      } else {
        dispatch(getNewsData(!isReset && newsSearch));
      }
    },
    [search, searchText, currentPage]
  );

  useEffect(() => {
    // console/log()
    requestFilterNews(true);
  }, []);

  const onSearch = (text) => {
    // text.preventDefault();
    console.log("event value searcjh", text);
    setSearchText(text);
  };

  return (
    <>
      <div className={classes.container}>
        <Header onSearch={onSearch} />
        <FilterNews
          selectHandeler={selectHandeler}
          searchResult={searchResult}
          searchTime={searchTime}
        />
        <NewsData newsList={newsList} />
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
