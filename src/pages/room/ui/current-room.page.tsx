import { Button } from "@shared/ui/button";
import styles from "./styles.module.css";
import {
  Mic,
  Send,
  Video,
  MicOff,
  VideoOff,
  PhoneOff,
  Users,
} from "lucide-react";
import { Badge } from "@shared/ui/badge";
import { useAppSelector, useAppDispatch } from "@shared/lib/types";
import { Message } from "@shared/ui/message";
import { Input } from "@shared/ui/input";
import { type FC, useState, useEffect } from "react";
import { useGetRoomQuery } from "@features/room/api/roomApi";
import {
  setCurrentRoom,
  setParticipants,
  setMessages,
  addMessage,
  setLoading,
  setError,
} from "@entities/room/models";
import type { RoomMessage } from "@entities/room/models";

export const CurrentRoomPage: FC = () => {
  const dispatch = useAppDispatch();
  const { currentRoom, participants, messages, loading, error } =
    useAppSelector(
      (state: {
        room: {
          currentRoom: any;
          participants: any[];
          messages: any[];
          loading: boolean;
          error: string | null;
        };
      }) => state.room,
    );

  const [roomId] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [messageText, setMessageText] = useState("");

  const { data: roomData, isLoading, isError } = useGetRoomQuery(roomId);

  useEffect(() => {
    if (roomData) {
      dispatch(setCurrentRoom(roomData));
      dispatch(setParticipants(roomData.participants));
      dispatch(setMessages([]));
    }
    dispatch(setLoading(isLoading));
    if (isError) {
      dispatch(setError("Failed to load room data"));
    }
  }, [roomData, isLoading, isError, dispatch]);

  const handleLeaveRoom = () => {
    dispatch(setCurrentRoom(null));
    dispatch(setParticipants([]));
    dispatch(setMessages([]));
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessage: RoomMessage = {
        id: Date.now().toString(),
        user: {
          id: 1,
          name: "Current User",
          role: "Participant",
          avatar: { url: "https://github.com/maxleiter.png" },
        },
        text: messageText,
        time: new Date(),
      };
      dispatch(addMessage(newMessage));
      setMessageText("");
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
  };

  if (loading) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <div className={styles.loadingSpinner}></div>
          <h2>Загрузка комнаты...</h2>
          <p>Пожалуйста, подождите</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>
            <PhoneOff size={64} />
          </div>
          <h2>Комната не найдена</h2>
          <p>
            К сожалению, запрашиваемая комната не существует или была удалена
          </p>
          <div className={styles.errorActions}>
            <Button
              variant="primary"
              onClick={() => (window.location.href = "/")}
            >
              Вернуться на главную
            </Button>
            <Button variant="default" onClick={() => window.location.reload()}>
              Попробовать снова
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentRoom) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>
            <Users size={64} />
          </div>
          <h2>Комната не выбрана</h2>
          <p>Пожалуйста, выберите комнату для входа</p>
          <div className={styles.errorActions}>
            <Button
              variant="primary"
              onClick={() => (window.location.href = "/")}
            >
              Выбрать комнату
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.right_side}>
        <header className={styles.info}>
          <div className={styles.roomInfo}>
            <h1 className={styles.roomTitle}>{currentRoom.title}</h1>
            <div className={styles.roomDetails}>
              <span className={styles.participantCount}>
                <Users size={16} />
                {participants.length} участников
              </span>
            </div>
          </div>
          <div className={styles.headerActions}>
            <Button onClick={handleLeaveRoom}>
              <PhoneOff size={16} />
              Выйти
            </Button>
          </div>
        </header>

        <div className={styles.videoContainer}>
          <div className={styles.videoGrid}>
            {participants.map((participant: any, index: number) => (
              <div key={`video-${index}`} className={styles.videoTile}>
                <div className={styles.videoPlaceholder}>
                  {isVideoOff ? (
                    <div className={styles.videoOffPlaceholder}>
                      <img
                        src={"https://github.com/maxleiter.png"}
                        className={styles.avatarLarge}
                      ></img>
                    </div>
                  ) : (
                    <div className={styles.videoContent}>
                      <div className={styles.videoOverlay}>
                        <div className={styles.participantName}>
                          {participant.name}
                        </div>
                        {participant.isHost && (
                          <Badge variant="primary">Хост</Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.videoControls}>
                  <button
                    className={`${styles.controlButton} ${isMuted ? styles.muted : ""}`}
                    onClick={toggleMute}
                    aria-label={
                      isMuted ? "Включить микрофон" : "Выключить микрофон"
                    }
                  >
                    {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>
                  <button
                    className={`${styles.controlButton} ${isVideoOff ? styles.videoOff : ""}`}
                    onClick={toggleVideo}
                    aria-label={
                      isVideoOff ? "Включить видео" : "Выключить видео"
                    }
                  >
                    {isVideoOff ? <VideoOff size={16} /> : <Video size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.conferenceControls}>
          <button
            className={`${styles.controlButton} ${isMuted ? styles.muted : ""}`}
            onClick={toggleMute}
            aria-label={isMuted ? "Включить микрофон" : "Выключить микрофон"}
          >
            {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          <button
            className={`${styles.controlButton} ${isVideoOff ? styles.videoOff : ""}`}
            onClick={toggleVideo}
            aria-label={isVideoOff ? "Включить видео" : "Выключить видео"}
          >
            {isVideoOff ? <VideoOff size={20} /> : <Video size={20} />}
          </button>
          <button
            className={`${styles.controlButton} ${styles.leaveButton}`}
            onClick={handleLeaveRoom}
            aria-label="Покинуть встречу"
          >
            <PhoneOff size={20} />
          </button>
        </div>
      </main>

      <aside className={styles.sidebar}>
        <section className={styles.participants} aria-label="Участники комнаты">
          {participants.map((participant: any, index: number) => (
            <div
              key={`${participant.name}-${index}`}
              className={styles.participantCard}
            >
              <div className={styles.info}>
                <img
                  className={styles.avatar}
                  src={
                    participant.avatar?.url ||
                    "https://github.com/maxleiter.png"
                  }
                  alt={`Аватар ${participant.name}`}
                  style={{ backgroundColor: "#eee" }}
                />
                <div className={styles.description}>
                  <div className={styles.name}>{participant.name}</div>
                  {participant.role && (
                    <div className={styles.role}>{participant.role}</div>
                  )}
                </div>
              </div>
              <div className={styles.status}>
                {participant.isHost && <Badge variant="primary">Хост</Badge>}
                {participant.isCoHost && (
                  <Badge variant="primary">Модератор</Badge>
                )}
                <Mic
                  color={index === 0 ? "green" : "black"}
                  aria-label={
                    index === 0 ? "Микрофон включен" : "Микрофон выключен"
                  }
                />
                <Video aria-label="Видео" />
              </div>
            </div>
          ))}
        </section>

        <section className={styles.chat} aria-label="Чат комнаты">
          <div className={styles.messages}>
            {messages.map((message: any, index: number) => (
              <Message key={`${message.user.name}-${index}`} {...message} />
            ))}
          </div>
          <div className={styles.chatFunctions}>
            <Input
              placeholder="Введите сообщение"
              aria-label="Поле ввода сообщения"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className={styles.sendButton}
              aria-label="Отправить сообщение"
            >
              <Send />
            </button>
          </div>
        </section>
      </aside>
    </div>
  );
};
