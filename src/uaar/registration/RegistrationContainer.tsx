import React, {ChangeEvent} from "react";
import RegistrationForm from "../registration/RegistrationForm";
import axios from "axios";
import update from "immutability-helper";

interface State {
    email: string
    firstName: string
    lastName: string
    password: string
}

export default class RegistrationContainer extends React.Component<any, State> {

    state: State = {
        password: "",
        email: "",
        lastName: "",
        firstName: ""
    }

    constructor(props: {}) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }


    public onInputChange(event: ChangeEvent<HTMLInputElement>) {
        const id = event.currentTarget.id;
        const value = event.currentTarget.value;

        this.setState((state: State) =>
            update(state, {
                [id]: {$set: value},
            })
        )
    }

    public handleSubmit() {
        if (this.state.password != "") {
            const registrationData = axios.post('https://localhost:8000/api/register', this.state, {headers: {'Content-type': 'application/json'}}).then(
                (response) => {
                    if (response) {
                        console.log(response.data);
                    }
                })
        }

    }

    render() {
        return <RegistrationForm onSubmit={this.handleSubmit} onChange={this.onInputChange} {...this.state}/>
    }
}