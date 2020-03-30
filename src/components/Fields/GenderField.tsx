import React, { ChangeEvent } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Gender } from "../../redux/types/Gender";

interface Props {
  gender: Gender;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const GenderField: React.FC<Props> = ({ gender, handleChange, disabled }) => {
  return (
    <FormControl component="fieldset" disabled={disabled} className="field">
      <FormLabel
        component="legend"
        style={{ textAlign: "center", fontSize: "20px" }}
      >
        Пол
      </FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="gender"
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Мужской" />
        <FormControlLabel value="male" control={<Radio />} label="Женский" />
      </RadioGroup>
    </FormControl>
  );
};

export default GenderField;
