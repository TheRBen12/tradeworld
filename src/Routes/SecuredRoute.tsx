

import React, {useCallback, useEffect, useState} from "react";
import {Navigate, Outlet} from "react-router-dom";
import useLocalState from "../useLocalState";
import Dashboard from "../home/Dashboard";
import LoginContainer from "../uaar/login/LoginContainer";
interface Props {
    children: JSX.Element;
}

const useAuth = () => {

}

const SecuredRoute = () => {
    const [currentUser, setCurrentUser] = useLocalState("", 'currentUser')
    return currentUser !== "" ? <Dashboard/> : <Navigate to={"/login"}/>
};
export default SecuredRoute;