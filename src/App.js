import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="9795d9a8-ba5f-45af-8e1c-424fcb7f0a37"
            userName="JohnWicky"
            userSecret="12341234"
            renderChatFeed={(chatAppProps) => }
        />
    );
}

export default App;
