import React, { useState } from 'react';
import pb from '@/utils/pocketbase';


function GuestbookForm({ onMessageSent }) {
    const [recipient, setRecipient] = useState('');
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            recipient,
            sender,
            message,
        };

        try {
            await pb.collection('messages').create(formData);
            alert('메시지가 전송되었습니다!');
            setRecipient('');
            setSender('');
            setMessage('');
            onMessageSent(); // 메시지가 전송되면 상태 갱신
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <label>
                To:
                <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    required
                />
            </label>
            <label>
                From:
                <input
                    type="text"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    required
                />
            </label>
            <label>
                Message:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                />
            </label>
            <button type="submit">메시지 전송</button>
        </form>
    );
}

export default GuestbookForm;
