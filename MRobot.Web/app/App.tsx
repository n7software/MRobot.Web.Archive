/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import { connect } from "react-redux";

import State from "./store/State";

import LeftPanel from "./Nav/LeftPanel";

import "./_styles/App";

function mapStateToProps(state: State): State {
    return state;
}

class App extends React.Component<State, {}> {
    render(): JSX.Element {
        return (
            <div className="app">
                <LeftPanel currentUser={ this.props.currentUser } />
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(App);