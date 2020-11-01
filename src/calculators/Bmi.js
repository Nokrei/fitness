import React, { useState, useEffect } from "react";
import useWindowDimensions from "../useWindowDimensions";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Bmi = () => {
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

  //handle BMI calculation
  let heightField;
  let weightField;

  const [bmi, setBmi] = useState({
    value: "",
    success: "",
    errors: [],
  });
  const [range, setRange] = useState("");
  useEffect(() => {
    if (Number(bmi.value) < 18.5) {
      setRange("underweight");
    } else if (Number(bmi.value) >= 18.5 && Number(bmi.value) < 25) {
      setRange("normal");
    } else if (Number(bmi.value) >= 25 && Number(bmi.value) < 30) {
      setRange("overweigth");
    } else if (Number(bmi.value) >= 30) {
      setRange("obese");
    }
  }, [bmi]);

  const handleCalc = (e) => {
    let errorMessages = [];
    e.preventDefault();
    let bodyParams = {
      height: Number(heightField.value) / 100,
      weight: Number(weightField.value),
    };
    if (heightField.value.length === 0) {
      errorMessages.push("Please enter your height");
    }
    if (weightField.value.length === 0) {
      errorMessages.push("Please enter your weight");
    }

    let calc = (
      bodyParams.weight /
      (bodyParams.height * bodyParams.height)
    ).toFixed(1);
    if (errorMessages.length > 0) {
      setBmi({
        ...bmi,
        success: false,
        errors: errorMessages,
      });
    } else {
      setBmi({
        ...bmi,
        value: calc,
        success: true,
        errors: [],
      });
    }
    
  };

  return (
    <div className={contentClass}>
      <Typography variant="h5" noWrap>
        BMI
      </Typography>
      <Typography variant="body1" >
        Body mass index &#40;BMI&#41; is a value derived from the mass
        &#40;weight&#41; and height of a person. The BMI is defined as the body
        mass divided by the square of the body height, and is universally
        expressed in units of kg/m2, resulting from mass in kilograms and height
        in metres.The BMI is a convenient rule of thumb used to broadly
        categorize a person as underweight, normal weight, overweight, or obese
        based on tissue mass &#40;muscle, fat, and bone&#41; and height.
        Commonly accepted BMI ranges are underweight &#40;under 18.5 kg/m2&#41;,
        normal weight &#40;18.5 to 25&#41;, overweight &#40;25 to 30&#41;, and
        obese &#40;over 30&#41;.
      </Typography>
      <br />
      <br />
      <Typography variant="h6">Calculate your BMI</Typography>
      <br />

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
      </div>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleCalc}>
        Calculate
      </Button>

      {bmi.success && (
        <Typography variant="h6" style={{ marginTop: "1em" }}>
          Your BMI is {bmi.value}, it falls within the {range} range.
        </Typography>
      )}
      {bmi.errors.length > 0 && (
        <div style={{ marginTop: "1em" }}>
          {bmi.errors.map((error, index) => (
            <Typography key={index} variant='body1' color='secondary'>
              {error}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bmi;
