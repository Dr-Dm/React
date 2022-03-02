import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App }  from './App';
import { Message } from './Message';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Message text='Текст'/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

