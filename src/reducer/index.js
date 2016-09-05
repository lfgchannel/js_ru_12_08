import { combineReducers } from 'redux'
import counterReducer from './counter'
import articleReducer from './articles'
import filters from './filters'
import comments from './comments'
import userName from './userInfo'

export default combineReducers({
    count: counterReducer,
    articles: articleReducer,
    filters, comments, userName
})
