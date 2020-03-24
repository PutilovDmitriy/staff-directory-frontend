import React, {ChangeEvent} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

interface Props {
    gender: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean,
}

const GenderField: React.FC<Props> = ({gender, handleChange, disabled}) => {
  
  return (
    <FormControl component="fieldset" disabled={disabled}>
        <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Мужской" />
            <FormControlLabel value="male" control={<Radio />} label="Женский" />
        </RadioGroup>
    </FormControl>

  )
};

export default GenderField;
