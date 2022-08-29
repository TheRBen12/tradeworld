import React from "react";
import AccountEditForm from "./AccountEditForm";
import {State} from "./State";


export default class AccountEditFormContainer extends React.Component<any, State>{

    constructor(props: any) {
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

    render() {
        return <AccountEditForm user={this.state.user}/>
    }

}