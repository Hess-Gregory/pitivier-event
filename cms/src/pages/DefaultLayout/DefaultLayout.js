import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from 'config/nav';
// routes config
import routes from 'config/routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter')),
      DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    const theme = this.props.theme;

    return (
      <div className={'app default-' + theme }>
        <AppHeader fixed className={'header-' + theme }>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg" className={'sidebar-' + theme}>
            <AppSidebarHeader />
              <AppSidebarForm />
                <Suspense>
                  <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
                </Suspense>
              <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className={'main background-' + theme }>
            <AppBreadcrumb appRoutes={routes} router={router} className={ 'breadcrumb-' + theme }/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter className={ 'title-' + theme }>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  }
}


export default connect(mapStateToProps, null)(DefaultLayout)
