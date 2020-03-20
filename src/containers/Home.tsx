import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Home from '../components/Home';
import { getStaffFromApi } from '../redux/action/fetchAction';
import { AppState } from '../redux/store';
import { AppActions } from '../redux/types/actions'
import { ThunkDispatch } from 'redux-thunk';
import { changeActiveWorker } from '../redux/action';

const mapStateToProps = (state: AppState) => ({      
    staffData: state.staffReducer.staff,
    activeWorker: state.activeWorkerReducer
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
    getStaff: bindActionCreators(getStaffFromApi, dispatch),
    changeActive: bindActionCreators(changeActiveWorker, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
