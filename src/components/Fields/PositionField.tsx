import React, {ChangeEvent} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";


const positions: {id: number, name: string}[] = [{id: 1, name: 'Директор'}, {id: 2, name: 'Менеджер'} , {id: 3, name:'Инженер'}, {id: 4, name: 'Стажёр'} ,{id: 5, name: 'Охраник'}, {id: 6, name: 'Уборщик'}, {id: 7, name: 'Администратор'}, {id: 8, name: 'Водитель'}]

interface IPosition {
    position: string | null
}
interface Props {
    position: string | null,
    handleChange:(event: ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean,
}

const PositionField: React.FC<Props> = ({ position, handleChange, disabled }) => {
    
  return (
    <TextField
        id="outlined-select-currency"
        select
        label="Должность"
        value={position}
        onChange={handleChange}
        helperText="Пожалуйста выберите должность"
        variant="outlined"
        disabled={disabled}
     >
         {positions.map(pos => (
            <MenuItem key={pos.id} value={pos.name}>
              {pos.name}
            </MenuItem>
        ))}
    </TextField>    
  )
};

export default PositionField;
