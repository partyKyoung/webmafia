import React, { Component } from 'react';

import { chatRoom } from '../../mock/chat/chatList';

function Chat ({chatRoom}) {  
  const participantCount = chatRoom.participantList.length;

  return (
    <li className="chat-room col-12 col-md-6 clearfix">
      <div className="chat-room-content chat-room-seq float-left h-100">{chatRoom.seq}</div>
      <div className="chat-room-content chat-room-body float-left h-100 clearfix">
        <p className="chat-room-title w-100">{chatRoom.title}</p>
        <div className="chat-room-count float-left">{`${participantCount} / ${chatRoom.limitPeopleCount}`}</div>
        <div className="chat-room-status ml-auto float-right">{chatRoom.status}</div>
      </div>
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
        <ul className="chat-list border-primary row m-0 p-2">
          {chatList}
        </ul>
      </div>
    );
  }
}

export default ChatList;