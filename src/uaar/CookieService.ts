import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const readCookie = (key: string) => {
    return cookies.get(key);
}
const deleteCookies = () => {
    cookies.remove('JSESSIONID');
}

export default {
    readCookie,
    deleteCookies
};