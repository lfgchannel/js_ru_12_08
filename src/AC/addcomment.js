import { ADD_COMMENT } from '../constants'

export function addcomment(payload) {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}
