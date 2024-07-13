import { MessageProps } from "../lib/types";
import styles from "./Message.module.css";

function Message({ message }: MessageProps) {
  return (
    <p className={styles.message}>
      <span role="img">👋{message}</span>
    </p>
  );
}

export default Message;
