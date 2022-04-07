import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { MessagesList, Layout, ChatList, Header } from "./components";
import { ProfilePage, ChatPage } from "./pages";
import { store } from "./store";

//import "./global.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
