import * as React from "react";
import { Worker } from "../redux/types/Worker";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { dateFormat } from "../consts";

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(even)": {
        backgroundColor: theme.palette.background.default
      }
    }
  })
)(TableRow);

interface Props extends Worker {
  activeWorker: number | null | undefined;
  changeActive: (id: number | null) => void;
  activeWorkerData: Worker;
  staffData: Worker[];
}

const WorkerRow: React.FC<Props> = ({
  id,
  FIO,
  position,
  birthday,
  gender,
  isFired,
  colleagues,
  activeWorker,
  changeActive,
  activeWorkerData,
  staffData
}) => {
  const definitionAction = () => {
    return {
      backgroundColor: id === activeWorker ? "#e3f2fd" : ""
    };
  };
  const active = () => {
    if (activeWorker === null) {
      changeActive(id);
      return;
    }
    if (
      id !== undefined &&
      id !== activeWorker &&
      activeWorkerData.FIO !== "" &&
      activeWorkerData.position !== "" &&
      activeWorkerData.birthday !== ""
    ) {
      changeActive(id);
      return;
    }
    if (
      id === activeWorker &&
      activeWorkerData.FIO !== "" &&
      activeWorkerData.position !== "" &&
      activeWorkerData.birthday !== ""
    ) {
      changeActive(null);
      return;
    }
    return alert("Заполните форму или удалите форму");
  };
  return (
    <StyledTableRow onClick={active} style={definitionAction()}>
      <TableCell component="th" scope="row">
        {FIO}
      </TableCell>
      <TableCell align="right">{position}</TableCell>
      <TableCell align="right">{dateFormat(birthday, "dd/mm/yyyy")}</TableCell>
      <TableCell align="right">{gender === "female" ? "М" : "Ж"}</TableCell>
      <TableCell align="right">{isFired ? "Да" : "Нет"}</TableCell>
      <TableCell align="right">
        {colleagues.map(colleague => {
          let nameId = staffData.find(item => item.id == colleague);
          return `${nameId?.FIO}, `;
        })}
      </TableCell>
    </StyledTableRow>
  );
};

export default WorkerRow;
