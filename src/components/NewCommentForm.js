import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addcomment } from '../AC/addcomment'

class NewCommentForm extends Component {

    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { addcomment, userName, belongsToId } = this.props

        addcomment({
            text: this.state.text,
            user: userName,
            belongsToId
        })

    }

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <p>{this.props.userName}</p>
                <textarea
                    name="addcomment"
                    placeholder="Add a comment..."
                    cols="40"
                    rows="10"
                    value={this.state.input}
                    onChange={this.handleChange} />
                <input
                    type="submit"
                    value="Add comment"/>
            </form>
        )
    }

}

export default connect(state => {
    const { userName } = state
    return { userName }
}, { addcomment })(NewCommentForm)
