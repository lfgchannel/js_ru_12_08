import { RANGE, SELECTED } from '../constants'

const defaultState = {
    range: {
        from: null,
        to: null
    },
    selected: null
}

export default function filterReducer(prevState = defaultState, action) {

    const { type, payload } = action

    if ( type == SELECTED ) return {...prevState, ...payload}
    else if ( type === RANGE ) {
        return {...prevState, ...payload}
    }

    return prevState

}
