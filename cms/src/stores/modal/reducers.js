import { modalConstants } from './constants';

const initialState = {
  show: false
}

export function modal (state= initialState, action) {
  switch (action.type) {
    case modalConstants.ADD:
      return {
        context: 'add',
        show: true
      };
    case modalConstants.EDIT:
      return {
        context: 'edit',
        show: true,
        row: action.row
      };
    case modalConstants.DETAIL:
      return {
        context: 'detail',
        show: true,
        row: action.row
      };
    case modalConstants.DELETE:
      return {
        context: 'delete',
        show: true,
        row: action.row
      };
    case modalConstants.TOGGLE:
      return {
        show: false
      };
    default:
      return state
  }
}
