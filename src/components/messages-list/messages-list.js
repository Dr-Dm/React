import React, { useEffect, useState } from 'react';
import { Input, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import {useStyles} from "./use-styles";
import { Message } from "./message";


export function MessagesList() {

  
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    
    const styles = useStyles();

    const sendMessage = () =>{
        if (text) {
            setMessageList([...messageList, {author: "User", text: text, date: new Date().toLocaleDateString()}]);
            setText("");
        }
    }

    
    // const sendMessage = (message) => {
    //   setMessageList([...messageList, message]);
    //   setText('');
    // }

    const handlePressInput = ({code}) => {
        if(code === "Enter") {
            sendMessage();
        }
    };
  
    useEffect(() => {
      const TEXT = {author: "Mr.Bot", text: "Hi, glad to see you!", date: new Date().toLocaleDateString()};
      const lastMessages = messageList[messageList.length - 1];
  
      if(messageList.length && lastMessages.author !== "Mr.Bot" ) {
        setMessageList([...messageList, TEXT])
      } 
    },[messageList])
  
    return (
      <div className="App">
        <header className="App-header">
        <div className=''>
        {messageList.map((object) => (
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