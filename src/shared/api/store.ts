import { roomSlice } from "@entities/room/models";
import { userSlice } from "@entities/user/models";
import { sessionSlice } from "@entities/session/models";
import { registrationSlice } from "@entities/registration/models";
import { userApi } from "@features/user/api/userApi";
import { roomApi } from "@features/room/api/roomApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [roomSlice.name]: roomSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [registrationSlice.name]: registrationSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [roomApi.reducerPath]: roomApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, roomApi.middleware),
});
