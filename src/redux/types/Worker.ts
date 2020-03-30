import { Gender } from "./Gender";

export interface Worker {
  readonly id: number;
  FIO: string;
  position: string;
  birthday: string;
  gender: Gender;
  isFired: boolean;
  colleagues: number[];
}
