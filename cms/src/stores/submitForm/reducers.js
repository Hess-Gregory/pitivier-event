import { submitFormConstants } from './constants';

const initialState = {
  loading: false,
  response: null,
  message: ''
}

export function submitForm (state = initialState, action) {
  switch (action.type) {
    case submitFormConstants.SAVE_REQUEST:
      return {
        loading: true,
      };
    case submitFormConstants.SAVE_SUCCESS:
      return {
        loading: false,
        response: action.response
      };
    case submitFormConstants.SAVE_FAILURE:
      return { 
        loading: false,
        message: action.message
      };

    case submitFormConstants.UPDATE_REQUEST:
      return {
        loading: true,
      };
    case submitFormConstants.UPDATE_SUCCESS:
      return {
        loading: false,
        response: action.response
      };
    case submitFormConstants.UPDATE_FAILURE:
      return { 
        loading: false,
        message: action.message
      };

    case submitFormConstants.DESTROY_REQUEST:
      return {
        loading: true,
      };
    case submitFormConstants.DESTROY_SUCCESS:
      return {
        loading: false,
        response: action.response
      };
    case submitFormConstants.DESTROY_FAILURE:
      return { 
        loading: false,
        message: action.message
      };

    case submitFormConstants.EXIST_REQUEST:
      return {
        loading: true,
      };
    case submitFormConstants.EXIST_SUCCESS:
      return {
        loading: false,
        response: action.response
      };
    case submitFormConstants.EXIST_FAILURE:
      return { 
        loading: false,
        message: action.message
      };
    default:
      return state
  }
}
