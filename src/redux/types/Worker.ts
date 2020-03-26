export interface Worker {
  readonly id: number;
  FIO: string;
  position: string;
  birthday: string;
  gender: string;
  isFired: boolean;
  colleagues: number[];
}
