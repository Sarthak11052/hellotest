import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resultReducer  from './result_reducer';
import  questionReducer  from './question_reducer';
const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

export default configureStore({ reducer : rootReducer});