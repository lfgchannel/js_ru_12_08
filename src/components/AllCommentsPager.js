import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../AC/comments'
import { Link } from 'react-router'


class AllComments extends Component {

    componentWillMount() {

        const { loadAllComments } = this.props

        loadAllComments()

    }

    render() {
        const { totalPagesCount } = this.props

        if (!totalPagesCount) return <div></div>

        let pager = []
        let i = 0

        while ( i < totalPagesCount ) {
            pager.push(i+1)
            i++
        }

        const commentPages = pager.map(i =>
            <li key={'pager_comments_Page'+i}>
                <Link to = {`/comment/${i}`}>{`Page ${i}`}</Link>
            </li>)

        return (
            <div>
                <ul>
                    {commentPages}
                </ul>
            </div>
        )
    }

}

export default connect(state => {

    const totalPagesCount = state.comments.get('totalPagesCount')

    return { totalPagesCount }

}, { loadAllComments })(AllComments)
