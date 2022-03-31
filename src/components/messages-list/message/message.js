import cls from "classnames";
import styles from "./message.module.css"

export function Message({ message }) {
    return(
            <div  className={cls(styles.message, {
                [styles.currentMessage]: message.author === "User",
              })}>
            <h2 className=''>{message.author}</h2>
            <p className=''>{message.text}</p>
            <p>{message.date}</p>
        </div>
    );
};