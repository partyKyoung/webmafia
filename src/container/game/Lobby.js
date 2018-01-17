import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { chatRoom } from '../../mock/chat/chatList';
import { messages } from '../../mock/chat/lobbyChat';

function Message ({message}) {
  if (!message){
    return;
  }

  return (
    <div className="lobby-chat-message pt-2 clearfix">
      <span className="lobby-chat-message-name d-inline-block float-left">{message.userName}</span>
      <span className="lobby-chat-message-message pl-2 d-inline-block float-left">{message.message}</span>
    </div>
  );
}

function Chat ({chatRoom}) {  
  const participantCount = chatRoom.participantList.length;

  return (
    <li className="chat-room col-12 col-md-6 pl-1 pr-1 mb-2">
      <Link to={`room/${chatRoom.seq}`}>
        <div className="chat-room-content chat-room-seq w-100 d-flex">
          <span className="chat-room-status mr-auto">No.{chatRoom.seq}</span>
          <span className="chat-rom-seq ml-auto"> {chatRoom.status}</span>
        </div>
        <div className="chat-room-content chat-room-body float-left w-100">
          <p className="chat-room-title w-100">{chatRoom.title}</p>
          <div className="chat-room-count float-left">{`${participantCount} / ${chatRoom.limitPeopleCount}`}</div>
        </div>
      </Link>
    </li>
  );
}

class Lobby extends Component {
  render() {
    const chatList = chatRoom.map((chatItem, index) => {
      return <Chat chatRoom={chatItem} />;
    });

    const messageList = messages.map((message, index) => {
      return <Message message={message} />;
    });

    return (
      <div className="container">
        <div className="lobby row mt-3 ml-auto mr-auto">
          <div className="lobby-my-page col-3 d-none d-md-block">내정보</div>
          <ul className="lobby-chat-list border-primary col-12 col-md-9 row m-0 pt-2 pl-2 pr-2">
            {chatList}
          </ul>    
          <div className="lobby-chat-room col-3 d-none d-md-block mt-3 p-0">로비에서 놀고 있는 사람들</div>    
          <div className="lobby-chat-room col-12 col-md-9 mt-3 p-0">
            <div className="lobby-chat-room-board w-100 p-2">
              {messageList}
            </div> 
            <input 
              type="text" 
              className="lobby-chat-room-input w-100 p-3" 
              ref={lobbyInput => {this.chatInput = lobbyInput}}
              maxLength={50}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Lobby;