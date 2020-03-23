import React from 'react';
import StaffList from './StaffList';
import Progress from './Progress';
import { Worker } from '../redux/types/Worker';

interface Props {
    staffData: Worker[],
    activeWorker: number | null | undefined,
    changeActiveWorker: (id: number | null) => void,
    loading: boolean,
}

const TableBlock: React.FC<Props> = ({ staffData, activeWorker, changeActiveWorker, loading }) => {
  return loading? <Progress/>: <StaffList changeActiveWorker={changeActiveWorker} staffData={ staffData } activeWorker={ activeWorker }/>;
};

export default TableBlock;
