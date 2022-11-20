import React, { useState } from "react";

import LogIn from "./LogIn";
import SignUp from "./SignUp";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const switchModalHandler = () => {
    setIsLogIn((preState) => !preState);
  };

  return (
    <>
      <div className={classes.form}>
        <div className={classes.btn_top}>
          <button onClick={() => setIsLogIn(false)}>Sign Up</button>
          <button onClick={switchModalHandler}>Log In</button>
        </div>

        <div className="tab-content">{isLogIn ? <LogIn /> : <SignUp />}</div>
      </div>
    </>
  );
};

export default MainPage;
