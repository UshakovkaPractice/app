export enum Role {
  ADMIN = 'ADMIN',
  ORGANIZER = 'ORGANIZER',
  ATTENDEE = 'ATTENDEE'
}

export interface User {
  id: number;
  name: string;
  email: string;
  hashedPassword: string;
  role: Role;
}
