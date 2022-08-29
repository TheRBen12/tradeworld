import './custom.scss'
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginContainer from "./uaar/login/LoginContainer";
import RegistrationContainer from "./uaar/registration/RegistrationContainer";
import {IntlProvider} from "react-intl";
import de from "./i18n/messages/de.json";
import en from "./i18n/messages/en.json";



const locale = 'de';
const messages = {'de': de, 'en': en}
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/login"} element={<LoginContainer/>}/>
                    <Route path={"/register"} element={<RegistrationContainer/>}/>
                    <Route path={"*"} element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </IntlProvider>

    </React.StrictMode>
);

reportWebVitals();
