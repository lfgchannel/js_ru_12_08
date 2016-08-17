import React, { Component } from 'react';

export default function CommentItem(props) {

    const { commentContent } = props;

    return (

        <li className="article_comment">
            <h3>{commentContent.user} <i>wrote:</i></h3>
            <p>{commentContent.text}</p>
        </li>

    );

}
