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

const BodyFat = () => {
  //using custom hook to detect browser width and adjust class
  const { width } = useWindowDimensions();

  const [contentClass, setContentClass] = useState("");
  const [inputClass, setInputClass] = useState("");
  useEffect(() => {
    if (width > 600) {
      setContentClass("content--wide");
      setInputClass("input--wide");
    } else {
      setContentClass("content--narrow");
      setInputClass("input--narrow");
    }
  }, [width]);
  //code for radio inputs
  const [value, setValue] = useState("female");

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
  let abdominalField;
  let tricepsField;
  let thighField;
  let suprailiacField;
  let ageField;

  const [bodyFat, setBodyFat] = useState({
    value: "",
    success: false,
    errors: [],
  });
  const handleCalc = (e) => {
    let errorMessages = [];
    e.preventDefault();
    let bodyParams = {
      abdominal: Number(abdominalField.value),
      triceps: Number(tricepsField.value),
      thigh: Number(thighField.value),
      suprailiac: Number(suprailiacField.value),
      age: Number(ageField.value),
    };
    if (abdominalField.value.length === 0) {
      errorMessages.push("Please enter the abdominal value");
    }
    if (tricepsField.value.length === 0) {
      errorMessages.push("Please enter the triceps value");
    }
    if (thighField.value.length === 0) {
      errorMessages.push("Please enter the thigh value");
    }
    if (suprailiacField.value.length === 0) {
      errorMessages.push("Please enter the suprailiac value");
    }
    if (ageField.value.length === 0) {
      errorMessages.push("Please enter your age");
    }
    let skinfolds =
      bodyParams.abdominal +
      bodyParams.triceps +
      bodyParams.thigh +
      bodyParams.suprailiac;
    if (value === "female") {
      let calc = (
        skinfolds * 0.29669 -
        skinfolds * skinfolds * 0.00043 +
        bodyParams.age * 0.02963 +
        1.4072
      ).toFixed(2);
      if (errorMessages.length > 0) {
        setBodyFat({
          ...BodyFat,
          success: false,
          errors: errorMessages,
        });
      } else {
        setBodyFat({
          ...BodyFat,
          value: calc,
          success: true,
          errors: [],
        });
      }
    } else if (value === "male") {
      let calc = (
        skinfolds * 0.29288 -
        skinfolds * skinfolds * 0.0005 +
        bodyParams.age * 0.15845 -
        5.76377
      ).toFixed(2);
      if (errorMessages.length > 0) {
        setBodyFat({
          ...BodyFat,
          success: false,
          errors: errorMessages,
        });
      } else {
        setBodyFat({
          ...BodyFat,
          value: calc,
          success: true,
          errors: [],
        });
      }
    }
  };

  return (
    <div className={contentClass}>
      <Typography variant="h5">Body Fat</Typography>
      <Typography variant="body1" >
        The body fat percentage (BFP) of a human or other living being is the
        total mass of fat divided by total body mass, multiplied by 100; body
        fat includes essential body fat and storage body fat. Essential body fat
        is necessary to maintain life and reproductive functions. The percentage
        of essential body fat for women is greater than that for men, due to the
        demands of childbearing and other hormonal functions. Storage body fat
        consists of fat accumulation in adipose tissue, part of which protects
        internal organs in the chest and abdomen. A number of methods are
        available for determining body fat percentage, such as measurement with
        calipers or through the use of bioelectrical impedance analysis. This
        application makes use of the calliper method. Use the device to grab
        skinfolds in specific parts of the body (abdomen, triceps, thigh and
        suprailiac), then input the values (in mm) into the designated fields
        bellow.
      </Typography>
      <br />
      <br />
      <Typography variant="h6">Calculate your BFP</Typography>
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
          label="Abdominal"
          type="number"
          
          inputRef={(comp) => (abdominalField = comp)}
        />
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Triceps"
          type="number"
          inputRef={(comp) => (tricepsField = comp)}
        />
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Thigh"
          type="number"
          inputRef={(comp) => (thighField = comp)}
        />
        <TextField
          className={inputClass}
          id="standard-basic"
          label="Suprailiac"
          type="number"
          inputRef={(comp) => (suprailiacField = comp)}
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
      {bodyFat.success && (
        <Typography variant="h6" style={{ marginTop: "1em" }}>
          Your BFP is {bodyFat.value}%
        </Typography>
      )}
      {bodyFat.errors.length > 0 && (
        <div style={{ marginTop: "1em" }}>
          {bodyFat.errors.map((error, index) => (
            <Typography key={index} variant="body1" color="secondary">
              {error}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default BodyFat;
