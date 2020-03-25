import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import StaffList from '../components/StaffList';
import { AppState } from '../redux/store';
import { AppActions } from '../redux/types/actions';
import { ThunkDispatch } from 'redux-thunk';
import { changeActiveWorker} from '../redux/action';
import { gettingActiveWorkerData } from '../consts';

const mapStateToProps = (state: AppState) => ({      
    staffData: state.staffReducer.staff,
    activeWorker: state.activeWorkerReducer,
    activeWorkerData: gettingActiveWorkerData(state.activeWorkerReducer, state.staffReducer.staff),
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
    changeActive: bindActionCreators(changeActiveWorker, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(StaffList);