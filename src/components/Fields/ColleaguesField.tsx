import React, { ChangeEvent } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormLabel from "@material-ui/core/FormLabel";
import clsx from "clsx";
import { colleaguesObj } from "../../redux/types/colleaguesObj";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 220
    }
  })
);

interface Props {
  colleaguesList: colleaguesObj[];
  colleagues: number[];
  handleChange: (event: ChangeEvent<{ value: unknown }>) => void;
  disabled: boolean;
}

const ColleaguesField: React.FC<Props> = ({
  colleaguesList,
  colleagues,
  handleChange,
  disabled
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  function getStyles(name: number, personName: number[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }
  return (
    <FormControl className={classes.formControl} disabled={disabled}>
      <FormLabel component="legend" style={{ textAlign: "center" }}>
        Коллеги
      </FormLabel>
      <Select
        multiple
        displayEmpty
        value={colleagues}
        onChange={handleChange}
        input={<Input />}
        renderValue={selected => {
          if ((selected as number[]).length === 0) {
            return <em>Выберите коллег</em>;
          }
          return (selected as number[]).map(i => {
            let nameId = colleaguesList.find(item => item.id == i);
            return `${nameId?.name}, `;
          });
        }}
        MenuProps={MenuProps}
      >
        <MenuItem disabled value="">
          <em>Коллеги</em>
        </MenuItem>
        {colleaguesList.map(colleague => (
          <MenuItem
            key={colleague.id}
            value={colleague.id}
            style={getStyles(colleague.id, colleagues, theme)}
          >
            {colleague.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColleaguesField;
