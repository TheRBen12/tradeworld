import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FormattedMessage} from 'react-intl'
import {useForm} from "react-hook-form";


interface Props {

    onSubmit: CallableFunction
    onChange: CallableFunction
    email: string
    firstName: string
    lastName: string
    password: string
    valid: boolean
    error: boolean
    errorMessage: string

}

export default function RegistrationForm(props: Props) {
    const navigate = useNavigate()
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    function onSubmit() {
        props.onSubmit();
        navigate("/login")
    }

    function completeRegistrationProcess(){
        navigate("/login");
    }

    return <div className=" mt-5">
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-50">
                <div className="registration-container p-3 mb-5 rounded card ">
                    <form onSubmit={
                        handleSubmit(onSubmit)}>
                        <div className="w-100">
                            <h2 className="text-center mt-3 mb-5">Sign Up</h2>
                            <div className="m-2">
                                {props.error &&
                                    <div className=" mr-3 ml-3 mt-3 mb-3 alert alert-danger"><FormattedMessage
                                        id={props.errorMessage}/></div>}
                                <div className="mb-3 form-group">
                                    <label htmlFor="email"><FormattedMessage tagName={"label"} id={"user.email"}/></label>
                                    <input
                                        {...register("email", {
                                            required: true,
                                        })}
                                        onInput={(e) => props.onChange(e)}
                                        type="email"
                                        name="email"
                                        className="form-control" id="email"
                                        placeholder="Enter your email here"/>
                                    <div className="form-error-message mt-1">
                                        {errors.email?.type === 'required' && "Bitte E-Mail eingeben*"}
                                    </div>
                                </div>
                                <div className="mb-3 form-group">
                                    <label htmlFor="firstName"><FormattedMessage tagName={"label"}
                                                                                 id={"user.firstName"}/></label>
                                    <input
                                        {...register("firstName",
                                            {
                                                required: true,
                                                minLength: 3
                                            })}
                                        onInput={(e) => props.onChange(e)}
                                        type="text" name="firstName"
                                        className="form-control" id="firstName"
                                        placeholder="Enter your first name here"/>
                                </div>
                                <div className="form-error-message mt-1">
                                    {errors.firstName?.type === 'required' && "Bitte gib einen Vornamen ein*"}
                                </div>
                                <div className="mb-3 form-group">
                                    <label htmlFor="lastName"><FormattedMessage tagName={"label"}
                                                                                id={"user.lastName"}/></label>
                                    <input

                                        {...register('lastName',
                                            {
                                                required: true,
                                                minLength: 3
                                            }
                                        )}
                                        onInput={(e) => props.onChange(e)} type="text" name="lastName"
                                        className="form-control" id="lastName"
                                        placeholder="Enter your last name here"/>
                                    <div className="form-error-message mt-1">
                                        {errors.lastName?.type === 'required' && "Bitte gib einen Vornamen ein*"}
                                    </div>
                                </div>
                                <div className=" mb-3 form-group">
                                    <label htmlFor="password"><FormattedMessage tagName={"label"}
                                                                                id={"user.password"}/></label>
                                    <input
                                        {...register("password",
                                            {
                                                required: true,
                                                minLength: 5
                                            }
                                        )}
                                        onInput={(e) => props.onChange(e)} type="password"
                                        name="password"
                                        className="form-control" id="password"
                                        placeholder="enter your password here"/>

                                    <div className="form-error-message mt-1">
                                        {errors.password?.type === 'required' && "Bitte gib einen Vornamen ein*"}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label><FormattedMessage tagName={"label"} id={"user.country"}/></label>
                                        <select
                                            onInput={(e) => props.onChange(e) } onSelect={(e) => props.onChange(e)} {...register("country", {required: true})}
                                            id = {"country"}
                                            defaultValue={"Land"} className="form-select"
                                                aria-label="Default select example">
                                            <option value="Schweiz">Schweiz</option>
                                            <option value="Deutschland">Deutschland</option>
                                            <option value="Frankreich">Frankreich</option>
                                            <option value="Österreich">Österreich</option>
                                            <option value="Niederlande">Niederlande</option>
                                        </select>
                                        <div className="form-error-message mt-1">
                                            <p>{errors.country?.type === 'required' && errors.country.message === "Bitte wähle eine Land aus*"}</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label><FormattedMessage tagName={"label"} id={"user.city"}/></label>
                                        <input
                                            {...register("city", {
                                                required: true,
                                                minLength: 3})}
                                            className="form-control"
                                            onInput={(e) => props.onChange(e)}
                                            type="text"
                                            id={"city"}
                                            name="city"/>
                                        <div className="form-error-message mt-1">
                                            {errors.city?.type === 'required' && "Bitte gib eine Stadt ein*"}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 form-group">
                                    <button type="submit"
                                            className=" submit-btn btn btn-primary">Register
                                    </button>
                                </div>
                                <div>
                                    <Link to={"/login"}>Already have an account? Sign in now</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

}





