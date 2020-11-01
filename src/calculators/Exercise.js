import React, { useState, useEffect } from "react";
import useWindowDimensions from "../useWindowDimensions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Exercise = () => {
  //using custom hook to detect browser width and adjust class
  const { width } = useWindowDimensions();

  const [contentClass, setContentClass] = useState("");
  const [inputClass, setInputClass] = useState("");
  useEffect(() => {
    if (width > 800) {
      setContentClass("content--wide");
      setInputClass("input--wide");
    } else {
      setContentClass("content--narrow");
      setInputClass("input--narrow");
    }
  }, [width]);

  //code for select inputs
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  const [state, setState] = useState({
    activity: "",
    name: "hai",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      name: event.target.value,
    });
    
  };
  //Array of activties
  const activities = [
    {
      id: 1,
      name: "walking, slow",
      met: 2.5,
    },
    {
      id: 2,
      name: "walking, medium",
      met: 4.5,
    },
    {
      id: 3,
      name: "walking, fast",
      met: 8.0,
    },
    {
      id: 4,
      name: "bicycling, slow",
      met: 6.8,
    },
    {
      id: 5,
      name: "bicycling, medium",
      met: 8.0,
    },
    {
      id: 6,
      name: "bicycling, fast",
      met: 10.0,
    },
    {
      id: 7,
      name: "running, slow",
      met: 6.0,
    },
    {
      id: 8,
      name: "running, medium",
      met: 10.0,
    },
    {
      id: 9,
      name: "running, fast",
      met: 14.5,
    },
  ];
  //handle Calorie burn calculation
  let weightField;
  let durationField;

  const [calorie, setCalorie] = useState({
    value: "",
    success: false,
    errors: [],
  });
  const handleCalc = () => {
    let errorMessages=[];
    if (weightField.value.length === 0) {
      errorMessages.push("Please enter your weight.");
    }
    if (durationField.value.length === 0) {
      errorMessages.push("Please enter the duration of the exercise.");
    }
    let calc = (
      (Number(durationField.value) *
        Number(state.name) *
        3.5 *
        Number(weightField.value)) /
      200
    ).toFixed(0);
    if (errorMessages.length > 0) {
      setCalorie({
        ...calorie,
        success: false,
        errors: errorMessages,
      });
    } else {
      setCalorie({
        ...calorie,
        value: calc,
        success: true,
        errors: [],
      });
    }
    
  };
  return (
    <div className={contentClass}>
      <Typography variant="h5">Exercise Calorie Burn</Typography>
      <Typography variant="body1" >
        Use this calculator to estimate how many calories you will burn for any
        activity.
      </Typography>
      <br />
      <br />
      <Typography variant="h6">Calculate Calories Burned</Typography>
      <br />
      <div className={classes.root} noValidate autoComplete="off">
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Duration in minutes"
          type="number"
          style={{ marginLeft: "0" }}
          inputRef={(comp) => (durationField = comp)}
        />
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Weight in kg"
          type="number"
          style={{ marginLeft: "0" }}
          inputRef={(comp) => (weightField = comp)}
        />
      </div>
      <FormControl
        style={{ marginLeft: "0", width: "14em" }}
        className={classes.formControl}
      >
        <InputLabel htmlFor="age-native-simple">Activity</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: "Activity",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />

          {activities.map((activity) => (
            <option key={activity.id} value={activity.met}>
              {activity.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleCalc}>
        Calculate
      </Button>
      {calorie.success && (
        <Typography variant="h6" style={{ marginTop: "1em" }}>
          Calories burned: {calorie.value}
        </Typography>
      )}
      {calorie.errors.length > 0 && (
        <div style={{ marginTop: "1em" }}>
          {calorie.errors.map((error, index) => (
            <Typography key={index} variant="body1" color="secondary">
              {error}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercise;
