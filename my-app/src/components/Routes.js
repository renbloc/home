import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import RouteLayouts from './routelayout/routewithlayout';

import Form from './components/form/Form';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/sign_in';
import Test from './components/test/test';

import MainLayout from './layouts/Main/components/Header';
import LandingLayout from './layouts/Landing/Landing';
import DashboardLayout from './layouts/Dashboard/Dashboard';

import testcomp from './views/test/test';
import Landing from './views/FrontPage/index';
import FAQ from './views/FAQ/index';
import Companies from './views/Companies/index';
import Improve from './views/Improve/index';
import How from './views/How/index';
import DashboardTest from './views/Dashboard/index';
import About from './views/About/index';


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
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/how"
                component={How}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/improve"
                component={Improve}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/"
                component={Landing}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/faq"
                component={FAQ}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/companies"
                component={Companies}
            />
            <RouteLayouts
                exact
                path="/dashboard"
                layout={DashboardLayout}
                component={DashboardTest}
            />
            <RouteLayouts
                exact
                path="/about"
                layout={LandingLayout}
                component={About}
            />
            <Route
                exact
                path="/signin"
                component={SignIn}
            />
            <Route
                exact
                path="/form"
                component={Form}
            />


        </Switch>
    );
};

export default Routes;
