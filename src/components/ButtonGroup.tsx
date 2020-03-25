import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: "0 1 auto",
      maxWidth: "300px",
      // margin: '5px auto 5px 2%',
      padding: 0
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

interface Props {
  activeWorker: number | null | undefined;
  deleteWorker: (id: number) => void;
  addNewWorker: () => void;
}

const ButtonGroup: React.FC<Props> = ({
  activeWorker,
  deleteWorker,
  addNewWorker
}) => {
  const classes = useStyles();

  const delite = () => {
    if (activeWorker !== null && activeWorker !== undefined) {
      deleteWorker(activeWorker);
    }
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<AddIcon />}
        onClick={addNewWorker}
      >
        Добавить
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disabled={activeWorker === null}
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={delite}
      >
        Удалить
      </Button>
    </div>
  );
};

export default ButtonGroup;
