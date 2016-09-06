import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'

const enhancer = compose(
    applyMiddleware(api, randomId, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store