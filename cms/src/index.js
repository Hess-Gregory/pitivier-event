import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import 'helpers/polyfill'
import App from 'app/App';
import { store } from 'stores';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'

const RootComponent = (
  <Provider store={store}>
  	<ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-center"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeOnToastrClick/>
    <App />
  </Provider>
)

ReactDOM.render(RootComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
