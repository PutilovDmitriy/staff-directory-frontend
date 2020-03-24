import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex:'1 1 auto', 
      width: "70%", 
      height: 480,
      margin: '10px 5px 5px 5px',  
      boxShadow: '0px 4px 4px rgba(80, 20, 128, 0.5)',
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
