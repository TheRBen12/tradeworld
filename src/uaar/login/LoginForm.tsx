import React from 'react';
import {Link} from 'react-router-dom'
import './LoginForm.scss'

interface Props {

    onSubmit: CallableFunction
    onChange: CallableFunction
    email: string
    password: string
}

export default function LoginForm(props: Props) {
    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-25">
                    <div className=" shadow p-3 mb-5 rounded card login-container">
                        <h2 className="text-center mt-3">Sign in</h2>
                        <div className="card-body">
                            <div className="mb-3 form-group">
                                <label htmlFor="email"><p>Email</p></label>
                                <input onChange={e => props.onChange(e)} type="email" value={props.email} name="email"
                                       className="form-control" id="email"
                                       aria-describedby="emailHelp" placeholder="Enter your email here"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your
                                    email with anyone
                                    else.</small>
                            </div>
                            <div className=" mb-3 form-group">
                                <label htmlFor="password"><p>Password</p></label>
                                <input onChange={e => props.onChange(e)} type="password" name="password"
                                       className="form-control" id="password"
                                       placeholder="enter your password here"/>
                            </div>
                            <div className="form-check mb-5">
                                <label>
                                    <input onChange={e => props.onChange(e)} type="checkbox"
                                           className="form-check-input" name="_remember_me"/>Remember
                                    me
                                </label>
                            </div>

                            <div className="mb-3 form-group">
                                <button onClick={(e) => props.onSubmit()} type="submit"
                                        className={"submit-btn btn btn-primary"}>Sign in
                                </button>
                            </div>
                            <input type="hidden" name="_csrf_token" value="{{ csrf_token('authenticate') }}"/>
                        </div>
                        <div>
                            <Link to={"/register"}>No Account yet? Register now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





