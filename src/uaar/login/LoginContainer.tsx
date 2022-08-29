import React, {ChangeEvent} from 'react';
import LoginForm from "./LoginForm";
import axios from "axios";
import update from 'immutability-helper';
import {Form} from "react-bootstrap";
import {generatePath} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";

interface State {
    authenticated: boolean
    valid: boolean
    email: string
    password: string
    invalid: boolean
}

interface Props {
    identifyUser: CallableFunction
}

export default class LoginContainer extends React.Component<any, State> {


    static defaultProps = {}

    state: State = {
        authenticated: false,
        valid: false,
        password: "",
        email: "",
        invalid: false
    }


    constructor(props: {}) {
        super(props);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showError = this.showError.bind(this);
    }

    public handleSubmit() {
        this.props.identifyUser()
    }

    public showError() {
        this.setState((state) =>
            update(state, {
                invalid: {$set: true}
            })
        )
    }

    public onInputChanged(event: ChangeEvent<HTMLInputElement>) {
        const id = event.currentTarget.id;
        const value = event.currentTarget.value;

        this.setState((state: State) =>
            update(state, {
                [id]: {$set: value},
            })
        )
    }

    render() {
        return <LoginForm showInvalidCredentialsError={this.showError} onChange={this.onInputChanged} {...this.state}
                          onSubmit={this.handleSubmit}/>
    }

}