import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Registration } from './registration';

interface RegistrationState {
  registrations: Registration[];
  loading: boolean;
  error: string | null;
}

const initialState: RegistrationState = {
  registrations: [],
  loading: false,
  error: null,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setRegistrations: (state, action: PayloadAction<Registration[]>) => {
      state.registrations = action.payload;
      state.error = null;
    },
    addRegistration: (state, action: PayloadAction<Registration>) => {
      state.registrations.push(action.payload);
    },
    updateRegistration: (state, action: PayloadAction<Registration>) => {
      const index = state.registrations.findIndex(
        reg => reg.userId === action.payload.userId && reg.conferenceId === action.payload.conferenceId
      );
      if (index !== -1) {
        state.registrations[index] = action.payload;
      }
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

export const { setRegistrations, addRegistration, updateRegistration, setLoading, setError } = registrationSlice.actions;
