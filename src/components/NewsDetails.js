import { useSelect } from "@mui/base";
import DOMPurify from "dompurify";
import moment from "moment";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, useSearchParams } from "react-router-dom";
import { getNewsItemData } from "../features/comments/newsSlice";
import classes from "./NewsPage/HackerNews.module.css";
import ReactHtmlParser from "react-html-parser";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const NewsDetails = () => {
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();

  console.log("sass====", searchParams.get("newsid"));
  const { newsItem } = useSelector((state) => state.news);

  const newsItemData = useMemo(() => newsItem, [newsItem]);

  console.log(
    "asfsdfasdfasdfasdasfasdfgbafgdbvafwerehafdxgewhwev",
    newsItemData
  );
  const newsId = searchParams.get("newsid");

  const fetchNewsDetails = useCallback(() => {
    if (newsId) {
      dispatch(getNewsItemData({ newsId }));
    }
  }, [newsId]);

  useEffect(() => {
    console.log("==newsId===", newsId);
    fetchNewsDetails();
  }, [fetchNewsDetails]);

  // console.log(newsItemData.children.length);

  return (
    <>
      {newsItemData?.author && (
        <section
          className="w-75 m-auto  mt-3   "
          style={{ background: "#f3f4eb" }}
        >
          <div className="mx-2">
            <div className="d-flex">
              <div>
                <a href="#">
                  <span className={classes.spanValue}>
                    {newsItemData.author}
                  </span>
                </a>
              </div>

              <div>
                <a href="#">
                  <span className={classes.spanValue}>
                    <span className="mx-1"> |</span>
                    on {moment().diff(newsItemData.created_at, "years")}
                  </span>
                </a>
              </div>
              <div>
                <a href="#">
                  <span className={classes.spanValue}>
                    <span className="mx-1">| </span>
                    parent
                  </span>
                </a>
              </div>
            </div>
            <div>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "normal",
                  fontWeight: "400",
                  color: "#000",
                }}
              >
                {ReactHtmlParser(DOMPurify.sanitize(newsItemData.text))}
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NewsDetails;

const renderItemList = ({ newsItemData }) => {
  return (
    <>
      {newsItemData.children((item) => {
        <section
          className="w-75 m-auto  mt-3   "
          style={{ background: "#f3f4eb" }}
        >
          <div className="mx-2">
            <div className="d-flex">
              <div>
                <a href="#">
                  <span className={classes.spanValue}>
                    {newsItemData.author}
                  </span>
                </a>
              </div>

              <div>
                <a href="#">
                  <span className={classes.spanValue}>
                    <span className="mx-1"> |</span>
                    on {moment().diff(newsItemData.created_at, "years")}
                  </span>
                </a>
              </div>
              <div>
                <a href="#">
                  <span className={classes.spanValue}>
                    <span className="mx-1">| </span>
                    parent
                  </span>
                </a>
              </div>
            </div>
            <div>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "normal",
                  fontWeight: "400",
                  color: "#000",
                }}
              >
                {ReactHtmlParser(DOMPurify.sanitize(newsItemData.text))}
              </span>
            </div>
          </div>
        </section>;
      })}
    </>
  );
};
