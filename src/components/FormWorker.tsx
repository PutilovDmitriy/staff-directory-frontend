import React, {ChangeEvent, useState, useEffect} from 'react';
import { Worker } from '../redux/types/Worker';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FIOField from './Fields/FIOField';
import PositionField from './Fields/PositionField';
import DateField from './Fields/DateField';
import GenderField from './Fields/GenderField';
import FiredField from './Fields/FiredField';
import ColleaguesField from './Fields/ColleaguesField';
import { isNull } from 'util';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
        display: 'flex',
        flex:'0 1 auto',
        width: '300px',
        height: '480px',
        margin: '10px 5px 5px 5px',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px 5px',
        boxSizing: 'border-box',
        border: '4px solid #3f51b5',
      },
      disable: {
          display: 'flex',
          flex:'0 1 auto',
          width: '300px',
          height: '480px',
          margin: '10px 5px 5px 5px',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '20px 5px',
          boxSizing: 'border-box',
          border: '4px solid #ccc',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
  })
);


interface Props {
  staffData: Worker[],
  colleaguesList: string[],
  activeWorker: number | null | undefined,
  activeWorkerData: Worker,
  updateWorker: (worker: Worker, id: number) => void,
}

const FormWorker: React.FC<Props> = ({ staffData, activeWorker, colleaguesList, activeWorkerData,  updateWorker}) => { 
    const classes = useStyles();
    const [FIO, setFIO] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [date, setDate] = useState<Date | null>(null);
    const [gender, setGender] = useState<string>('female');
    const [isFired, setFired] = useState(false);
    const [colleagues, setColleagues] = useState<string[]>([]);

    useEffect(() => {
      if(activeWorker !== null){
      setFIO(activeWorkerData.FIO);
      setPosition(activeWorkerData.position);
      setDate(new Date(activeWorkerData.birthday));
      setGender(activeWorkerData.gender);
      setFired(activeWorkerData.isFired);
      setColleagues(activeWorkerData.colleagues)
      }else{
        setFIO('');
        setPosition('');
        setDate(null);
        setGender('female');
        setFired(false);
        setColleagues([])
      }
    },[activeWorker])    
 
    let dateFormat = require('dateformat');
        
    const handleFIOChange = (event: ChangeEvent<HTMLInputElement>) => {           
      setFIO(event.target.value);
      if(activeWorker !== null && activeWorker !== undefined){
        updateWorker({
              id: activeWorker,
              FIO: event.target.value,
              position: position,
              birthday: String(dateFormat(date,'yyyy-mm-dd')),
              gender: gender,
              isFired: isFired,
              colleagues: colleagues,
            }, activeWorker)
        }
    };

    const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPosition(event.target.value);
        if(activeWorker !== null && activeWorker !== undefined){
          updateWorker({
                id: activeWorker,
                FIO: FIO,
                position: event.target.value,
                birthday: String(dateFormat(date,'yyyy-mm-dd')),
                gender: gender,
                isFired: isFired,
                colleagues: colleagues,
              }, activeWorker)
          }
      };

    const handleDateChange = (date: Date | null) => {        
        setDate(date);
        if(activeWorker !== null && activeWorker !== undefined){
          updateWorker({
                id: activeWorker,
                FIO: FIO,
                position: position,
                birthday: String(dateFormat(date,'yyyy-mm-dd')),
                gender: gender,
                isFired: isFired,
                colleagues: colleagues,
              }, activeWorker)
          }
    };

    const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
      setGender(event.target.value);
      if(activeWorker !== null && activeWorker !== undefined){
        updateWorker({
              id: activeWorker,
              FIO: FIO,
              position: position,
              birthday: String(dateFormat(date,'yyyy-mm-dd')),
              gender: event.target.value,
              isFired: isFired,
              colleagues: colleagues,
            }, activeWorker)
        }
    };

    const handleFiredChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFired(event.target.checked);
      if(activeWorker !== null && activeWorker !== undefined){
        updateWorker({
              id: activeWorker,
              FIO: FIO,
              position: position,
              birthday: String(dateFormat(date,'yyyy-mm-dd')),
              gender: gender,
              isFired: event.target.checked,
              colleagues: colleagues,
            }, activeWorker)
        }
    }; 

    const handleColleaguesChange = (event: ChangeEvent<{ value: unknown }>) => {
      setColleagues(event.target.value as string[]);
      if(activeWorker !== null && activeWorker !== undefined){
        updateWorker({
              id: activeWorker,
              FIO: FIO,
              position: position,
              birthday: String(dateFormat(date,'yyyy-mm-dd')),
              gender: gender,
              isFired: isFired,
              colleagues: event.target.value as string[],
            }, activeWorker)
        }
    };

    let disabled: boolean = isNull(activeWorker);

    return (
        <Paper className={activeWorker? classes.root : classes.disable}>
          <FIOField FIO={ FIO } handleChange={ handleFIOChange } disabled={disabled}/>
          <PositionField position={ position } handleChange={ handlePositionChange } disabled={disabled}/>
          <DateField date={ date } handleChange={handleDateChange} disabled={disabled}/>
          <GenderField gender={gender} handleChange={handleGenderChange} disabled={disabled}/>
          <FiredField isFired={isFired}  handleChange={handleFiredChange} disabled={disabled}/>
          <ColleaguesField colleagues={colleagues}  colleaguesList={colleaguesList} handleChange={handleColleaguesChange} disabled={disabled} />
        </Paper>
    )
};

export default FormWorker;
