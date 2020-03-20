export interface Worker {
    readonly id?: number,
    FIO: string,
    position: string,
    birthday: string,
    gender: boolean,
    isFired: boolean,
    colleagues?: number[]
}