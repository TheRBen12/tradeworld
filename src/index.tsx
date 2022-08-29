import './custom.scss'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginContainer from "./uaar/login/LoginContainer";
import RegistrationContainer from "./uaar/registration/RegistrationContainer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginContainer/>}/>
                <Route path={"/register"} element={<RegistrationContainer/>}/>
                <Route path={"*"} element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
