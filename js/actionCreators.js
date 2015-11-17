import store from './store'
import { TYPE } from './constants'

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

export function setMethodMetadata(methodMetadata) {
    return {
        type: TYPE.SET_METHOD_METADATA,
        payload: methodMetadata
    }
}

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

export function setDatasetMetadata(datasetMetadata) {
    return {
        type: TYPE.SET_DATASET_METADATA,
        payload: datasetMetadata
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
