import { ADD_COMMENT, LIST_COMMENT } from '../constants'

export function addcomment(payload) {
    const { text, user, belongsToId } = payload
    return [{
        type: ADD_COMMENT,
        payload: { text, user }
    }, {
        type: LIST_COMMENT,
        payload: belongsToId
    }]
}
