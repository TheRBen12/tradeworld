import React from "react";
import {Navigate} from "react-router-dom";
import SecuredRoute from "./SecuredRoute";

interface Props {
    children: JSX.Element,
    sessionCookie: any
}

const PublicRoute=(props: Props) => {
    return props.sessionCookie.user ? <Navigate to={"/dashboard"}/> : <Navigate to={"/login"}/>

}

export default PublicRoute;