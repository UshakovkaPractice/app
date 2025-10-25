import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Room, RoomParticipant, RoomMessage, RoomState } from './room';

const initialState: RoomState = {
  currentRoom: null,
  participants: [],
  messages: [],
  loading: false,
  error: null,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setCurrentRoom: (state, action: PayloadAction<Room | null>) => {
      state.currentRoom = action.payload;
      state.error = null;
    },
    setParticipants: (state, action: PayloadAction<RoomParticipant[]>) => {
      state.participants = action.payload;
    },
    addParticipant: (state, action: PayloadAction<RoomParticipant>) => {
      state.participants.push(action.payload);
    },
    removeParticipant: (state, action: PayloadAction<number>) => {
      state.participants = state.participants.filter(p => p.id !== action.payload);
    },
    setMessages: (state, action: PayloadAction<RoomMessage[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<RoomMessage>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

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
