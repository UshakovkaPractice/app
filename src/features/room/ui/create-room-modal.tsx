import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Modal } from "@shared/ui/modal";
import { Switch } from "@shared/ui/switch";
import { useState, type FC } from "react";
import { useCreateRoomMutation } from "../api/roomApi";
import { useAppDispatch } from "@shared/lib/types";
import { setCurrentRoom } from "@entities/room/models";
import styles from "./room-modal.module.css";
import type { ICreateRoomModalProps } from "../api/types";

export const CreateRoomModal: FC<ICreateRoomModalProps> = ({ state }) => {
  const dispatch = useAppDispatch();
  const [createRoom, { isLoading }] = useCreateRoomMutation();

  const [roomData, setRoomData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
  });
  const [option, setOption] = useState("public");

  const handleInputChange = (field: string, value: string) => {
    setRoomData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateRoom = async () => {
    if (!roomData.title.trim()) {
      alert("Пожалуйста, введите название комнаты");
      return;
    }

    try {
      const newRoom = await createRoom({
        title: roomData.title,
        description: roomData.description || undefined,
        location: roomData.location || undefined,
        startDate: roomData.startDate || new Date().toISOString(),
        endDate:
          roomData.endDate ||
          new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      }).unwrap();

      dispatch(setCurrentRoom(newRoom));
      state.setOpen(false);

      // Перенаправляем в созданную комнату
      window.location.href = `/room/${newRoom.id}`;
    } catch (error) {
      console.error("Ошибка создания комнаты:", error);
      alert("Не удалось создать комнату. Попробуйте снова.");
    }
  };

  return (
    <Modal open={state.open} onClose={() => state.setOpen(false)}>
      <Modal.Header
        title="Создание комнаты"
        onClose={() => state.setOpen(false)}
      />
      <Modal.Content className={styles.content}>
        <div className={styles.item}>
          <span className={styles.input_description}>Название комнаты:</span>
          <Input
            placeholder="Название комнаты"
            value={roomData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <span className={styles.input_description}>Дата начала:</span>
          <Input
            type="datetime-local"
            value={roomData.startDate}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <span className={styles.input_description}>Дата окончания:</span>
          <Input
            type="datetime-local"
            value={roomData.endDate}
            onChange={(e) => handleInputChange("endDate", e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <span className={styles.input_description}>Тип комнаты:</span>
          <Switch
            value={option}
            onChange={setOption}
            options={[
              { label: "Открытая", value: "public" },
              { label: "По ссылке", value: "link" },
            ]}
            variant="default"
            size="small"
          />
        </div>
      </Modal.Content>
      <Modal.Footer centered fullWidth>
        <Button
          variant="primary"
          onClick={handleCreateRoom}
          disabled={isLoading}
        >
          {isLoading ? "Создание..." : "Создать комнату"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
