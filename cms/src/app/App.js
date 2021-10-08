import React, { Component } from 'react';
import { HashRouter, Route, Switch , Redirect } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Chargement...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('pages/DefaultLayout'));

// Pages
const Login    = React.lazy(() => import('pages/Login'));
const Page404  = React.lazy(() => import('pages/Page404'));
const Page500  = React.lazy(() => import('pages/Page500'));

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    let now     = new Date(),
      token     = localStorage.getItem("token"),
      jsonToken = JSON.parse(token);
      now.setHours(now.getHours())

      if(token && jsonToken['status'] === true && new Date(jsonToken['expire']) > now){
        

        return (
          
          <DefaultLayout {...props} />
        )

      } else {
        
        const rememberMe = sessionStorage.getItem('rememberMe') === 'true';
        const email = rememberMe ? sessionStorage.getItem('email') : '';
        const encryptedPassword = rememberMe ? sessionStorage.getItem('encryptedPassword') : '';
        

        localStorage.clear('token')    

        sessionStorage.setItem('rememberMe', rememberMe);
        sessionStorage.setItem('email', rememberMe ? email : '');
        sessionStorage.setItem('encryptedPassword', rememberMe ? encryptedPassword : '');

        toastr.error('', 'Le token a expiré, veuillez vous reconnecter')

        return (
          <Redirect to='/login' />
        )

      }

    }
  } />
)

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <AuthenticatedRoute render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
