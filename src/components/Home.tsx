import React, { useEffect, useCallback } from 'react';
import StaffList from './StaffList';
import Header from './Header';
import { AppActions } from '../redux/types/actions'
import { Worker } from '../redux/types/Worker';

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
        <button onClick={() => changeActiveWorker(7)}>Изменить</button>
        <StaffList staffData={ staffData }/>
      </>
  )
};

export default Home;
