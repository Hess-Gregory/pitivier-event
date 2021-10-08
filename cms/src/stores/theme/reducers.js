import { themeConstants } from './constants';

const themeInStorage = localStorage.getItem("theme") ? localStorage.getItem("theme") : 'dark';
const initialState = {
  theme: themeInStorage
}

export function theme (state = initialState, action) {
  switch (action.type) {
    case themeConstants.CHANGE:
      return {
        theme: action.theme
      };
    default:
      return state
  }
}
