import { combineReducers } from 'redux'
import { TYPE } from './constants'

const defaultMethods = ['sdm', 'aam']


function reduceMethodMetadata(methodMetadata={}, action) {
    console.log(action)
    if (action.type === TYPE.SET_METHOD_METADATA) {
        // TODO should be copy
        return action.methodMetadata
    } else {
        return methodMetadata
    }
}

function reduceAvailableMethods(methods=defaultMethods, action) {
    // TODO handle set available methods
    return [...methods]
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
    if (action.type == TYPE.SET_SELECTED_METHODS) {
        return [...action.methods]
    } else {
        return [...selectedMethods]
    }
}

const rootReducer = combineReducers({
    availableMethods: reduceAvailableMethods,
    selectedMethods: reduceSelectedMethods,
    //errors: reduceErrors,
    metadata: reduceMetadata
})

export default rootReducer
