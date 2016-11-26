/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import NavBar from "./NavBar";
import UserPanel from "./UserPanel";

import User from "../store/data/User";

import "./_styles/LeftPanel";

interface ILeftPanelProps extends React.Props<any> {
    currentUser: User;
}

export default class LeftPanel extends React.Component<ILeftPanelProps, {}> {
    render(): JSX.Element {
        return (
            <div className="left-panel">
                <img className="logo" src="/images/logo.svg" />
                <NavBar />
                <UserPanel user={this.props.currentUser} />
            </div>
        );
    }
}
