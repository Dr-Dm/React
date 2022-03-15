import { Message } from "./Message";
import React, { useEffect, useState } from 'react';

export function App() {

  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');
  const [autor, setAutor] = useState('');
  
  const sendMessage = (message) => {
    setMessageList([...messageList, message]);
    setText('');
    setAutor('');
  }

  useEffect(() => {
    const TEXT = {autor: "Mr.Bot", text: "Hi, glad to see you!"};
    const lastMessages = messageList[messageList.length - 1];
    const TEXT2 = {autor: "Mr.Bot", text: "Go away"};

    if(lastMessages.autor !== TEXT.autor ) {
      setMessageList([...messageList, TEXT])
    } 
  },[messageList])

  return (
    <div className="App">
      <header className="App-header">
      <div className=''>
      {messageList.map((object, index) => (
        <div key={index}>
          <h2 className=''>{object.author}</h2>
          <p className=''>{object.text}</p>
        </div>
      ))}
    </div>
        <input placeholder="Сообщение" value={text} onChange={event => setText(event.target.value)} />
        <input placeholder="Autor" value={autor} onChange={event => setAutor(event.target.value)} />
        <button onClick={() => sendMessage({author: autor, text: text})}>sendMessage</button>
      </header>
    </div>
  );
}
