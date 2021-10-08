import { combineReducers } from 'redux';
import { auth } from './auth/reducers';
import { alert } from './alert/reducers';
import { loadTable } from './loadTable/reducers';
import { submitForm } from './submitForm/reducers';
import { modal } from './modal/reducers';
import { theme } from './theme/reducers';
import {reducer as toastrReducer} from 'react-redux-toastr'

export const rootReducer = combineReducers({
  auth,
  alert,
  loadTable,
  submitForm,
  modal,
  theme,
  toastr: toastrReducer
});
