import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Home from '../components/Home';
import { getStaffFromApi } from '../redux/action/fetchAction';
import { AppState } from '../redux/store';
import { AppActions } from '../redux/types/actions'
import { ThunkDispatch } from 'redux-thunk';
import { Worker } from '../redux/types/Worker';

const mapStateToProps = (state: AppState) => ({      
    staffData: state.staffReducer.staff,
    load: state.staffReducer.loading
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
    getStaff: bindActionCreators(getStaffFromApi, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
