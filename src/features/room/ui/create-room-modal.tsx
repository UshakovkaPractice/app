import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Modal } from "@shared/ui/modal";
import { Switch } from "@shared/ui/switch";
import { useState, type FC } from "react";
import styles from "./room-modal.module.css";
import type { ICreateRoomModalProps } from "../api/types";

export const CreateRoomModal: FC<ICreateRoomModalProps> = ({ state }) => {
  const [option, setOption] = useState("public");
  return (
    <Modal open={state.open} onClose={() => state.setOpen(false)}>
      <Modal.Header
        title="Создание комнаты"
        onClose={() => state.setOpen(false)}
      />
      <Modal.Content className={styles.content}>
        <div className={styles.item}>
          <span className={styles.input_description}>Название комнаты:</span>
          <Input placeholder="Название комнаты" />
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
        <Button variant="primary">Создать комнату</Button>
      </Modal.Footer>
    </Modal>
  );
};
