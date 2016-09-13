import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../AC/comments'
import { Link } from 'react-router'


class AllComments extends Component {

    componentDidMount() {

        const { loadAllComments, totalPagesCount } = this.props

        if ( totalPagesCount ) return null

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
        //'pager_comments_Page' в ключе явно лишнее. Это один из редких случаев, когда ключ не решает ничего; Можно просто оставить индекс
        const commentPages = pager.map(i =>
            <li key={'pager_comments_Page'+i}>
                <Link to = {`/comments/${i}`}>{`Page ${i}`}</Link>
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

    const totalPagesCount = state.comments.getIn(['pagination', 'totalPagesCount'])

    return { totalPagesCount }

}, { loadAllComments })(AllComments)
