import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MessagesList, Layout, ChatList, Header } from './components';

// import "./global.css";

const App = () => {
  return (
    <>
      <Layout messages={<MessagesList />} chats={<ChatList />} header={<Header />} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
