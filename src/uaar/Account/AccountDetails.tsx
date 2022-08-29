import React from 'react'
import {Card} from "react-bootstrap";
import {FormattedMessage, FormattedDate} from "react-intl";
import "./AccountContainer.scss";
import {MdModeEdit} from 'react-icons/md'
import {Props} from "./Props";
import {useNavigate} from "react-router-dom";


export default function AccountDetails(props: Props) {
    const navigate = useNavigate()

    return <div className=" mt-5 account-container w-50">
        <Card className="m-lg-1">
            <div className="account-infos m-lg-5 mt-3 ">
                <h3 className={"mb-5"}><FormattedMessage id={"account.details"}/></h3>
                <div>
                    <label>
                        <FormattedMessage id={"user.firstName"}/>
                    </label>
                    <strong><p>{props.user.firstName}</p></strong>
                </div>
                <hr className={"solid"}/>
                <div>
                    <label><FormattedMessage id={"user.lastName"}/></label>
                    <strong><p>{props.user.lastName}</p></strong>
                </div>
                <hr className={"solid"}/>

                <div>
                    <label><FormattedMessage id={"user.email"}/></label>
                    <strong><p>{props.user.email}</p></strong>
                </div>
                <hr className={"solid"}/>

                <div>
                    <label><FormattedMessage id={"user.country"}/></label>
                    <strong><p>{props.user.country}</p></strong>
                </div>
                <hr className={"solid"}/>

                <div>
                    <label><FormattedMessage id={"user.city"}/></label>
                    <strong><p>{props.user.city}</p></strong>
                </div>
                <hr className={"solid"}/>

                <div>
                    <label>
                        <FormattedMessage id={"user.joinedAt"}/>
                    </label>
                    <div><FormattedDate value={props.user.joinedAt}/></div>
                </div>
            </div>
            <div className="d-flex flex-row-reverse m-lg-3">
                <div className="p-2"><MdModeEdit/></div>
            </div>
        </Card>
    </div>
}