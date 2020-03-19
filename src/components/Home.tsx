import * as React from 'react';
import StaffList from './StaffList';
import Header from './Header';

interface IAppProps {
}

const Home: React.FC<IAppProps> = (props) => {
  return (
      <>
        <Header/>
        <StaffList/>
      </>
  )
};

export default Home;
