import React, {ChangeEvent, useState, useEffect, useCallback } from 'react';
import { Worker } from '../redux/types/Worker';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      peper:{
          maxWidth: '75%',
          margin: '10px 12.5% 10px 12.5%',
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
  }),
);

const positions: {id: number, name: string}[] = [{id: 1, name: 'Директор'}, {id: 2, name: 'Менеджер'} , {id: 3, name:'Инженер'}, {id: 4, name: 'Охраник'}, {id: 5, name: 'Уборщик'}]

interface Props {
  staffData: Worker[],
  colleaguesList: string[];
}

const FormWorker: React.FC<Props> = ({ staffData, colleaguesList }) => {   
    const theme = useTheme();
    const classes = useStyles();
    const [position, setPosition] = useState('');
    const [date, setDate] = useState<Date | null>(null);
    const [gender, setGender] = useState('female');
    const [isFired, setFired] = useState(false);
    const [colleagues, setColleagues] = useState<string[]>([]);
    
    const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPosition(event.target.value);
      };

    const handleDateChange = (date: Date | null) => {
        setDate(date);
    };

    const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
      setGender((event.target as HTMLInputElement).value);
    };

    const handleFiredChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFired(event.target.checked);
    }; 

    //for select
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    function getStyles(name: string, personName: string[], theme: Theme) {
      return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
      };
    }

    const handleColleaguesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setColleagues(event.target.value as string[]);
    };

    return (
        <Paper className={classes.peper}>
            <TextField
                error={ false }
                id="input-fio"
                label={true? "ФИО" :"Error"}
                // value= 
                helperText={true? "" : "Incorrect entry."}
                variant="outlined"
            />
            <TextField
          id="outlined-select-currency"
          select
          label="Должность"
          value={position}
          onChange={handlePositionChange}
          helperText="Пожалуйста выберите должность"
          variant="outlined"
        >
          {positions.map(pos => (
            <MenuItem key={pos.id} value={pos.name}>
              {pos.name}
            </MenuItem>
          ))}
        </TextField>  
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            id="date-picker-inline"
            label="Дата рождения"
            invalidLabel="Укажите правильный формат даты"
            value={date}
            disableFuture
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}    
            />  
        </MuiPickersUtilsProvider>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={handleGenderChange}>
            <FormControlLabel value="female" control={<Radio />} label="Мужской" />
            <FormControlLabel value="male" control={<Radio />} label="Женский" />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
        control={<Switch checked={isFired} onChange={handleFiredChange} name="checkedA" />}
        label="Уволен"
        labelPlacement="start"
      />
       <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Коллеги</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={colleagues}
          onChange={handleColleaguesChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {(selected as string[]).map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {(colleaguesList !== [])? colleaguesList.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, colleagues, theme)}>
              {name}
            </MenuItem>
          )): <MenuItem>Список колег пуст</MenuItem>}
        </Select>
      </FormControl>

        </Paper>
    )
};

export default FormWorker;
