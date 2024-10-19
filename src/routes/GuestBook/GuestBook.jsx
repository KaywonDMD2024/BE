import React, { useCallback, useState, useEffect } from 'react';
import GuestbookForm from '@/components/GuestbookForm';
import MessageList from '@/components/MessageList';
import pb from '@/utils/pocketbase';

function GuestBook() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = useCallback(async () => {
      try {
          const records = await pb.collection('messages').getFullList({
              sort: '-created',
          });
          setMessages(records);
      } catch (error) {
          console.error('Error fetching messages:', error);
      }
  }, []);

  useEffect(() => {
      fetchMessages();
  }, [fetchMessages]);

  return (
      <div className="guestbook-container">
          <div className="guestbook-input-area">
            <div>
              <h1>BE[bi:] MESSAGE</h1>
              <p>학생들에게 축하 메시지를 보내주세요!</p>
            </div>
              <GuestbookForm onMessageSent={fetchMessages} />
          </div>
          <MessageList messages={messages} />
      </div>
  );
}


export default GuestBook;
