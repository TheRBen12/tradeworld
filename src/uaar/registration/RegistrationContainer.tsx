import React, {ChangeEvent} from "react";
import RegistrationForm from "./RegistrationForm";
import axios from "axios";
import update from "immutability-helper";


interface State {
    email: string
    firstName: string
    lastName: string
    password: string
    valid: boolean
}

export default class RegistrationContainer extends React.Component<any, State> {
    constructor(props: {}) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
    }
    showError = false;

    state: State = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        valid: false
    }

    public handleSubmit() {
        if (!this.state.valid){
            this.showError = true;
        }
        debugger;
        if (this.state.valid) {
            const responseData = axios.post("http://localhost:8000/api/register", this.state,
                {headers: {'Content-type': 'application/json'}}).then((response) => {
                if (response.status == 204) {

                }
            })
        }
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
        return <RegistrationForm onSubmit={this.handleSubmit} onChange={this.onInputChanged} error={this.showError} email={this.state.email} password={this.state.password}
        firstName={this.state.firstName} lastName={this.state.lastName} valid={this.state.valid}/>
    }
}