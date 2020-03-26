import React, { ChangeEvent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { positions } from "../../consts";

interface Props {
  position: string | null;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const PositionField: React.FC<Props> = ({
  position,
  handleChange,
  disabled
}) => {
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
  );
};

export default PositionField;
