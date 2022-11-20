import Cookies from "js-cookie";
import React from "react";

const getCookie = (cookiename) => {
  return Cookies.get(cookiename);
};

export default getCookie;
