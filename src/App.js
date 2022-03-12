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
      <div className=''>{messageList.map((object) => (
      <div>
        <h2 className=''>{object.author}</h2>
        <p className=''>{object.text}</p>
      </div>
    ))}</div>
        <button onClick={() => sendMessage({author: "sdfjhsd", text: "dfsf"})}>sendMessage</button>
      </header>
    </div>
  );
}

