import React from "react";
import SearchBar from "material-ui-search-bar";

import classes from "./HackerNews.module.css";
import Cookies from "js-cookie";

const Header = ({ onSearch }) => {
  const cookiesData = JSON.parse(Cookies.get("userdata"));

  const username = cookiesData.firstName.toUpperCase();

  // console.log("========use================", username);
  return (
    <header className={classes.search_container}>
      <img
        className={classes.search_handlerLogo}
        src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png"
      />
      <p className="p-2 mx-1 my-3 fw-bold">{username}</p>
      <SearchBar className={classes.search} onChange={onSearch} />
    </header>
  );
};

export default Header;
