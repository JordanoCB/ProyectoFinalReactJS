import React from 'react';

const Message = ({ text }) => (
    <h3 className = "message">{ text }</h3>
);

Message.displayName = "Message";

export default Message;