import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: '5px 12.5% 5px auto',
        textAlign: 'right',
        padding: 0
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

interface Props {
  activeWorker: number | null | undefined
  deleteWorker: (id: number) => void
}

const ButtonGroup: React.FC<Props> = ({ activeWorker, deleteWorker}) => {
  const classes = useStyles();
  
  const delite = () => {
    if(activeWorker !== null && activeWorker !== undefined){
      deleteWorker(activeWorker)
    }
  }
  return (
    <div className={classes.root}>
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<AddIcon/>}
    >
        Добавить
    </Button>
    <Button 
        variant="contained"
        color="secondary"
        disabled={(activeWorker === null)}
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={delite}
      >
        Удалить
      </Button>
    </div>
  )
};

export default ButtonGroup;
