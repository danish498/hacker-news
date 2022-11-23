import React from "react";
import classes from "./NewsData.module.css";
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";
import DOMPurify from "dompurify";
import { color } from "@mui/system";
import { Link } from "react-router-dom";

const NewsData = ({ newsList, searchText }) => {
  console.log("data form news list", newsList);

  return (
    <div>
      {newsList?.map((newData) => {
        if (newData?.title === null || !newData.title) {
          return <CommentView newData={newData} key={newData.parent_id} />;
        } else {
          return <TitleView newData={newData} key={newData.objectID} />;
        }
      })}
    </div>
  );
};

export default NewsData;

const CommentView = ({ newData }) => {
  console.log("===========================news data", newData);
  return (
    <section>
      <div className="mx-2">
        <div className={classes.span_Data}>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>{newData.points} points</span>
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>
                <span className="mx-1"> | </span> {newData.author}
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>
                <span className="mx-1"> |</span>
                {/* {moment().diff(newData.created_at, "current-year")} years ago */}
                {moment
                  .utc(newData.created_at)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>
                <span className="mx-1">| </span>
                parent
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>
                <span className="mx-1">|</span>
                {newData.story_title}
              </span>
            </Link>
          </div>
        </div>
        <span
          style={{
            fontSize: "14px",
            lineHeight: "normal",
            fontWeight: "400",
            color: "#000",
          }}
        >
          {ReactHtmlParser(DOMPurify.sanitize(newData.comment_text))}
        </span>
      </div>
    </section>
  );
};

const TitleView = ({ newData }) => {
  return (
    <section>
      <div className="my-1 mx-2">
        <div className=" d-flex  flex-wrap align-content-center  ">
          <div className="me-2">
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <p className="text-truncate font-weight-normal text-dark h6 ">
                {newData.title}
              </p>
            </Link>
          </div>
          <div className="">
            <a href={newData.url} target="_blank" className="text-secondary">
              ({newData.url})
            </a>
          </div>
        </div>
        <div className={classes.span_Data}>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>{newData.points} points</span>
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>
                <span className="mx-1">|</span> {newData.author}
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>
                <span className="mx-1">|</span>{" "}
                {moment
                  .utc(newData.created_at)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/news-details",
                search: `?newsid=${newData.objectID}`,
              }}
            >
              <span className={classes.spanValue}>
                <span className="mx-1">|</span>
                {newData.num_comments} comments
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
