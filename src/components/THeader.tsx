import * as React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#E91E63',
      color: theme.palette.common.white,
      position: 'sticky',
      top: 0,
      boxShadow: '0px 4px 0px rgba(80, 20, 128, 0.3)'
    }
  }),
)(TableCell);

interface IAppProps {

}

const THeader: React.FC<IAppProps> = (props) => {
  return (
    <TableHead>
        <TableRow>
        <StyledTableCell>ФИО</StyledTableCell>
        <StyledTableCell align="right">Должность</StyledTableCell>
        <StyledTableCell align="right">Дата рождения</StyledTableCell>
        <StyledTableCell align="right">Пол</StyledTableCell>
        <StyledTableCell align="right">Уволен</StyledTableCell>
        <StyledTableCell align="right">Коллеги</StyledTableCell>
        </TableRow>
  </TableHead>
  )
};

export default THeader;
