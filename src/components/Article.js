import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggle: PropTypes.func
    }

    render() {
        const { article: { text, title, comments}, isOpen, toggle } = this.props
        const body = isOpen ? <section>{text}<CommentList comments = {comments}/></section> : null
        return (
            <div>
                <h3 onClick = {toggle}>{title}</h3>
                {body}
            </div>
        );
    }

}

export default Article
