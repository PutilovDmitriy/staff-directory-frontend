import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Home from '../components/Home';
import { getStaffFromApi } from '../redux/action/fetchAction';
import { AppState } from '../redux/store';
import { AppActions } from '../redux/types/actions'
import { ThunkDispatch } from 'redux-thunk';
import { changeActiveWorker, addWorker, deleteWorker } from '../redux/action';
import { Worker } from '../redux/types/Worker';

const detectionNameWorker = (staffData: Worker[]) => {
    let nameList: string[] = [];
    staffData.map(worker => {
      nameList = nameList.concat(worker.FIO)
    })
    return nameList;
  }

const mapStateToProps = (state: AppState) => ({      
    staffData: state.staffReducer.staff,
    loading: state.staffReducer.loading,
    activeWorker: state.activeWorkerReducer,
    colleaguesList: detectionNameWorker(state.staffReducer.staff)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
    getStaff: bindActionCreators(getStaffFromApi, dispatch),
    changeActive: bindActionCreators(changeActiveWorker, dispatch),
    addWorker: bindActionCreators(addWorker, dispatch),
    removeWorker: bindActionCreators(deleteWorker, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
