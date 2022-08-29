import React from "react";
import {Props} from "./Props";
import {Card} from "react-bootstrap";
import {FormattedMessage} from "react-intl";


export default function AccountEditForm(props: Props) {

    const properties = Object.keys(props.user);


    return <div className="account-edit-container">

        <Card>
            <h2 className="text-center mb-5">
                <FormattedMessage id={"account.edit.title"}/>
            </h2>
            <div className="row">
                <div className="col">

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.email"}/>
                        <input className="form-control" name="email" type="email" required={true}/>
                    </div>

                    <div className="form-group">
                        <FormattedMessage tagName={"label"} id={"user.firstname"}/>
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

                    <div className="mb-3 form-group">
                        <button type="submit"
                                className=" submit-btn btn btn-primary">Speichern
                        </button>
                    </div>

                </div>
            </div>
        </Card>
    </div>
}