import React, { ChangeEvent, useState, useEffect } from "react";
import { Worker } from "../redux/types/Worker";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FIOField from "./Fields/FIOField";
import PositionField from "./Fields/PositionField";
import DateField from "./Fields/DateField";
import GenderField from "./Fields/GenderField";
import FiredField from "./Fields/FiredField";
import ColleaguesField from "./Fields/ColleaguesField";
import { isNull } from "util";
import { bildWorkerObj, dateFormat } from "../consts";
import { colleaguesObj } from "../redux/types/colleaguesObj";
import { Gender } from "../redux/types/Gender";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flex: "0 1 auto",
      width: "300px",
      height: "480px",
      margin: "10px 5px 5px 5px",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "20px 5px",
      boxSizing: "border-box",
      border: "4px solid #3f51b5"
    },
    disable: {
      display: "flex",
      flex: "0 1 auto",
      width: "300px",
      height: "480px",
      margin: "10px 5px 5px 5px",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "20px 5px",
      boxSizing: "border-box",
      border: "4px solid #ccc"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    }
  })
);

interface Props {
  staffData: Worker[];
  colleaguesList: colleaguesObj[];
  activeWorker: number | null | undefined;
  activeWorkerData: Worker;
  updateWorker: (worker: Worker, id: number) => void;
}

const FormWorker: React.FC<Props> = ({
  staffData,
  activeWorker,
  colleaguesList,
  activeWorkerData,
  updateWorker
}) => {
  const classes = useStyles();
  const [FIO, setFIO] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [gender, setGender] = useState<Gender>("female");
  const [isFired, setFired] = useState(false);
  const [colleagues, setColleagues] = useState<number[]>([]);

  useEffect(() => {
    if (activeWorker !== null) {
      setFIO(activeWorkerData.FIO);
      setPosition(activeWorkerData.position);
      setDate(new Date(activeWorkerData.birthday || 0));
      setGender(activeWorkerData.gender);
      setFired(activeWorkerData.isFired);
      setColleagues(activeWorkerData.colleagues);
    } else {
      setFIO("");
      setPosition("");
      setDate(null);
      setGender("female");
      setFired(false);
      setColleagues([]);
    }
  }, [activeWorker]);

  const handleFIOChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFIO(event.target.value.replace(/[^A-Za-zА-Яа-яЁё\ ]/g, ""));
    if (activeWorker !== null && activeWorker !== undefined) {
      updateWorker(
        bildWorkerObj(
          activeWorker,
          event.target.value.replace(/[^A-Za-zА-Яа-яЁё\ ]/g, ""),
          position,
          String(dateFormat(date, "yyyy-mm-dd")),
          gender,
          isFired,
          colleagues
        ),
        activeWorker
      );
    }
  };

  const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value);
    if (activeWorker !== null && activeWorker !== undefined) {
      updateWorker(
        bildWorkerObj(
          activeWorker,
          FIO,
          event.target.value,
          String(dateFormat(date, "yyyy-mm-dd")),
          gender,
          isFired,
          colleagues
        ),
        activeWorker
      );
    }
  };

  const handleDateChange = (date: Date | null) => {
    setDate(date);
    if (activeWorker !== null && activeWorker !== undefined) {
      updateWorker(
        bildWorkerObj(
          activeWorker,
          FIO,
          position,
          String(dateFormat(date, "yyyy-mm-dd")),
          gender,
          isFired,
          colleagues
        ),
        activeWorker
      );
    }
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value === "female" ? "female" : "male");
    if (activeWorker !== null && activeWorker !== undefined) {
      updateWorker(
        bildWorkerObj(
          activeWorker,
          FIO,
          position,
          String(dateFormat(date, "yyyy-mm-dd")),
          event.target.value === "female" ? "female" : "male",
          isFired,
          colleagues
        ),
        activeWorker
      );
    }
  };

  const handleFiredChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFired(event.target.checked);
    if (activeWorker !== null && activeWorker !== undefined) {
      updateWorker(
        bildWorkerObj(
          activeWorker,
          FIO,
          position,
          String(dateFormat(date, "yyyy-mm-dd")),
          gender,
          event.target.checked,
          colleagues
        ),
        activeWorker
      );
    }
  };

  const handleColleaguesChange = (event: ChangeEvent<{ value: unknown }>) => {
    setColleagues(event.target.value as number[]);
    if (activeWorker !== null && activeWorker !== undefined) {
      updateWorker(
        bildWorkerObj(
          activeWorker,
          FIO,
          position,
          String(dateFormat(date, "yyyy-mm-dd")),
          gender,
          isFired,
          event.target.value as number[]
        ),
        activeWorker
      );
    }
  };

  let disabled: boolean = isNull(activeWorker);

  return (
    <Paper className={activeWorker ? classes.root : classes.disable}>
      <FIOField FIO={FIO} handleChange={handleFIOChange} disabled={disabled} />
      <PositionField
        position={position}
        handleChange={handlePositionChange}
        disabled={disabled}
      />
      <DateField
        date={date}
        handleChange={handleDateChange}
        disabled={disabled}
      />
      <GenderField
        gender={gender}
        handleChange={handleGenderChange}
        disabled={disabled}
      />
      <FiredField
        isFired={isFired}
        handleChange={handleFiredChange}
        disabled={disabled}
      />
      <ColleaguesField
        colleagues={colleagues}
        colleaguesList={colleaguesList}
        handleChange={handleColleaguesChange}
        disabled={disabled}
      />
    </Paper>
  );
};

export default FormWorker;
