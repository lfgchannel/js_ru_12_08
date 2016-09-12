import React, { Component, PropTypes } from 'react'
import AllCommentsPager from '../components/AllCommentsPager'



export default class AllCommentsPage extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <AllCommentsPager />
                {this.props.children}
            </div>
        )
    }

}
