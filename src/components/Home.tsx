import React, { useEffect, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import TableBlock from './TableBlock';
import Header from './Header';
import { Worker } from '../redux/types/Worker';
import ButtonGroup from './ButtonGroup';
import FormWorker from './FormWorker';
import { url } from '../consts'
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
      home: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
      blocks: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }
  }),
);


interface Props {
  staffData: Worker[],
  getStaff: () => void,
  activeWorker: number | null | undefined,
  changeActive: (id: number | null) => void,
  addWorker: (worker: Worker) => void,
  removeWorker: (id: number) => void,
  updateWorker: (worker: Worker, i: number) => void,
  colleaguesList: string[],
  loading: boolean,
  activeWorkerData: Worker | any,
}

const Home: React.FC<Props> = ({staffData, getStaff, activeWorker, changeActive, addWorker, removeWorker, colleaguesList, loading, activeWorkerData, updateWorker }) => {
  const classes = useStyles();  

  const initFetch = useCallback(() => {
      getStaff();
  },[getStaff]);

  useEffect(() => { 
      initFetch();
  }, [initFetch]);

  function addNewWorker() {
    let worker = {
      id: (staffData.length + 1),
      FIO: '',
      position: '',
      birthday: '',
      gender: 'female',
      isFired: false,
      colleagues: []
    }
    addWorker(worker); 
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(worker)
      });
    console.log(worker.id);    
    changeActive(worker.id);
};

  const deleteWorker = (id: number)  =>{
    removeWorker(id);
    changeActive(null);
    let Url = url + id;
    fetch(Url, {
        method: 'DELETE'
      });
};

const editWorker = (worker: Worker, id: number) => {
  updateWorker(worker, id);
      let Url = url + id;
        fetch(Url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({ 
              id: worker.id,
              FIO: worker.FIO, 
              position: worker.position, 
              birthday: worker.birthday,
              gender: worker.gender,
              isFired: worker.isFired,
              colleagues: worker.colleagues
             })
    });
}

  return (
      <>
        <Header/>
        <Container className={classes.home}>
          <ButtonGroup activeWorker={ activeWorker } deleteWorker={deleteWorker} addNewWorker={ addNewWorker }/>
          <div className={classes.blocks}>
            <TableBlock loading={ loading }/>
            <FormWorker staffData={ staffData } colleaguesList={ colleaguesList } activeWorker={ activeWorker } activeWorkerData={activeWorkerData}  updateWorker={editWorker}/>
          </div>
        </Container>
      </>
  )
};

export default Home;