import { submitFormConstants } from './constants';
import { toastr } from 'react-redux-toastr';
import { handleResponse } from 'helpers';

export const submitFormActions = {
  exist,
  save,
  update,
  destroy
};

const API_URL = process.env.REACT_APP_API_URL;
let now     = new Date(),
  token     = localStorage.getItem("token"),
  jsonToken = JSON.parse(token);
  now.setHours(now.getHours())

function exist(url, body) {
    return dispatch => {
        dispatch( { type: submitFormConstants.EXIST_REQUEST } );
        let token     = localStorage.getItem("token"),
        tokenVerify = JSON.parse(token);

        return fetch(API_URL + url, {
                 method: 'post',
                 headers: {
                   'Content-Type':'application/json',
                 'x-access-token': tokenVerify.accessToken
                },
                 body: JSON.stringify(body)
               })
                .then(handleResponse)
                .then(function(response) {
                  if(response.exist === true){
                    toastr.error('', response.msg)
                    dispatch( { type: submitFormConstants.EXIST_SUCCESS, response: response.msg } )

                    return {exist: response.exist}
                  }

                  return {exist: false}
                })
                .catch(error => {
                    dispatch({ type: submitFormConstants.EXIST_FAILURE, message: error });
                    toastr.error('', error.toString())
                });

    };
}

function save(url, body, formData) {
    return dispatch => {
        dispatch( { type: submitFormConstants.SAVE_REQUEST } );

        const post = formData ?
        {
          method: 'post',
          headers: {
          'x-access-token': jsonToken.accessToken},
          body: body
        }
        :
        {
          method: 'post',
          headers: {'Content-Type':'application/json',
          'x-access-token': jsonToken.accessToken},
          body: JSON.stringify(body)
        };
        return fetch(API_URL + url, post)
                .then(handleResponse)
                .then(function(response) {
                  toastr.success('', 'Données enregistrées avec succès')
                  dispatch( { type: submitFormConstants.SAVE_SUCCESS, response: response } )

                  return {status: true}
                })
                .catch(error => {
                    dispatch({ type: submitFormConstants.SAVE_FAILURE, message: error });
                    toastr.error('', error.toString())

                    return {status: false}
                });

    };
}

function update(url, body, formData) {
    return dispatch => {
        dispatch( { type: submitFormConstants.SAVE_REQUEST } );

        const put = formData ?
        {
          method: 'PUT',
          headers: {
          'x-access-token': jsonToken.accessToken},
          body: body
        }
        :
        {
          method: 'PUT',
          headers: {'Content-Type':'application/json',
          'x-access-token': jsonToken.accessToken},
          body: JSON.stringify(body)
        };
        return fetch(API_URL + url, put)
                .then(handleResponse)
                .then(function(response) {
                  toastr.success('', 'Données mises à jour avec succès')
                  dispatch( { type: submitFormConstants.UPDATE_SUCCESS, response: response } )

                  return {status: true}
                })
                .catch(error => {
                    dispatch({ type: submitFormConstants.UPDATE_FAILURE, message: error });
                    toastr.error('', error.toString())

                    return {status: false}
                });

    };
}

function destroy(url, id) {
    return dispatch => {
        dispatch( { type: submitFormConstants.DESTROY_REQUEST } );

        return fetch(API_URL + url +'/'+ id, {
                  method: 'DELETE',
                  headers: {
                  'x-access-token': jsonToken.accessToken}
                })
                .then(handleResponse)
                .then(function(response) {
                  toastr.success('', 'Données supprimées avec succès')
                  dispatch( { type: submitFormConstants.DESTROY_SUCCESS, response: response } )

                  return {status: true}
                })
                .catch(error => {
                    dispatch({ type: submitFormConstants.DESTROY_FAILURE, message: error });
                    toastr.error('', error.toString())

                    return {status: false}
                });
    };
}
