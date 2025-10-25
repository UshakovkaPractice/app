export interface Room {
  id: number;
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
}

export interface RoomParticipant {
  id: number;
  name: string;
  role: string;
  isHost?: boolean;
  isCoHost?: boolean;
  avatar?: {
    url: string;
  };
}

export interface RoomMessage {
  id: string;
  user: RoomParticipant;
  text: string;
  time: Date;
}

export interface RoomState {
  currentRoom: Room | null;
  participants: RoomParticipant[];
  messages: RoomMessage[];
  loading: boolean;
  error: string | null;
}
