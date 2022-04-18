import { SEND_MESSAGE, sendMessage } from "../messages";


export const botMessage = (store) => (next) => (action) => {
    if (
        action.type === SEND_MESSAGE &&
        action.payload.message.author === "User"
      ) {
        setTimeout(() => {
          store.dispatch(
            sendMessage(action.payload.roomId, {
              author: "Mr.Bot2",
              message: "Middleware!",
            })
          );
        }, 880);
      }
    return next(action);
  };