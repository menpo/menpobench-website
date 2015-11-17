import { combineReducers } from 'redux'
import { TYPE } from './constants'

const defaultMethods = ['sdm', 'aam']


const defaultMethodMetadata = {
    'sdm': {
        'label': 'SDM (Menpo)'
    },
    'aam': {
        label: 'AAM (Menpo)'
    }
}

function reduceMethodMetadata(methodMetadata=defaultMethodMetadata, action) {
    // TODO should be copy
    // TODO handle set method metadata
    return methodMetadata
}

function reduceAvailableMethods(methods=defaultMethods, action) {
    // TODO handle set available methods
    return [...methods]
}

function reduceMetadata(metadata, action) {
    return {
        method: reduceMethodMetadata(metadata === undefined ? undefined : metadata.method)
    }
}

function reduceSelectedMethods(selectedMethods=[], action) {
    if (action.type == TYPE.SET_SELECTED_METHODS) {
        return [...action.methods]
    } else {
        return [...selectedMethods]
    }
}

const rootReducer = combineReducers({
    availableMethods: reduceAvailableMethods,
    selectedMethods: reduceSelectedMethods,
    metadata: reduceMetadata
})

export default rootReducer
