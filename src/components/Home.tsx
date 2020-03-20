import React, { useEffect, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import StaffList from './StaffList';
import Header from './Header';
import { AppActions } from '../redux/types/actions'
import { Worker } from '../redux/types/Worker';
import ButtonGroup from './ButtonGroup';

interface Props {
  staffData: Worker[],
  getStaff: () => void,
  activeWorker: number | null | undefined,
  changeActive: (id: number) => void;
}

const Home: React.FC<Props> = ({staffData, getStaff, activeWorker, changeActive }) => {
  console.log(activeWorker);
  const changeActiveWorker = (id: number) => {
    changeActive(id);
  }
  const initFetch = useCallback(() => {
      getStaff();
  },[getStaff]);

  useEffect(() => { 
      initFetch();
  }, [initFetch]);
  return (
      <>
        <Header/>
        <Container>
          <ButtonGroup/>
          <StaffList changeActiveWorker={changeActiveWorker} staffData={ staffData } activeWorker={ activeWorker }/>
        </Container>
      </>
  )
};

export default Home;