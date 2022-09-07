import React from 'react';
import AccountDetails from "./AccountDetails";
import User from "../../models/user";
import axios from "axios";
import Cookies from 'universal-cookie'
import {State} from "./State";
import {Route, Routes} from "react-router-dom";
import AccountEditFormContainer from "./AccountEditFormContainer";

export default class AccountContainer extends React.Component<any, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            user: {
                email: "",
                lastName: "",
                firstName: "",
                city: "",
                country: "",
                joinedAt: new Date()
            }
        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        axios.get("http://localhost:8080/api/account", {
            withCredentials: true,
            headers: {'Cookie': cookies.get('JSESSIONID')}
        })
            .then((response) => {
                if (response) {
                    const account: User = response.data
                    this.setState({user: account})

                }
            })
    }

    render() {
        const account = this.state.user;
        return <div>
            {account && <AccountDetails user={account}/>}
            <Routes>
                <Route path={"/edit"} element={<AccountEditFormContainer user={account}/>}/>
            </Routes>
        </div>

    }
}