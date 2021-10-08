import { authConstants } from './constants';
import { history, handleResponse } from 'helpers';
import { toastr } from 'react-redux-toastr';
import jwt_decode from "jwt-decode";


export const authActions = {
    login,
    logout
};

const API_URL = process.env.REACT_APP_API_URL;

function login(email, password) {
    return dispatch => {
        dispatch({ type: authConstants.LOGIN_REQUEST, user: email  });

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        return fetch(API_URL + 'login', requestOptions)
                .then(handleResponse)
                .then(response => {
                    if(response.status === true){
                        dispatch({ type: authConstants.LOGIN_SUCCESS, user: response })
                        toastr.success('', 'Vous vous êtes connecté avec succès')
                        setTokenLogin(response)
                        history.push('/');

                    } else {
                        dispatch({ type: authConstants.LOGIN_FAILURE, user: email });
                        toastr.error('', response.msg)
                    }

                })
                .catch(error => {
                    dispatch({ type: authConstants.LOGIN_FAILURE, user: email });
                    toastr.error('', error)
                });
    };
}

function logout() {
    
    localStorage.removeItem('token');

    return { type: authConstants.LOGOUT };
}

function setTokenLogin(token) {
    var decoded = jwt_decode(token.accessToken);
    var exp = new Date(decoded.exp * 1000);
    token['expire'] = exp;
    // store user details and time expiration in local storage to keep user logged in between page refreshes
    localStorage.setItem('token', JSON.stringify(token));

}