import React, {ChangeEvent} from "react";
import RegistrationForm from "./RegistrationForm";
import axios from "axios";
import update from "immutability-helper";
import registerError from '../../i18n/messages/de.json'


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
    errorMessage: string = "";
    constructor(props: {}) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            country: "Schweiz",
            city: "",
            valid: false,
            error: false,

        }
    }
    showError = false;

    public handleSubmit() {
        debugger;
        axios.post("http://localhost:8080/api/register", {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            country: this.state.country,
            city: this.state.city
        }).then((response) => {
            debugger;
            if (response.status == 204) {
                this.setState((state) => {
                    update(state, {
                        error: {$set: false}
                    })
                })
            }
        }).catch((error) => {
            switch (error.code){
                case "ERR_BAD_REQUEST":
                    this.errorMessage = "register.account.exists.error";
                    break;
                case "ERR_NETWORK":
                    this.errorMessage = "register.error";

            }
            this.setState({error: true});
        })
    }

    public onInputChanged(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
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
                                 valid={this.state.valid} errorMessage={this.errorMessage}/>
    }
}