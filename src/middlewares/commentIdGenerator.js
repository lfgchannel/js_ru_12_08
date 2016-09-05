import { ADD_COMMENT } from '../constants'

export default store => next => action => {

    const { payload, type } = action

    //Мидлвары должны быть максимально универсальными. Тебе и в будущем может понадобиться логика генерации id, не привязывайся к типу екшина
    switch(type) {
        case ADD_COMMENT:
            //очень плохая логика для генерации id, где-то удалишь и не будет никакой уникальности - лучше просто random или guid
            const id = store.getState().comments.size
            next({type, payload: {...payload, id}})
            break
        default: next(action)
    }

}
