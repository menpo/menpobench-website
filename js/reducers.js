import { combineReducers } from 'redux'
import { TYPE } from './constants'


function reduceAvailableMethods(methods=[], action) {
    if (action.type === TYPE.SET_AVAILABLE_METHODS) {
        return [...action.payload]
    } else {
        return [...methods]
    }
}

function reduceAvailableDatasets(datasets=[], action) {
    if (action.type === TYPE.SET_AVAILABLE_DATASETS) {
        return [...action.payload]
    } else {
        return [...datasets]
    }
}


function reduceSelectedMethods(selectedMethods=[], action) {
    if (action.type == TYPE.SET_SELECTED_METHODS) {
        return [...action.payload]
    } else {
        return [...selectedMethods]
    }
}

function reduceSelectedDataset(state=null, action) {
    if (action.type == TYPE.SET_SELECTED_DATASET) {
        return action.payload
    } else {
        return state
    }
}


function reduceMethodMetadata(methodMetadata={}, action) {
    if (action.type === TYPE.SET_METHOD_METADATA) {
        // TODO should be copy
        return action.payload
    } else {
        return methodMetadata
    }
}

function reduceDatasetMetadata(state={}, action) {
    if (action.type === TYPE.SET_DATASET_METADATA) {
        // TODO should be copy
        return action.payload
    } else {
        return state
    }
}

function reduceMetadata(metadata, action) {
    return {
        method: reduceMethodMetadata(metadata === undefined ? undefined : metadata.method, action),
        dataset: reduceDatasetMetadata(metadata === undefined ? undefined : metadata.dataset, action)
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
    availableDatasets: reduceAvailableDatasets,
    selectedMethods: reduceSelectedMethods,
    selectedDataset: reduceSelectedDataset,
    metadata: reduceMetadata,
    errors: reduceErrors
})

export default rootReducer
