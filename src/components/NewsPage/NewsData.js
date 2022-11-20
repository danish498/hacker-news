import React from "react";
import classes from "./NewsData.module.css";
import moment from "moment/moment";

const newData = {
  title: "Stephen Howkin died",
  points: 6015,
  date: "5 year ago",
  comments: 436,
};

const NewsData = ({ newsList }) => {
  console.log("data form news list", newsList);

  return (
    <>
      {newsList?.map((newData) => {
        if (newData?.title === null || !newData.title) {
          return <CommentView newData={newData} key={newData.parent_id} />;
        } else {
          return <TitleView newData={newData} key={newData.objectID} />;
        }
      })}
    </>
  );
};

export default NewsData;

const CommentView = ({ newData }) => {
  return (
    <section>
      <div className="mx-2">
        <div className={classes.span_Data}>
          <div>
            <a href="#">
              <span className={classes.spanValue}>{newData.points} points</span>
            </a>
          </div>
          <div>
            <a href="#">
              <span className={classes.spanValue}>
                <span className="mx-1"> | </span> {newData.author}
              </span>
            </a>
          </div>
          <div>
            <a href="#">
              <span className={classes.spanValue}>
                <span className="mx-1"> |</span>
                {moment().diff(newData.created_at, "years")} years ago
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
          <div>
            <a href="#">
              <span className={classes.spanValue}>
                <span className="mx-1">|</span>
                {newData.story_title}
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className="m-1">{newData.comment_text}</p>
        </div>
      </div>
    </section>
  );
};

const TitleView = ({ newData }) => {
  return (
    <section>
      <div className="my-4 mx-2">
        <div>
          <p className="text-truncate font-weight-normal text-dark h6">
            {newData.title} (
            <span className="text-secondary">{newData.url}</span>)
          </p>
        </div>
        <div className={classes.span_Data}>
          <div>
            <a href="#">
              <span className={classes.spanValue}>{newData.points} points</span>
            </a>
          </div>
          <div>
            <a href="#">
              <span className={classes.spanValue}>
                {" "}
                <span className="mx-1">|</span> {newData.author}
              </span>
            </a>
          </div>
          <div>
            <a href="#">
              <span className={classes.spanValue}>
                <span className="mx-1">|</span>{" "}
                {moment().diff(newData.created_at, "years")} years ago
              </span>
            </a>
          </div>
          <div>
            <a href="#">
              <span className={classes.spanValue}>
                <span className="mx-1">|</span>
                {newData.num_comments} comments
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
