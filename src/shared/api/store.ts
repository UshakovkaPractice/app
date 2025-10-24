import { roomSlice } from "@entities/room/models";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  roomSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
