import { alertConstants } from './constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message, context) {
    return { type: alertConstants.SUCCESS, message:message, context: context };
}

function error(message, context) {
    return { type: alertConstants.ERROR, message:message, context: context };
}

function clear() {
    return { type: alertConstants.CLEAR };
}