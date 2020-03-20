import { AppActions } from './../types/actions';
import { CHANGE_ACTIVE_WORKER } from '../action';

const activeWorkerReducer = (state: number | null = null, action: AppActions): number | null | undefined => {
    switch(action.type){
        case CHANGE_ACTIVE_WORKER:
            return action.id;
        default:
            return state;
    };
}

export default activeWorkerReducer;