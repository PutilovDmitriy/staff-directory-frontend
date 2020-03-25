import * as React from 'react';
import { Worker } from '../redux/types/Worker';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);

interface Props extends Worker {
  activeWorker: number | null | undefined,
  changeActive: (id: number | null) => void,
  activeWorkerData: Worker,
}

const WorkerRow: React.FC<Props> = ({id, FIO, position, birthday, gender, isFired, colleagues, activeWorker, changeActive, activeWorkerData }) => {
  const definitionAction = () => {
    return {
      backgroundColor: (id === activeWorker)? "#e3f2fd" : '',
    }
  }
  const active = () => {
    if(id !== undefined){
      changeActive(id)
    }
    if(id === activeWorker){
      changeActive(null)
    }
    return;
  }

  return (
    <StyledTableRow onClick={active} style={definitionAction()}>
        <TableCell component="th" scope="row">{FIO}</TableCell>
        <TableCell align="right">{position}</TableCell>
        <TableCell align="right">{birthday}</TableCell>
        <TableCell align="right">{(gender === 'female')? "М": "Ж"}</TableCell>
        <TableCell align="right">{isFired? "Да" : "Нет"}</TableCell>
        <TableCell align="right"><div style={{overflow: "auto"}}>{colleagues}</div></TableCell>
  </StyledTableRow>
  )
};

export default WorkerRow;
