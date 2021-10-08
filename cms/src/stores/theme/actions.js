import { themeConstants } from './constants';

export const themeActions = {
    setTheme
};

function setTheme(theme) {
	localStorage.setItem("theme", theme);
	
    return { type: themeConstants.CHANGE, theme: theme };
}