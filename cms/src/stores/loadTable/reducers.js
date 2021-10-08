import { loadTableConstants } from './constants';

const initialState = {
  loading: false,
  data: null,
  message: ''
}

export function loadTable (state = initialState, action) {
  switch (action.type) {
    case loadTableConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case loadTableConstants.GETALL_SUCCESS:
      return {
        loading: false,
        data: action.data
      };
    case loadTableConstants.GETALL_FAILURE:
      return { 
        loading: false,
        message: action.message
      };
    default:
      return state
  }
}


