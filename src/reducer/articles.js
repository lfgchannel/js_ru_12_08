import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { Record, List } from 'immutable'

const ArticleModel = new Record({
    id: null,
    date: null,
    title: '',
    text: '',
    comments: new List
})

const immutableArticles = new List(normalizedArticles.map(article => new ArticleModel(article)))

export default (articles = immutableArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            const { id, belongsToId } = payload
            
            return articles.map(article => {
                if ( article.id == belongsToId ) {
                    article.comments.push(id)
                    return article
                }
                return article
            })
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
    }

    return articles
}
