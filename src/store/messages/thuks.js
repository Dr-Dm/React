import { sendMessage } from "./action";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, {
          author: "Mr.Bot",
          message: "!Thunk!",
        })
      );
    }, 700);
  }
};