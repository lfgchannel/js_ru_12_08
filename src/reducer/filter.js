import { RANGE, SELECTED } from '../constants'

const defaultState = {
    range: {
        from: null,
        to: null
    },
    selected: []
}

export default function filterReducer(prevState = defaultState, action) {

    const { type, payload } = action

    if ( type == SELECTED || type == RANGE ) return {...prevState, ...payload}

    return prevState

}
