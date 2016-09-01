import { RANGE, SELECTED } from '../constants'


export function filterRange(range) {
    return {
        type: RANGE,
        payload: { range }
    }
}

export function filterSelect(selected) {
    return {
        type: SELECTED,
        payload: { selected }
    }
}
