import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadCommentsPage } from '../AC/comments'
import { COMMENTS_PER_PAGE_AMT } from '../constants'
import Comment from './Comment'

class CommentPageContainer extends Component {


    componentDidMount() {
        const { comments, page, loadCommentsPage } = this.props

        const offset = +(page-1)*COMMENTS_PER_PAGE_AMT

        if ( !comments ) loadCommentsPage(page, offset)

    }

    componentWillReceiveProps({ comments, page, loadCommentsPage }) {

        const offset = +(page-1)*COMMENTS_PER_PAGE_AMT

        if ( !comments ) loadCommentsPage(page, offset)

    }



    render() {

        const { comments, page } = this.props

        if (!comments || !comments.size) return (
            <div>...Loading</div>
        )

        const commentItems = comments.map((comment, i) =>
            <li key={comment.id}>
                <Comment page={page} commentId={i} />
            </li>)

        return (
            <div>{commentItems}</div>
        )
    }

}

export default connect((state, { page }) => {
    const comments = state.comments.getIn(['pagination', 'entities', page])
    return { comments }
}, { loadCommentsPage })(CommentPageContainer)
