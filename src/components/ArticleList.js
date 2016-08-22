import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleArticle from '../decorators/toggleArticle'

class ArticleList extends Component {


    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object),
        toggleArticle: PropTypes.func.isRequired,
        openedArticleID: PropTypes.string
    }

    render() {
        const { toggleArticle, openedArticleID } = this.props

        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {openedArticleID === articleObject.id}
                    toggle = {toggleArticle(articleObject.id)}
                />
            </li>)

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

}

export default toggleArticle(ArticleList)
