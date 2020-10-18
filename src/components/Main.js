import React from 'react'
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import { Redirect, Switch, Route } from 'react-router-dom'

function Main() {
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/resume" />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
        </div>
    )
}

export default Main
