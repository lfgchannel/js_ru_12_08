import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import commentIdGenerator from '../middlewares/commentIdGenerator'

const enhancer = compose(
    applyMiddleware(commentIdGenerator),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store
