import React from 'react';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      peper:{
          maxWidth: '75%',
          margin: '10px 12.5% 10px 12.5%',
      }
  }),
);

interface Props {
}

const FormWorker: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.peper}>
            <h1>Hello</h1>
        </Paper>
    )
};

export default FormWorker;
