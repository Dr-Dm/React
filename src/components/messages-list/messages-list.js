import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import {useStyles} from "./use-styles";
import { Message } from "./message";



export function MessagesList() {

    const { roomId } = useParams();
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState({
      room1: [
        {
          author: "Mr.Bot",
          text: "Hi!",
          date: "date",
        },
      ],
    });
    
    const styles = useStyles();


    const sendMessage = () =>{
        if (text) {
            setMessageList({
              ...messageList, 
              [roomId]: [
                ...(messageList[roomId] ?? []), 
                {author: "User", text: text, date: new Date().toLocaleString()}]});
            setText("");
        }
    }


    const handlePressInput = ({code}) => {
        if(code === "Enter") {
            sendMessage();
        }
    };
  
    useEffect(() => {
     // const TEXT = {author: "Mr.Bot", text: "Hi, glad to see you!", date: new Date().toLocaleDateString()};
      const messages = messageList[roomId] ?? [];
      const lastMessage = messages[messages.length -1]
  
      if(messageList.length && lastMessage.author !== "Mr.Bot" ) {
        setMessageList({
      ...messageList, 
      [roomId]: [
        ...(messageList[roomId] ?? []), 
        {
          author: "Mr.Bot", 
          text: "Hi, glad to see you!", 
          date: new Date().toLocaleString()
        },
      ],
    });
       } 
     },[messageList, roomId]);

    const messages = messageList[roomId] ?? [];

    return (
      <div className="App">
        <header className="App-header">
        <div className=''>
        {messages.map((object, index) => (
         <Message message={object} key={object.date}/>
        ))}
      </div>
          <Input 
          placeholder="Сообщение" 
          value={text} 
          onChange={(event) => setText(event.target.value)}
          onKeyPress={handlePressInput} 
          className={styles.input} 
          fullWidth
          autoFocus={true}
          endAdornment={<InputAdornment position='end'>
              {text && <Send className={styles.icon} onClick={sendMessage} />}
              </InputAdornment>}

          />
        </header>
      </div>
    );
  }
