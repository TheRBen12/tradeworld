import React from "react";
import "./Nav.scss"
import {Dropdown} from "react-bootstrap";
import {FaSearch} from 'react-icons/fa'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import deleteCookies from "../uaar/CookieService";

export default function Nav() {
    const navigate = useNavigate();

    async function logout(){
       deleteCookies.deleteCookies();
       await axios.post("http://localhost:8080/logout");
       navigate("/login")
    }

    return <div className="nav-container">
        <nav className=" navbar navbar-expand-lg">
            <div className={"search-box"}>
                <form className="mx-sm-3">
                    <FaSearch style={{
                        color: "#E2AB13", display: "flex", alignContent: "end", alignItems: "flex-end",
                        position: "absolute", left: "190px", top: "20px"
                    }}/>
                    <input className="form-control ml-3 mr-sm-2" type="text" placeholder="Search..."/>
                </form>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="mx-sm-3 nav-item">
                        <Link to={"/dashboard"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/"}><a>Products</a></Link>
                    </li>
                    <li className="mx-sm-3 nav-item">
                        <Link to={"/"}>Trades</Link>
                    </li>

                </ul>
                <div className=" mx-sm-5 d-flex w-100 justify-content-end">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            My Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to={"/account"}>My Profile</Link></Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={(e) => logout() }><p>Sign out</p></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>


    </div>
}