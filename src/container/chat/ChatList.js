import React, { Component } from 'react';

import { chatRoom } from '../../mock/chat/chatList';

function Chat ({chatRoom}) {  
  const participantCount = chatRoom.participantList.length;

  return (
    <li className="chat-room">
      <div>{chatRoom.title}</div>
      <div>{`${participantCount} / ${chatRoom.limitPeopleCount}`}</div>
      <div>{chatRoom.status}</div>
    </li>
  );
}

class ChatList extends Component {
  render() {
    const chatList = chatRoom.map((chatItem, index) => {
      return <Chat chatRoom={chatItem} />;
    });

    return (
      <div className="container">
        <ul className="chat-list border-primary">
          {chatList}
        </ul>
      </div>
    );
  }
}

export default ChatList;