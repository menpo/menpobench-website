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


export function setMethodMetadata(methodMetadata) {
    return {
        type: TYPE.SET_METHOD_METADATA,
        payload: methodMetadata
    }
}


export function setDatasetMetadata(datasetMetadata) {
    return {
        type: TYPE.SET_DATASET_METADATA,
        payload: datasetMetadata
    }
}

export function setErrorMetricMetadata(errorMetricMetadata) {
    return {
        type: TYPE.SET_ERROR_METRIC_METADATA,
        payload: errorMetricMetadata
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
