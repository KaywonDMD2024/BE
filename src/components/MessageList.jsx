import React from 'react';

function MessageList({ messages }) {
    return (
        <div className="message-list">
            {messages.map((msg) => (
                <div key={msg.id} className="message-card">
                    <h3>To: {msg.recipient}</h3>
                    <p>{msg.message}</p>
                    <p>From: {msg.sender}</p>
                </div>
            ))}
        </div>
    );
}

export default MessageList;
