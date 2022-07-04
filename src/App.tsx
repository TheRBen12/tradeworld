import React, {useCallback} from 'react';
import './App.scss';
import LoginContainer from "./uaar/login/LoginContainer";
import Dashboard from "./home/Dashboard";
import SecuredRoute from "./Routes/SecuredRoute";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import 'react-router-dom'
import RegistrationContainer from "./uaar/registration/RegistrationContainer";
import useLocalState from "./useLocalState";
import {ToastContainer, toast} from "react-toastify";


export default function App() {
    const [currentUser, setCurrentUser] = useLocalState("", 'currentUser')


    const identifyUser = useCallback((userIdentifier: string) => {
        setCurrentUser(currentUser)
        console.log(userIdentifier);
        return <Navigate to={"/dashboard"} />
    }, []);

    return (
        <Router>
            <Routes>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/login"} element={<LoginContainer identifyUser={identifyUser}/>}/>
                <Route path="/register" element={<RegistrationContainer/>}/>


            </Routes>

        </Router>
    );


}

