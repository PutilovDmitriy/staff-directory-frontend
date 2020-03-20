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

// interface Props {
// }

const ButtonGroup: React.FunctionComponent = () => {
  const classes = useStyles();

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
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Удалить
      </Button>
    </div>
  )
};

export default ButtonGroup;
