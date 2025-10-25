import { Button } from "@shared/ui/button";
import styles from "./styles.module.css";
import { CreateRoomModal } from "@features/room/ui/create-room-modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const IndexPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>Добро пожаловать</h2>
          <div className={styles.buttons}>
            <Button onClick={() => navigate("/room/test")}>Войти</Button>
            <Button variant="primary" onClick={() => setOpen(true)}>
              Создать комнату
            </Button>
          </div>
        </div>
      </div>
      <CreateRoomModal
        state={{
          open: open,
          setOpen: setOpen,
        }}
      />
    </>
  );
};
