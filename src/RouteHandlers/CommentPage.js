import React, { Component, PropTypes } from 'react'
import CommentPageContainer from '../components/CommentPageContainer'


class CommentPage extends Component {
    static propTypes = {

    };

    render() {
        const { page } = this.props.params
        return (
            <div>
                <CommentPageContainer page = { page }/>
            </div>
        )
    }
}

export default CommentPage
