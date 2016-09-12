import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, LOAD_ALL_COMMENTS } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record, List, OrderedMap, Map } from 'immutable'
import { arrayToMap } from '../utils'

const CommentModel = new Record({
    id: null,
    user: null,
    text: ''
})

const defaultState = new Map({
    entities: new OrderedMap({})
})

export default (state = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
//            return comments.push({...payload.comment, id: action.randomId})
            return state.update('entities', entities => entities.set(action.randomId, new CommentModel(payload.comment)))

        case LOAD_COMMENTS + SUCCESS:
            return state.update('entities', entities => entities.merge(arrayToMap(response, CommentModel)))

        case LOAD_ALL_COMMENTS + SUCCESS:
            const totalPages  = Math.ceil(response.total/5)
            return state.set('totalPagesCount', totalPages )
    }

    return state
}
