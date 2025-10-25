import { Button } from "@shared/ui/button";
import styles from "./styles.module.css";
import { Mic, Video } from "lucide-react";
import { Badge } from "@shared/ui/badge";

const participantsData = [
  { name: "Natura", role: "Project Manager", isHost: true },
  { name: "Cecile", role: "Software Developer", isCoHost: true },
  { name: "Nico", role: "UI/UX Designer" },
  { name: "Bryan", role: "Ethical Hacker" },
  { name: "Azzura", role: "Team Leader" },
  { name: "Ahmed", role: "UI/UX Designer" },
  { name: "Marry" },
  { name: "Diana" },
  { name: "Lucas" },
  { name: "Mike" },
  { name: "Daniel" },
  { name: "Shandy" },
  { name: "Stephany" },
  { name: "Robert" },
  { name: "Lily" },
  { name: "Michael" },
];

export const CurrentRoomPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.right_side}>
        <div className={styles.info}>
          <Button>Выйти</Button>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.participants}>
          {participantsData.map((p, i) => (
            <div key={i} className={styles.participantCard}>
              <div className={styles.info}>
                <img
                  className={styles.avatar}
                  src="https://github.com/maxleiter.png"
                  style={{ backgroundColor: "#eee" }}
                />
                <div className={styles.description}>
                  <div className={styles.name}>{p.name}i</div>
                  {p.role && <div className={styles.role}>{p.role}</div>}
                </div>
              </div>
              <div className={styles.status}>
                {p.isHost && <Badge variant="primary">Хост</Badge>}
                {p.isCoHost && <Badge variant="primary">Модератор</Badge>}
                <Mic />
                <Video />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.chat}>
          <span className={styles.title}>Чат</span>
        </div>
      </div>
    </div>
  );
};
