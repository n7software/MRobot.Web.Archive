/// <reference path="../../typings/index.d.ts" />

import User from "./data/User";

interface State {
    currentUser: User;

    router?: ReactRouter.Router;
}

export default State;