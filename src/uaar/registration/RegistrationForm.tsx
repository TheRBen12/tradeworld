import React from 'react';
import {Link} from "react-router-dom";

interface Props {

    onSubmit: CallableFunction
    onChange: CallableFunction
    email: string
    firstName: string
    lastName: string
    password: string
    valid: boolean
    error: boolean
}

export default class RegistrationForm extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }
    render() {
        let errorMessage;
        if (this.props.error){
            errorMessage = <div className=" mr-3 ml-3 mt-3 mb-3 alert alert-danger">Please fill in all fields</div>
        }
        return  <div className=" mt-5 login-container">
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50">
                    <div className=" shadow p-3 mb-5 rounded card login-container">
                        <h2 className="text-center mt-3">Sign in</h2>
                        <div className="card-body">
                            {errorMessage}
                            <div className="mb-3 form-group">
                                <label htmlFor="email"><p>Email</p></label>
                                <input onInput={(e) => this.props.onChange(e)} type="email" name="email"
                                       className="form-control" id="email"
                                       aria-describedby="emailHelp" value={this.props.email}
                                       placeholder="Enter your email here"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your
                                    email with anyone
                                    else.</small>
                            </div>
                            <div className="mb-3 form-group">
                                <label htmlFor="firstName"><p>firstName</p></label>
                                <input onInput={e => this.props.onChange(e)} type="text" name="firstName"
                                       className="form-control" id="firstName"
                                       placeholder="Enter your first name here"/>
                            </div>
                            <div className="mb-3 form-group">
                                <label htmlFor="lastName"><p>lastName</p></label>
                                <input onInput={e => this.props.onChange(e)} type="text" name="lastName"
                                       className="form-control" id="lastName"
                                       placeholder="Enter your last name here"/>
                            </div>
                            <div className=" mb-3 form-group">
                                <label htmlFor="password"><p>Password</p></label>
                                <input onInput={(e) => this.props.onChange(e)} type="password" name="password"
                                       className="form-control" id="password"
                                       placeholder="enter your password here"/>
                            </div>
                            <div className="form-check mb-5">
                                <label>
                                    <input onInput={(e) => this.props.onChange(e)} type="checkbox"
                                           className="form-check-input" name="_remember_me"/>Remember me
                                </label>
                            </div>

                            <div className="mb-3 form-group">
                                <button onClick={() => this.props.onSubmit()} type="submit"
                                        className=" submit-button btn btn-primary">Register
                                </button>
                            </div>
                            <input type="hidden" name="_csrf_token" value="{{ csrf_token('authenticate') }}"/>

                        </div>
                        <div>
                            <Link to={"/login"}>Already have an account? Sign in now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}





