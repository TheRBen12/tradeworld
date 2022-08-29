import React, {ChangeEvent} from "react";
import RegistrationForm from "./RegistrationForm";
import axios from "axios";
import update from "immutability-helper";


interface State {
    email: string
    firstName: string
    lastName: string
    password: string
    city: string
    country: string
    valid: boolean
    error: boolean
}

export default class RegistrationContainer extends React.Component<any, State> {
    constructor(props: {}) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            country: "",
            city: "",
            valid: false,
            error: false,

        }
    }

    showError = false;


    public handleSubmit() {
        axios.post("http://localhost:8080/api/register", {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }).then((response) => {
            if (response.status == 204) {
                this.setState((state) => {
                    update(state, {
                        error: {$set: false}
                    })
                })
            }
        }).catch((error) => {
            this.setState({error: true});
        })
    }

    public onInputChanged(event: ChangeEvent<HTMLInputElement>) {
        const id = event.currentTarget.id;
        const value = event.currentTarget.value;

        this.setState((state: State) =>
            update(state, {
                [id]: {$set: value},
                valid: {
                    $set: this.state.email != "" &&
                        this.state.password != "" && this.state.firstName != "" &&
                        this.state.lastName != ""
                }
            })
        )
    }

    render() {
        return <RegistrationForm onSubmit={this.handleSubmit} onChange={this.onInputChanged} error={this.state.error}
                                 email={this.state.email} password={this.state.password}
                                 firstName={this.state.firstName} lastName={this.state.lastName}
                                 valid={this.state.valid}/>
    }
}