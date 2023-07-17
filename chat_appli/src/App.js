import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="8f75e0ff-1073-4386-a304-ba5b358418ae"
      userName="ricardo"
      userSecret="Maman123"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
  );
}

export default App;
