import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';

interface Props {
    date: Date | null,
    handleChange: (date: Date | null) => void,
    disabled: boolean,
}

const DateField: React.FC<Props> = ({ date, handleChange, disabled }) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
            clearable
            variant="inline"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            placeholder="10/10/2018"
            invalidDateMessage="Укажите правильный формат даты"
            autoOk
            value={date}
            disableFuture
            onChange={date => handleChange(date)}    
            disabled={disabled}
        />  
</MuiPickersUtilsProvider>
  )
};

export default DateField;
