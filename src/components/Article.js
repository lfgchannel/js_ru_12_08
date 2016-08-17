import React, { Component } from 'react';
import CommentsList from './commentsList';

export default class Article extends Component {
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    state = {
        isOpen: false,
        areCommentsOpen: false
    }

    render() {

        const { article } = this.props;
        let body;

        if (this.state.isOpen) {
           body = <section>
                      {article.text}
                      <button onClick = {this.handleCommentsClick}>{this.state.areCommentsOpen ? `Hide` : `Show`} comments</button>
                      { this.state.areCommentsOpen ? <CommentsList srcComments = {article.comments}  /> : null }
                  </section>
       };

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </div>
        );
    }

    handleCommentsClick = () => {
        this.setState({
            areCommentsOpen: !this.state.areCommentsOpen
        })
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
