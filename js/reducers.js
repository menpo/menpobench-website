import { combineReducers } from 'redux'
import { TYPE } from './constants'

const rootReducer = combineReducers({
    methodsUnderTest: reduceMethodsUnderTest
})

function reduceMethodsUnderTest(methods=['sdm'], action) {
    return [...methods]
}

export default rootReducer