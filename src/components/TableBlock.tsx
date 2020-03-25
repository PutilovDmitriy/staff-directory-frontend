import React from 'react';
import StaffList from '../containers/StaffList';
import Progress from './Progress';

interface Props {
    loading: boolean,
}

const TableBlock: React.FC<Props> = ({ loading }) => {
  return loading? <Progress/>: <StaffList/>;
};

export default TableBlock;
