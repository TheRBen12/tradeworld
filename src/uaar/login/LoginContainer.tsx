import React, {ChangeEvent} from 'react';
import LoginForm from "./LoginForm";
import axios from "axios";
import update from 'immutability-helper';
import RegistrationForm from "../registration/RegistrationForm";

interface State {
    authenticated: boolean
    valid: boolean
    email: string
    password: string
}

export default class LoginContainer extends React.Component<any, State> {


    static defaultProps = {}

    state: State = {
        authenticated: false,
        valid: false,
        password: "",
        email: ""
    }


    constructor(props: {}) {
        super(props);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public async handleSubmit() {
        const data = await axios.post('http://localhost:8000/login', {email: this.state.email, password: this.state.password},
            {headers: {'content-type': 'application/json'}});
        if (data) {
            console.log('successfully authenticated')
        }
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
        return <LoginForm onChange={this.onInputChanged} {...this.state} onSubmit={this.handleSubmit}/>
    }

}