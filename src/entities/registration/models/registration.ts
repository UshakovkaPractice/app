export enum RegistrationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED'
}

export interface Registration {
  userId: number;
  conferenceId: number;
  status: RegistrationStatus;
}
