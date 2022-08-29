import React from "react";
import AccountEditForm from "./AccountEditForm";
import {State} from "./State";
import {Props} from './Props'


export default class AccountEditFormContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state =
            {
                user: this.props.user
            }
    }

    render() {
        return <AccountEditForm user={this.state.user}/>
    }

}