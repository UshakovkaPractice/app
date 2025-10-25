import type { User } from '@entities/user/models';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export type UserProfile = Omit<User, 'hashedPassword'>;
