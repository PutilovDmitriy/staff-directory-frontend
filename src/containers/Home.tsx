import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";
import { getStaffFromApi } from "../redux/action/fetchAction";
import { AppState } from "../redux/store";
import { AppActions } from "../redux/types/actions";
import { ThunkDispatch } from "redux-thunk";
import {
  changeActiveWorker,
  addWorker,
  deleteWorker,
  updateWorker
} from "../redux/action";
import { Worker } from "../redux/types/Worker";
import { gettingActiveWorkerData } from "../consts";

const detectionNameWorker = (
  staffData: Worker[],
  id: number | null | undefined
) => {
  let nameList: string[] = [];
  staffData.map(worker => {
    if (id !== worker.id) {
      nameList = nameList.concat(worker.FIO);
    }
  });
  return nameList;
};

const mapStateToProps = (state: AppState) => ({
  staffData: state.staffReducer.staff,
  loading: state.staffReducer.loading,
  activeWorker: state.activeWorkerReducer,
  activeWorkerData: gettingActiveWorkerData(
    state.activeWorkerReducer,
    state.staffReducer.staff
  ),
  colleaguesList: detectionNameWorker(
    state.staffReducer.staff,
    state.activeWorkerReducer
  )
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  getStaff: bindActionCreators(getStaffFromApi, dispatch),
  changeActive: bindActionCreators(changeActiveWorker, dispatch),
  addWorker: bindActionCreators(addWorker, dispatch),
  removeWorker: bindActionCreators(deleteWorker, dispatch),
  updateWorker: bindActionCreators(updateWorker, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
