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
        const { text } = this.state

        if ( text ) {
            addcomment({
                text,
                user: userName,
                belongsToId
            })

            this.setState({
                text: ''
            })
        } else {

            alert('Comments should be having at least one character')
            
        }

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
                    value={this.state.text}
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
