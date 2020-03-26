import { Worker } from "./../redux/types/Worker";

export const url: string = "https://afternoon-wave-94253.herokuapp.com/staff/";

export const bildWorkerObj = (
  id: number,
  FIO: string,
  position: string,
  date: string,
  gender: string,
  isFired: boolean,
  colleagues: number[]
) => {
  return {
    id: id,
    FIO: FIO,
    position: position,
    birthday: date,
    gender: gender,
    isFired: isFired,
    colleagues: colleagues
  };
};

export const gettingActiveWorkerData = (
  id: number | null | undefined,
  staff: Worker[] | undefined
): Worker | undefined => {
  if ((id !== null) !== undefined && staff !== undefined) {
    const data = staff.find(item => item.id === id);
    if (data !== undefined) {
      return data;
    } else {
      return {
        id: 0,
        FIO: "",
        position: "",
        birthday: "",
        gender: "famela",
        isFired: false,
        colleagues: []
      };
    }
  } else return undefined;
};

export const positions: { id: number; name: string }[] = [
  { id: 1, name: "Директор" },
  { id: 2, name: "Менеджер" },
  { id: 3, name: "Инженер" },
  { id: 4, name: "Стажёр" },
  { id: 5, name: "Охранник" },
  { id: 6, name: "Уборщик" },
  { id: 7, name: "Администратор" },
  { id: 8, name: "Водитель" }
];

export const dateFormat = require("dateformat");
