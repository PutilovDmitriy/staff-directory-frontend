import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: "75%", height: '480px',  margin: '10px 12.5% 20px 12.5%',
      justifyContent: 'center',
      alignItems: 'center',
  }
  })
);

const Progress: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CircularProgress/>
     </div>
  );  
};

export default Progress;
