import React from 'react';
import logo from './logo.svg';
import './App.scss';
import LoginContainer from "./uaar/login/LoginContainer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'react-router-dom'
import RegistrationContainer from "./uaar/registration/RegistrationContainer";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/register" element={<RegistrationContainer/>} />
              <Route path={"/"} element={<LoginContainer/>}/>
          </Routes>

      </Router>

  );
}

export default App;
