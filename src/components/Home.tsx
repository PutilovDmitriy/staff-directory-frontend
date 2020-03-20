import React, { useEffect, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import StaffList from './StaffList';
import Header from './Header';
import { AppActions } from '../redux/types/actions'
import { Worker } from '../redux/types/Worker';
import ButtonGroup from './ButtonGroup';
import FormWorker from './FormWorker';
import { url } from '../consts'

interface Props {
  staffData: Worker[],
  getStaff: () => void,
  activeWorker: number | null | undefined,
  changeActive: (id: number | null) => void,
  removeWorker: (id: number) => void;
}

const Home: React.FC<Props> = ({staffData, getStaff, activeWorker, changeActive, removeWorker }) => {
  console.log(activeWorker);
  const changeActiveWorker = (id: number | null) => {
    changeActive(id);
  }
  const initFetch = useCallback(() => {
      getStaff();
  },[getStaff]);

  useEffect(() => { 
      initFetch();
  }, [initFetch]);

  const deleteWorker = (id: number)  =>{
    removeWorker(id);
    changeActive(null);
    let Url = url + '/' + id;
    fetch(Url, {
        method: 'DELETE'
      });
};
  return (
      <>
        <Header/>
        <Container>
          <ButtonGroup activeWorker={ activeWorker } deleteWorker={deleteWorker}/>
          <StaffList changeActiveWorker={changeActiveWorker} staffData={ staffData } activeWorker={ activeWorker }/>
          <FormWorker/>
        </Container>
      </>
  )
};

export default Home;