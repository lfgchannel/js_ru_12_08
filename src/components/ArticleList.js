import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import CSSTransition from 'react-addons-css-transition-group'
import './articleList.css'
import ImmutablePropTypes from 'react-immutable-proptypes'

class ArticleList extends Component {
    static propTypes = {
        articles: ImmutablePropTypes.listOf(
            ImmutablePropTypes.recordOf({
                date: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                text: PropTypes.string,
                title: PropTypes.string.isRequired,
                comments: PropTypes.array
            })
        ).isRequired,
        //from accordion decorator
        toggleOpenItem: PropTypes.func.isRequired,
        isOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { articles, toggleOpenItem, isOpenItem } = this.props
        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {isOpenItem(articleObject.id)}
                    toggleOpen = {toggleOpenItem(articleObject.id)}
                />
            </li>)
        return (
            <CSSTransition transitionName="article" transitionLeaveTimeout ={1000} transitionEnterTimeout = {500}>
                {articleItems}
            </CSSTransition>
        )
    }
}

export default accordion(ArticleList)
