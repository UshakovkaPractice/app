import { roomSlice } from './roomSlice';

export type { Room, RoomParticipant, RoomMessage, RoomState } from './room';
export { roomSlice } from './roomSlice';
export const {
  setCurrentRoom,
  setParticipants,
  addParticipant,
  removeParticipant,
  setMessages,
  addMessage,
  clearMessages,
  setLoading,
  setError
} = roomSlice.actions;
