import React, {ChangeEvent} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface Props {
    isFired: boolean,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean,
}

const FiredField: React.FC<Props> = ({ isFired, handleChange, disabled }) => {
  return (
    <FormControlLabel
        disabled={disabled}
        control={<Switch checked={isFired} onChange={handleChange} name="checkedA" />}
        label="Уволен"
        labelPlacement="top"
    />
  )
};

export default FiredField;
