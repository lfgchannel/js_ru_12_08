import React, { Component } from 'react';
import CommentItem from './commentItem';

export default function CommentsList(props) {

    const inputCommentsList = props.srcComments;

    const outputCommentsList = inputCommentsList ?
        inputCommentsList.map( item => <CommentItem commentContent = {item} key={item.id} /> )
            :
        `Nothing here yet`

    return (

        <ul>
            {outputCommentsList}
        </ul>

    );

}
