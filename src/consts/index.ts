import { Worker } from './../redux/types/Worker';

export const url: string = 'https://afternoon-wave-94253.herokuapp.com/staff/';

export const bildWorkerObj = (id: number, FIO: string, position: string, date: string, gender: string, isFired: boolean, colleagues: string[]) => {
        return {
            id: id,
            FIO: FIO,
            position: position,
            birthday: date,
            gender: gender,
            isFired: isFired,
            colleagues: colleagues,
        }
}

export const gettingActiveWorkerData = (id: number | null | undefined, staff: Worker[] | undefined): Worker | undefined => {    
    if(id !== null !== undefined && staff !== undefined){
      const data = staff.find(item => item.id === id)
      if(data !== undefined){
        return data;
      }else {
        return {
          id: 0,
          FIO: '',
          position: '',
          birthday: '',
          gender: "famela",
          isFired: false,
          colleagues: []
        }
      }
    }else return undefined
  }