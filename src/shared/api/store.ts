import { roomSlice } from "@entities/room/models";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [roomSlice.reducerPath]: roomSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
