import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import classes from "./MainPage.module.css";

const LogIn = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // console.log(logInData);

  const changeHandeler = (e) => {
    setLogInData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let { email, password } = logInData;
  let cookieValue = JSON.parse(Cookies.get("userdata"));
  console.log(cookieValue);
  // console.log(cookieValue.password);

  const submitHandeler = (e) => {
    // console.log(email);
    e.preventDefault();
    // console.log(email === cookieValue.email);
    // console.log(logInData);
    if (email !== cookieValue.email || password !== cookieValue.password) {
      toast.error("Credentials do not match!");
    } else {
      navigate("/main");
    }
  };

  return (
    <div id="login">
      <h1>Welcome Back!</h1>

      <form onSubmit={submitHandeler}>
        <div className={classes.field_wrap}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={logInData.email}
            onChange={changeHandeler}
          />
        </div>

        <div className={classes.field_wrap}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={logInData.password}
            onChange={changeHandeler}
          />
        </div>

        <button className={classes.btn_logIn}>Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
