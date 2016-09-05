import { ADD_COMMENT } from '../constants'

export default store => next => action => {

    const { payload, type } = action

    console.log(action)

    switch(type) {
        case ADD_COMMENT:
            const id = store.getState().comments.size
            next({type, payload: {...payload, id}})
            break
        default: next(action)
    }

}
