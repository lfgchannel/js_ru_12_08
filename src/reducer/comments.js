import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, LOAD_ALL_COMMENTS, LOAD_COMMENTS_PAGE, COMMENTS_PER_PAGE_AMT } from '../constants'
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
            const totalPages  = Math.ceil(response.total/COMMENTS_PER_PAGE_AMT)
            return state
                .setIn(['pagination', 'totalPagesCount'], totalPages )
                .setIn(['pagination', 'entities'], new OrderedMap({}))
        case LOAD_COMMENTS_PAGE + SUCCESS:
            const { records } = response
            const { page } = payload
            return state
                //Хорошо, но я бы предпочел здесь хранить только id комментов, а сами комменты в entities
                .setIn(['pagination', 'entities', page], arrayToMap(records, CommentModel))
    }

    return state
}
