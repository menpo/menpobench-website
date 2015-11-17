import store from './store'
import { TYPE } from './constants'

export function setSelectedMethods(methods) {
    return {
        type: TYPE.SET_SELECTED_METHODS,
        methods: methods
    }
}

export function setMethodMetadata(methodMetadata) {
    return {
        type: TYPE.SET_METHOD_METADATA,
        methodMetadata: methodMetadata
    }
}

export function setAvailableMethods(methods) {
    return {
        type: TYPE.SET_AVAILABLE_METHODS,
        payload: methods
    }
}


export function setErrorsForMethod(method, errors) {
    return {
        type: TYPE.SET_ERRORS_FOR_METHOD,
        payload: {
            method: method,
            errors: errors
        }
    }
}
