import React from "react";
import AccountEditForm from "./AccountEditForm";
import {State} from "./State";
import {Props} from './Props'
import axios from "axios";
import {Navigate} from "react-router-dom";


export default class AccountEditFormContainer extends React.Component<Props, State> {

    updateFinish: boolean

    constructor(props: Props) {
        super(props);

        this.updateFinish = false;

        this.state =
            {
                user: this.props.user,
            }
    }

    handleSubmit() {
        axios.put("http://localhost:8080/api/account/edit",
            {email: this.state.user.email},
            {headers: {'Content-type': "application/json"}})
            .then((response) => {
                if (response.data) {
                    this.updateFinish = true;
                    this.setState({user: response.data})
                }
            })
    }

    render() {
        if (this.updateFinish) {
            return <Navigate to={"/account"}/>
        }
        return <AccountEditForm user={this.state.user}/>
    }

}