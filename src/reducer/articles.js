import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'
import { normalizedArticles } from '../fixtures'
import { Record, List, Map, OrderedMap, fromJS } from 'immutable'
import { arrayToMap } from '../utils'

export const Article = new Record({
    id: '',
    date: null,
    title: '',
    text: '',
    comments: []
})

const defaultState = new Map({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

export default (state = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.update('entities', entities => entities.delete(payload.id))

        case ADD_COMMENT:
            return state.updateIn(
                ['entities', payload.articleId, 'comments'],
                comments => comments.concat(action.randomId)
            )

        case LOAD_ALL_ARTICLES + START:
            return state.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return state
                .update('entities', entities => entities.merge(arrayToMap(response, Article)))
                .set('loading', false)
                .set('loaded', true)
    }

    return state
}