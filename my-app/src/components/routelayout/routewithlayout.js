import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector} from 'react-redux';


const RouteWithLayout = props => {
  const { layout: Layout, component: Component, prot: Prot, ...rest } = props;
  const state = useSelector(state => state.auth)
  
  if(Prot) {
    if(state.isAuthenticated) {
      return (
        <Route
          {...rest}
          component={() => (
            <Layout>
              <Component/>
            </Layout>
          )}
        />
      );
    } else {
      return null
    }
  } else {
    return (
      <Route
        {...rest}
        component={() => (
          <Layout>
            <Component/>
          </Layout>
        )}
      />
    );
  }


};


export default RouteWithLayout;
