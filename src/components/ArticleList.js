import React, { Component } from 'react'
import Article from './Article'
import toggleArticle from '../decorators/toggleArticle'

class ArticleList extends Component {

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
