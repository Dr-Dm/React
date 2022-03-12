import { Message } from "./Message";
import React, { useState } from 'react';

export function App() {

  const [messageList, setMessageList] = useState([]);
  //const [value, setValue] = useState('');
  
  const sendMessage = (message) => {
    setMessageList([...messageList, message])
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>{messageList}</div>
        <button onClick={() => sendMessage("sdfjhsd")}>sendMessage</button>
      </header>
    </div>
  );
}

