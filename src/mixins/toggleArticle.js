export default {

    getInitialState() {
        return {
            openedArticleID: null
        }
    },

    toggleArticle(id) {

        return function(ev) {

            if (ev) ev.preventDefault()

            this.setState({
                openedArticleID: id === this.state.openedArticleID ? null : id
            })

        }

    }

}
