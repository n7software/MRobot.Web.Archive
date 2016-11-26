/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import User from "../store/data/User";

import "./_styles/UserPanel";

interface IUserPanelProps extends React.Props<any> {
    user: User
}

export default class UserPanel extends React.Component<IUserPanelProps, {}> {
    static defaultProps: IUserPanelProps = {
        user: {
            id: null,
            name: "Loading...",
            avatarUrl: "",
            points: 0
        }
    };

    render(): JSX.Element {
        return (
            <div className="user-panel">
                <div>{this.props.user.name}</div>
            </div>
        );
    }
}
