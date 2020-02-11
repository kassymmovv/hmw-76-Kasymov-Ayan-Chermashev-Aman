import React from 'react';
import './MessageCard.css';

const MessageCard = props => {
    return (
        <div className="MessageCard">
            <p className="author">Author: {props.author}</p>
            <p className="message">Message: {props.message}</p>
            <p>Datetime: {props.datetime}</p>
        </div>
    );

};

export default MessageCard;