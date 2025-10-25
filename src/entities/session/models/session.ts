export interface Session {
  id: number;
  conferenceId: number;
  title: string;
  speaker: string;
  time: Date;
  durationMinutes: number;
}
