import React, { useEffect, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import TableBlock from './TableBlock';
import Header from './Header';
import { AppActions } from '../redux/types/actions';
import { Worker } from '../redux/types/Worker';
import ButtonGroup from './ButtonGroup';
import FormWorker from './FormWorker';
import { url } from '../consts'

interface Props {
  staffData: Worker[],
  getStaff: () => void,
  activeWorker: number | null | undefined,
  changeActive: (id: number | null) => void,
  addWorker: (worker: Worker) => void,
  removeWorker: (id: number) => void,
  colleaguesList: string[],
  loading: boolean;
}

const Home: React.FC<Props> = ({staffData, getStaff, activeWorker, changeActive, addWorker, removeWorker, colleaguesList, loading }) => {
  const changeActiveWorker = (id: number | null) => {
    changeActive(id);
  }
  const initFetch = useCallback(() => {
      getStaff();
  },[getStaff]);

  useEffect(() => { 
      initFetch();
  }, [initFetch]);

  function addNewWorker(worker: Worker) {
    addWorker(worker); 
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(worker)
      })     
};

  const deleteWorker = (id: number)  =>{
    removeWorker(id);
    changeActive(null);
    let Url = url + id;
    fetch(Url, {
        method: 'DELETE'
      });
};
  return (
      <>
        <Header/>
        <Container>
          <ButtonGroup activeWorker={ activeWorker } deleteWorker={deleteWorker}/>
          <TableBlock loading={ loading } changeActiveWorker={changeActiveWorker} staffData={ staffData } activeWorker={ activeWorker }/>
          <FormWorker staffData={ staffData } colleaguesList={ colleaguesList } />
        </Container>
      </>
  )
};

export default Home;