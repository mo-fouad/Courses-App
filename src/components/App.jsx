import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";

function App() {
    return (
        <div>
            Hello from App
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default App