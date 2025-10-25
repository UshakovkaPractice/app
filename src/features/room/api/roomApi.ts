import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RoomFilters, CreateRoomRequest, RoomDetails, RegisterForRoomRequest, RegisterForRoomResponse } from './types';
import type { Room } from '@entities/room/models';

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/rooms',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Room', 'RoomDetails'],
  endpoints: (builder) => ({
    getRooms: builder.query<{ rooms: Room[] }, RoomFilters | void>({
      query: (filters) => ({
        url: '',
        params: filters || {},
      }),
      providesTags: ['Room'],
    }),
    getRoom: builder.query<RoomDetails, number>({
      query: (id) => `/${id}`,
      providesTags: (_, __, id) => [{ type: 'RoomDetails', id }],
    }),
    createRoom: builder.mutation<Room, CreateRoomRequest>({
      query: (roomData) => ({
        url: '',
        method: 'POST',
        body: roomData,
      }),
      invalidatesTags: ['Room'],
    }),
    registerForRoom: builder.mutation<RegisterForRoomResponse, { id: number; data: RegisterForRoomRequest }>({
      query: ({ id, data }) => ({
        url: `/${id}/register`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (_, __, { id }) => [
        { type: 'RoomDetails', id },
        'Room'
      ],
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetRoomQuery,
  useCreateRoomMutation,
  useRegisterForRoomMutation
} = roomApi;
