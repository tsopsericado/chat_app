import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

function ChatFeed(props) {
  // lets destructure something from props

const { chats, activeChat, userName, messages } = props;

const chat = chats && chats[activeChat];
const renderMessages = ( ) => {
    const keys = Object.keys(messages);

    return keys.map((key, index) =>{
        const message = messages[key];
        const lastMesssageKey = index === 0 ? null : keys[index - 1];
        const isMyMessage = userName === message.sender.username;
    
          return (
  <div key={`msg_${index}`}  style={{ width: '100%' }}>
     <div className="message-block"> 
         {
           isMyMessage ? <MyMessage message= {message}/> 
           : <TheirMessage message={message} lastMessage={message[lastMesssageKey]}/>

         }
    </div>  
    <div className="read-recieps" style={{marinRight: isMyMessage ? '18px' : '0px' , marginLeft: isMyMessage ? '0px' : '68px'}}>
    </div>
  </div>

   );
})

}
 
renderMessages()

return (
  <div className="chat-feed">
    <div className="chat-title">
      {chats.title}
      <div className="chat-subtitle">
        {chat.people.map((person) => `${person.person.userName}`)}
      </div>
    </div>
    {renderMessages()}
    <div style={{ height: "100px" }} />
    <div className="message-form-container">
    <MessageForm { ...props} chatId={activeChat}/>  
    </div>
  </div>
);
 }

export default ChatFeed;
