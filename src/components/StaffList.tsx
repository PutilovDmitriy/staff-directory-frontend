import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Scrollbar from './CustomeScrolleBar';
import WorkerRow from './Worker';
import { Worker } from '../redux/types/Worker';
import THeader from './THeader';


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },  
});

interface Props {
  staffData: Worker[],
  activeWorker: number | null | undefined,
  changeActiveWorker: (id: number | null) => void,
}
const StaffList: React.FC<Props> = ({staffData, activeWorker, changeActiveWorker}) => {
  const classes = useStyles();
  
  return (
    <Scrollbar>
      <Table className={classes.table} aria-label="customized table">
        <THeader/>
        <TableBody>
          {staffData? staffData.map(worker => (
            <WorkerRow key={worker.id} 
              id={worker.id}
              FIO={worker.FIO} 
              position={worker.position} 
              birthday={worker.birthday} 
              gender={worker.gender} 
              isFired={worker.isFired} 
              colleagues={worker.colleagues}
              activeWorker={ activeWorker }
              changeActiveWorker={changeActiveWorker}  />
          )): ''}
        </TableBody>
      </Table>
    </Scrollbar>
  );
}

export default StaffList;