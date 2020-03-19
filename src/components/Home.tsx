import React, { useEffect, useCallback } from 'react';
import StaffList from './StaffList';
import Header from './Header';
import { AppActions } from '../redux/types/actions'
import { Worker } from '../redux/types/Worker';

interface Props {
  staffData: Worker[],
  getStaff: () => void
}

const Home: React.FC<Props> = ({staffData, getStaff}) => {

  const initFetch = useCallback(() => {
      getStaff();
  },[getStaff]);

  useEffect(() => { 
      initFetch();
  }, [initFetch]);

  console.log(staffData);  //console
  return (
      <>
        <Header/>
        <StaffList/>
      </>
  )
};

export default Home;
