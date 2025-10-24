import { type PayloadAction, createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  name: "test",
  users: [],
  type: "public",
  chat: [],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    renameRoom: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearChat: (state) => {
      state.chat = [];
    },
  },
});
