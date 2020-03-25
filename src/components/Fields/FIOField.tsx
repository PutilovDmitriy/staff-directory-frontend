import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  FIO: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const FIOField: React.FC<Props> = ({ FIO, handleChange, disabled }) => {
  return (
    <TextField
      error={false}
      id="input-fio"
      label={true ? "ФИО" : "Error"}
      value={FIO}
      helperText={true ? "" : "Incorrect entry."}
      variant="outlined"
      onChange={handleChange}
      disabled={disabled}
      autoFocus={true}
    />
  );
};

export default FIOField;
