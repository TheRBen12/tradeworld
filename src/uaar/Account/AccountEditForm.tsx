import React from "react";
import {Props} from "./Props";
import {Card} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import "./AccountEditForm.scss";



export default function AccountEditForm(props: Props) {


    return <div className="account-edit-container">

        <Card>
            <h2 className="text-center mb-5 mt-3">
                <FormattedMessage id={"account.edit.title"}/>
            </h2>
            <div className="row m-3 m-5">
                <div className="col">

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.email"}/>
                        <input className="form-control" name="email" type="email" required={true}/>
                    </div>

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.firstName"}/>
                        <input className="form-control" name="firstName" type="text" required={true}/>
                    </div>

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.lastName"}/>
                        <input className="form-control" name="lastName" type="text" required={true}/>
                    </div>
                </div>
                <div className="col">

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.address"}/>
                        <input className="form-control" name="firstName" type="text" required={true}/>
                    </div>

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.city"}/>
                        <input className="form-control" name="city" type="text" required={true}/>
                    </div>

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.country"}/>
                        <input className="form-control" name="country" type="text" required={true}/>
                    </div>

                </div>
                <div className="mb-3 form-group mt-5">
                    <button type="submit"
                            className=" submit-btn btn btn-primary">Speichern
                    </button>
                </div>
            </div>
        </Card>
    </div>
}