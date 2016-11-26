/// <reference path="../../typings/index.d.ts" />
import * as React from "react";

interface INavProps extends React.Props<any> {
}

export default class NavBar extends React.Component<INavProps, {}> {
    render(): JSX.Element {
        return <div>I'm a Nav Bar!</div>;
    }
}
