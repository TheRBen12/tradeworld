

import React from "react";
import {Navigate} from "react-router-dom";

interface Props {
    children: JSX.Element,
    sessionCookie: string
}


const SecuredRoute = (props: Props) => {
   return props.sessionCookie ? props.children : <Navigate to={"/login"}/>
};
export default SecuredRoute;