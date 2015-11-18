import { combineReducers } from 'redux'
import { TYPE } from './constants'


function reduceAvailableMethods(state=[], action) {
    if (action.type === TYPE.SET_AVAILABLE_METHODS) {
        return [...action.payload]
    } else {
        return [...state]
    }
}

function reduceAvailableDatasets(state=[], action) {
    if (action.type === TYPE.SET_AVAILABLE_DATASETS) {
        return [...action.payload]
    } else {
        return [...state]
    }
}

function reduceAvailableErrorMetrics(state=[], action) {
    if (action.type === TYPE.SET_AVAILABLE_ERROR_METRICS) {
        return [...action.payload]
    } else {
        return [...state]
    }
}

function reduceAvailableLmSchemes(state=[], action) {
    if (action.type === TYPE.SET_AVAILABLE_LM_SCHEMES) {
        return [...action.payload]
    } else {
        return [...state]
    }
}


function reduceSelectedMethods(state=[], action) {
    if (action.type == TYPE.SET_SELECTED_METHODS) {
        return [...action.payload]
    } else {
        return [...state]
    }
}

function reduceSelectedDataset(state=null, action) {
    if (action.type == TYPE.SET_SELECTED_DATASET) {
        return action.payload
    } else {
        return state
    }
}

function reduceSelectedErrorMetric(state=null, action) {
    if (action.type == TYPE.SET_SELECTED_ERROR_METRIC) {
        return action.payload
    } else {
        return state
    }
}

function reduceSelectedLmScheme(state=null, action) {
    if (action.type == TYPE.SET_SELECTED_LM_SCHEME) {
        return action.payload
    } else {
        return state
    }
}


function reduceMethodMetadata(state={}, action) {
    if (action.type === TYPE.SET_METHOD_METADATA) {
        // TODO should be copy
        return action.payload
    } else {
        return state
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

function reduceErrorMetricMetadata(state={}, action) {
    if (action.type === TYPE.SET_ERROR_METRIC_METADATA) {
        // TODO should be copy
        return action.payload
    } else {
        return state
    }
}

function reduceLmSchemeMetadata(state={}, action) {
    if (action.type === TYPE.SET_LM_SCHEME_METADATA) {
        // TODO should be copy
        return action.payload
    } else {
        return state
    }
}

function reduceMetadata(metadata, action) {
    return {
        method: reduceMethodMetadata(metadata === undefined ? undefined : metadata.method, action),
        dataset: reduceDatasetMetadata(metadata === undefined ? undefined : metadata.dataset, action),
        errorMetric: reduceErrorMetricMetadata(metadata === undefined ? undefined : metadata.errorMetric, action),
        lmScheme: reduceLmSchemeMetadata(metadata === undefined ? undefined : metadata.lmScheme, action)
    }
}


function reduceErrors(errors={}, action) {
    // TODO is this a shallow copy? Should be deep?
    errors =  {...errors}
    if (action.type == TYPE.SET_ERRORS_FOR_METHOD) {
        errors[action.payload.method] = action.payload.errors
    }
    return errors
}


const rootReducer = combineReducers({
    availableMethods: reduceAvailableMethods,
    availableDatasets: reduceAvailableDatasets,
    availableErrorMetrics: reduceAvailableErrorMetrics,
    availableLmSchemes: reduceAvailableLmSchemes,

    selectedMethods: reduceSelectedMethods,
    selectedDataset: reduceSelectedDataset,
    selectedErrorMetric: reduceSelectedErrorMetric,
    selectedLmScheme: reduceSelectedLmScheme,

    metadata: reduceMetadata,
    errors: reduceErrors
})

export default rootReducer
