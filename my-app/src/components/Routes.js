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

import DashboardUsers from './views/Dashboard/Users/index';
import DashboardTest from './views/Dashboard/MyPage/index';

import testcomp from './views/test/test';
import Landing from './views/FrontPage/index';
import FAQ from './views/FAQ/index';
import Companies from './views/Companies/index';
import Improve from './views/Improve/index';
import How from './views/How/index';
import About from './views/About/index';
import { WorkerForm } from './views/WorkerForm/Index';


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
                prot={false}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/how"
                component={How}
                prot={false}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/improve"
                component={Improve}
                prot={false}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/"
                component={Landing}
                prot={false}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/faq"
                component={FAQ}
                prot={false}
            />
            <RouteLayouts
                exact
                layout={LandingLayout}
                path="/companies"
                component={Companies}
                prot={false}
            />
            <RouteLayouts
                exact
                path="/dashboard_mypage"
                layout={DashboardLayout}
                component={DashboardTest}
            />
            <RouteLayouts
                exact
                path="/dashboard_users"
                layout={DashboardLayout}
                component={DashboardUsers}
                prot={false}
            />
            <RouteLayouts
                exact
                path="/about"
                layout={LandingLayout}
                component={About}
                prot={false}
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
            <Route
                exact
                path="/workerform"
                component={WorkerForm}
            />


        </Switch>
    );
};

export default Routes;
