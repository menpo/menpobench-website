import { createStore } from 'redux'
import rootReducer from './reducers'
// TODO remove this initialization
import * as ac from  './actionCreators'
import * as data from './data'
const store = createStore(rootReducer)
export default store


// all below just tmp for debugging
window.states = []
store.subscribe(() => window.states.push(store.getState()))


const predefinedMethodMetadata = {
    'sdm': {
        'label': 'SDM (Menpo)'
    },
    'aam': {
        label: 'AAM (Menpo)'
    }
}

const predefinedDatasetMetadata = {
    'lfpw': {
        'label': 'LFPW'
    }
}

const predefinedErrorMetricMetadata = {
    'face_area': {
        'label': 'Face Size'
    },
    'euclidean': {
        'label': 'Euclidean'
    }
}

const predefinedLmSchemeMetadata = {
    'ibug68': {
        'label': 'iBUG 51'
    },
    'ibug49': {
        'label': 'iBUG 49'
    }
}


store.dispatch(ac.setAvailableMethods(['sdm', 'aam']))
store.dispatch(ac.setAvailableDatasets(['lfpw']))
store.dispatch(ac.setAvailableErrorMetrics(['face_area', 'euclidean']))
store.dispatch(ac.setAvailableLmSchemes(['ibug68', 'ibug49']))

store.dispatch(ac.setMethodMetadata(predefinedMethodMetadata))
store.dispatch(ac.setDatasetMetadata(predefinedDatasetMetadata))
store.dispatch(ac.setErrorMetricMetadata(predefinedErrorMetricMetadata))
store.dispatch(ac.setLmSchemeMetadata(predefinedLmSchemeMetadata))

store.dispatch(ac.setErrorsForMethod('sdm', data.sdm.face_size))
store.dispatch(ac.setErrorsForMethod('aam', data.aam.face_size))
