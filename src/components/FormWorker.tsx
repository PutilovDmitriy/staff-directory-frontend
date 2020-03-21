import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      peper:{
          maxWidth: '75%',
          margin: '10px 12.5% 10px 12.5%',
      }
  }),
);

const positions: {id: number, name: string}[] = [{id: 1, name: 'Директор'}, {id: 2, name: 'Менеджер'} , {id: 3, name:'Инженер'}, {id: 4, name: 'Охраник'}, {id: 5, name: 'Уборщик'}]

interface Props {
}

const FormWorker: React.FC<Props> = () => {
    const classes = useStyles();
    const [position, setPosition] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPosition(event.target.value);
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
          label="Select"
          value={position}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {positions.map(option => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        </Paper>
    )
};

export default FormWorker;
