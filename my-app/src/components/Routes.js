import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import RouteLayouts from './routelayout/routewithlayout';

import Form from './components/form/Form';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/sign_in';
import Test from './components/test/test';

import MainLayout from './layouts/Main/components/Header';
import LandingLayout from './layouts/Landing/components/Landing';

import testcomp from './views/test/test';


const RouteWithLayout = props => {
    const { layout: Layout, component: Component, ...rest } = props;

}

const Routes = () => {
    return (
        <Switch>
            <RouteLayouts
                exact
                layout={MainLayout}
                path="/tester"
                component={testcomp}
            />
            {/* <RouteWithLayout
                    exact
                    layout={MainLayout}
                    path="/test"
                /> */}
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/header"
                component={testcomp}
            />
            <Route
                exact
                path="/dashboard"
                component={Dashboard}
            />
            <Route
                exact
                path="/signin"
                component={SignIn}
            />
            <Route
                exact
                path="/test"
                component={Test}
            />

        </Switch>
    );
};

export default Routes;
