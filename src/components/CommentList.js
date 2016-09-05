import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentCount from './CommentCount'
import NewCommentForm from './NewCommentForm'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

/*
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentWillReceiveProps() {
        console.log('---', 'updating')
    }
*/

    render() {
        const { comments, isOpen, toggleOpen, belongsToId } = this.props

        if (!comments || !comments.length) return <p>No comments yet</p>
        const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments.
            <CommentCount count = {comments.length}/>
        </a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = comments.map(commentId => <li key = {commentId}><Comment commentId = {commentId} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
                <NewCommentForm belongsToId={belongsToId}/>
            </div>
        )
    }
}

export default toggleOpen(CommentList)
