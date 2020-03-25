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
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300
    },
    noLabel: {
      marginTop: theme.spacing(3),
      maxWidth: 200
    }
  })
);

interface Props {
  colleaguesList: string[];
  colleagues: string[];
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

  function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }
  return (
    <FormControl
      className={clsx(classes.formControl, classes.noLabel)}
      disabled={disabled}
    >
      <Select
        multiple
        displayEmpty
        value={colleagues}
        onChange={handleChange}
        input={<Input />}
        renderValue={selected => {
          if ((selected as string[]).length === 0) {
            return <em>Коллеги</em>;
          }

          return (selected as string[]).join(", ");
        }}
        MenuProps={MenuProps}
      >
        <MenuItem disabled value="">
          <em>Коллеги</em>
        </MenuItem>
        {colleaguesList.map(name => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, colleagues, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColleaguesField;
