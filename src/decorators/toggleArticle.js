import React from 'react'
//Декораторы создают для переиспользования кода. Их следует делать максимеально универсальными, 
//не привязывайся к названиям сущностей типа Article. Лучше называй toggleOpenItem, например

export default Component => {
    return class ArticleComponent extends React.Component {

        constructor() {
            super()
            this.state = {
                openedArticleID: null
            }
        }

        toggleArticle = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openedArticleID: id === this.state.openedArticleID ? null : id
            })
        }

        render() {
            return <Component {...this.props} toggleArticle = {this.toggleArticle} openedArticleID = {this.state.openedArticleID} />
        }
    }
}
