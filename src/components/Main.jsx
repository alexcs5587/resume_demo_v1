import React from 'react'
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import { Redirect, Switch, Route } from 'react-router-dom'

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Redirect from="/" to="/resume" />
            </Switch>
        </div>
    )
}

export default Main
