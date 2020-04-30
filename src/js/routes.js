import React from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './pages/Layout';
import Login from './pages/Login';

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Layout}/>
            <Route path="/login" component={Login} />
        </Switch>
    );
};