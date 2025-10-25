import type { FC } from "react"
import styles from "./styles.module.css"
import type { IMessageProps } from "./message.types"

export const Message: FC<IMessageProps> = ({ user, text, time }) => (
  <div className={styles.messagePart}>
    <img
      src={user.avatar.url}
      alt={user.name}
      className={styles.avatar}
    />
    <div className={styles.messageContent}>
      <div className={styles.messageHeader}>
        <span className={styles.userName}>{user.name}</span>
        <span className={styles.time}>
          {time.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  </div>
)
