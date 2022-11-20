import Cookies from "js-cookie";
import React from "react";

const setCookie = (cookiename, userdata) => {
  Cookies.set(cookiename, userdata, {
    expires: 30,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export default setCookie;
