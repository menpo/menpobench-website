import { combineReducers } from 'redux'
import { TYPE } from './constants'

function reduceMethodMetadata(methodMetadata={}, action) {
    if (action.type === TYPE.SET_METHOD_METADATA) {
        // TODO should be copy
        return action.methodMetadata
    } else {
        return methodMetadata
    }
}

function reduceAvailableMethods(methods=[], action) {
    if (action.type === TYPE.SET_AVAILABLE_METHODS) {
        return [...action.payload]
    } else {
        return [...methods]
    }
}

function reduceMetadata(metadata, action) {
    return {
        method: reduceMethodMetadata(metadata === undefined ? undefined : metadata.method, action)
    }
}

function reduceSelectedMethods(selectedMethods=[], action) {
    if (action.type == TYPE.SET_SELECTED_METHODS) {
        return [...action.methods]
    } else {
        return [...selectedMethods]
    }
}

function reduceErrors(errors={}, action) {
    errors =  {...errors}
    if (action.type == TYPE.SET_ERRORS_FOR_METHOD) {
        errors[action.payload.method] = action.payload.errors
    }
    return errors
}

const rootReducer = combineReducers({
    availableMethods: reduceAvailableMethods,
    selectedMethods: reduceSelectedMethods,
    errors: reduceErrors,
    metadata: reduceMetadata
})

export default rootReducer
