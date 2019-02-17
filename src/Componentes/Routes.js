import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App.js';
import Home from './Home.js';
import SignIn from './SignIn.js';
import Cart from './Cart.js';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Routes = () =>
    <App>
        <Switch>
            <Route exact path={"/Home.js"} component={Home} />
            <Route exact path={"/SignIn.js"} component={SignIn} />
            <Route exact path={"/Cart.js"} component={Cart} />
            <Route exact path={"/"} component={Home} />
        </Switch>
    </App>;

export default Routes;