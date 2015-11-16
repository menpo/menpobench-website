import { combineReducers } from 'redux'
import { TYPE } from './constants'

const rootReducer = combineReducers({
    methodsUnderTest: reduceMethodsUnderTest
})

function reduceMethodsUnderTest(methods=[], action) {
    return [...methods]
}

export default rootReducer