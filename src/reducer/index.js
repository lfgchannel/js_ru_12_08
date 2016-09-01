import { combineReducers } from 'redux'
import counterReducer from './counter'
import articleReducer from './articles'
import filterReducer from './filter'

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
    filter: filterReducer
})
