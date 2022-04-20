import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { List, Button } from "@mui/material";
import st from "./chat-list.module.css";
import { Chat } from "./chat";
import {
  createConversation,
  deleteConversation,
  conversationsSelector,
} from "../../store/conversations";

export function ChatList() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const conversations = useSelector(conversationsSelector);

  const create = () => {
    const name = prompt("Введите название комнаты");
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не правильное название");
    }
  };

  const deleteCb = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate("/chat");
  };

  return (
    <List component="nav">
      <Button color="info" onClick={create}>
        create room
      </Button>

      
      {conversations.map((chat, index) => (
        <div className={st.delete} key={index}>
          <Button color="info" onClick={() => deleteCb(chat)}>
            x
          </Button>
          <Link to={`/chat/${chat}`}>
            <Chat title={chat} selected={roomId === chat} />
          </Link>
        </div>
      ))}
    </List>
  );
}
