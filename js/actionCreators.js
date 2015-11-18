import store from './store'
import { TYPE } from './constants'

export function setAvailableMethods(methods) {
    return {
        type: TYPE.SET_AVAILABLE_METHODS,
        payload: methods
    }
}

export function setAvailableDatasets(datasets) {
    return {
        type: TYPE.SET_AVAILABLE_DATASETS,
        payload: datasets
    }
}

export function setAvailableErrorMetrics(errorMetrics) {
    return {
        type: TYPE.SET_AVAILABLE_ERROR_METRICS,
        payload: errorMetrics
    }
}

export function setAvailableLmSchemes(lmSchemes) {
    return {
        type: TYPE.SET_AVAILABLE_LM_SCHEMES,
        payload: lmSchemes
    }
}


export function setSelectedMethods(methods) {
    return {
        type: TYPE.SET_SELECTED_METHODS,
        payload: methods
    }
}

export function setSelectedDataset(dataset) {
    return {
        type: TYPE.SET_SELECTED_DATASET,
        payload: dataset
    }
}

export function setSelectedErrorMetric(errorMetric) {
    return {
        type: TYPE.SET_SELECTED_ERROR_METRIC,
        payload: errorMetric
    }
}

export function setSelectedLmScheme(lmScheme) {
    return {
        type: TYPE.SET_SELECTED_LM_SCHEME,
        payload: lmScheme
    }
}


export function setMethodMetadata(metadata) {
    return {
        type: TYPE.SET_METHOD_METADATA,
        payload: metadata
    }
}


export function setDatasetMetadata(metadata) {
    return {
        type: TYPE.SET_DATASET_METADATA,
        payload: metadata
    }
}

export function setErrorMetricMetadata(metadata) {
    return {
        type: TYPE.SET_ERROR_METRIC_METADATA,
        payload: metadata
    }
}

export function setLmSchemeMetadata(metadata) {
    return {
        type: TYPE.SET_LM_SCHEME_METADATA,
        payload: metadata
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
