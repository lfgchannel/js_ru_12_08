import React, { Component, createClass } from 'react'
import Article from './Article'
import toggleArticle from '../mixins/toggleArticle'

const ArticleList = createClass({

    mixins: [toggleArticle],

    render() {

        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.state.openedArticleID === articleObject.id}
                    toggle = {this.toggleArticle(articleObject.id).bind(this)}
                />
            </li>)

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

})

export default ArticleList
