import { Worker } from './Worker';

export interface Staff {
    staff: Worker[],
    loading: boolean,
    error: boolean | null;
}