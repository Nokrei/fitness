import React, { useState, useEffect } from "react";
import useWindowDimensions from "../useWindowDimensions";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Bmr = () => {
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
  //code for radio inputs
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //code for text inputs and button
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  //handle BMR calculation
  let heightField;
  let weightField;
  let ageField;
  const [bmr, setBmr] = useState({
    value: "",
    success: false,
    errors: [],
  });
  const handleCalc = (e) => {
    let errorMessages = [];
    e.preventDefault();
    let bodyParams = {
      height: Number(heightField.value),
      weight: Number(weightField.value),
      age: Number(ageField.value),
    };
    if (heightField.value.length === 0) {
      errorMessages.push("Please enter your height");
    }
    if (weightField.value.length === 0) {
      errorMessages.push("Please enter your weight");
    }
    if (ageField.value.length === 0) {
      errorMessages.push("Please enter your age");
    }
    if (value === "female") {
      let calc = (
        655 +
        9.6 * bodyParams.weight +
        1.8 * bodyParams.height -
        4.7 * bodyParams.age
      ).toFixed(0);
      if (errorMessages.length > 0) {
        setBmr({
          ...bmr,
          success: false,
          errors: errorMessages,
        });
      } else {
        setBmr({
          ...bmr,
          value: calc,
          success: true,
          errors: [],
        });
      }
    } else if (value === "male") {
      let calc = (
        66 +
        13.7 * bodyParams.weight +
        5 * bodyParams.height -
        6.8 * bodyParams.age
      ).toFixed(0);
      if (errorMessages.length > 0) {
        setBmr({
          ...bmr,
          success: false,
          errors: errorMessages,
        });
      } else {
        setBmr({
          ...bmr,
          value: calc,
          success: true,
          errors: [],
        });
      }
    }
  };

  return (
    <div className={contentClass}>
      <Typography variant="h5">BMR</Typography>
      <Typography variant="body1" wrap>
        Basal metabolic rate (BMR) is often used interchangeably with resting
        metabolic rate (RMR). While BMR is a minimum number of calories required
        for basic functions at rest, RMR — also called resting energy
        expenditure (REE) — is the number of calories that your body burns while
        it’s at rest. Although BMR and RMR slightly differ from each other, your
        RMR should be an accurate estimate of your BMR.
      </Typography>
      <br />
      <br />
      <Typography variant="h6">Calculate your BMR</Typography>
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
          />
        </RadioGroup>
      </FormControl>
      <div className={classes.root} noValidate autoComplete="off">
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Height in cm"
          type="number"
          inputRef={(comp) => (heightField = comp)}
        />
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Weight in kg"
          type="number"
          inputRef={(comp) => (weightField = comp)}
        />
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Age"
          type="number"
          inputRef={(comp) => (ageField = comp)}
        />
      </div>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleCalc}>
        Calculate
      </Button>
      {bmr.success && (
        <Typography variant="h6" style={{ marginTop: "1em" }}>
          Your BMR is {bmr.value}
        </Typography>
      )}
      {bmr.errors.length > 0 && (
        <div style={{ marginTop: "1em" }}>
          {bmr.errors.map((error, index) => (
            <Typography key={index} variant="body1" color="secondary">
              {error}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bmr;
