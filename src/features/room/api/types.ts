import type { Room, RoomParticipant } from '@entities/room/models';

export interface RoomFilters {
  topic?: string;
  date?: string;
}

export interface CreateRoomRequest {
  title: string;
  description?: string;
  location?: string;
  startDate: string;
  endDate: string;
}

export interface RoomDetails extends Room {
  sessions: Array<{
    id: number;
    title: string;
    speaker: string;
    time: string;
    durationMinutes: number;
  }>;
  participants: RoomParticipant[];
}

export interface RegisterForRoomRequest {
  userId: number;
}

export interface RegisterForRoomResponse {
  status: string;
  roomId: number;
  userId: number;
  registeredAt: string;
}

export interface ApiError {
  error: {
    code: number;
    message: string;
  };
}

export interface ICreateRoomModalProps {
  state: {
    open: boolean;
    setOpen: (value: boolean) => void;
  };
}
