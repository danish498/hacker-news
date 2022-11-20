import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import setCookie from "../Hooks/setCookie";
import LogIn from "./LogIn";
import classes from "./MainPage.module.css";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = userData;
  // console.log(userData);

  const changeDataHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // const onClear = () => {
  //   // setUserData({
  //   //   firstName: "",
  //   //   lastName: "",
  //   //   email: "",
  //   //   password: "",
  //   // });
  // };

  const dataHandelSubmit = (e) => {
    e.preventDefault();
    // console.log(password);
    // console.log(password2);

    if (password !== password2) {
      toast.error("Password do not match!");
    } else if (!firstName || !lastName || !email)
      toast.error("Please complete the Sign-up");
    else {
      toast.success("Success, Please do LOG-IN now");
      setCookie("userdata", JSON.stringify(userData));
    }

    console.log("onsubmitdata", userData);
  };

  const clickHandeler = () => {
    // <LogIn    />;
  };

  return (
    <div id="signup">
      <h1>Sign Up</h1>

      <form onSubmit={dataHandelSubmit}>
        <div className={classes.top_row}>
          <div className={classes.field_wrap}>
            <label>First Name </label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={firstName}
              onChange={changeDataHandler}
            />
          </div>

          <div className={classes.field_wrap}>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={lastName}
              onChange={changeDataHandler}
            />
          </div>
        </div>

        <div className={classes.field_wrap}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter you Email"
            name="email"
            value={email}
            onChange={changeDataHandler}
          />
        </div>

        <div className={classes.field_wrap}>
          <label> Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={changeDataHandler}
          />
        </div>
        <div className={classes.field_wrap}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={changeDataHandler}
          />
        </div>
        <button
          onClick={clickHandeler}
          type="submit"
          className={classes.btn_signUp}
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default SignUp;
