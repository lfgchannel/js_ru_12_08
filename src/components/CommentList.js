import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentCount from './CommentCount'
import NewCommentForm from './NewCommentForm'
import { loadComments } from '../AC/comments'
import { connect } from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ isOpen, article: { id, commentsLoaded }, loadComments }) {
        if ( commentsLoaded ) return null
        if (isOpen && !this.props.isOpen) loadComments(id)
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        const { comments, commentsLoading } = article

        const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments.
            <CommentCount count = {comments.length}/>
        </a>

        if ( !isOpen ) return <div>{toggleButton}</div>

        if (!comments || !comments.length) return (
            <div>
                No comments yet
                <NewCommentForm articleId = {article.id}/>
            </div>
        )

        if ( commentsLoading ) return <div>{toggleButton}<h1>Loading...</h1></div>

        const commentItems = comments.map(commentId => <li key = {commentId}><Comment commentId = {commentId} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
                <NewCommentForm articleId = {article.id} />
            </div>
        )
    }
}

export default connect(null, { loadComments })(toggleOpen(CommentList))
