import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
   if (!localStorage.getItem('username')) return <LoginForm/>


  return (                                                                          
    <ChatEngine
      height="100vh"
      projectID="8f75e0ff-1073-4386-a304-ba5b358418ae"
      userName= {localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
  );
}

export default App;
