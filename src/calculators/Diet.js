import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "../useWindowDimensions";
import Button from "@material-ui/core/Button";
// Import components for table
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Diet = () => {
  // Handle window size
  const { width } = useWindowDimensions();

  const [contentClass, setContentClass] = useState("");
  const [inputClass, setInputClass] = useState("");
  useEffect(() => {
    if (width > 500) {
      setContentClass("content--wide");
      setInputClass("input--wide");
    } else {
      setContentClass("content--narrow");
      setInputClass("input--narrow");
    }
  }, [width]);

  // Code for table
  const useStyles = makeStyles({
    table: {
      minWidth: 250,
      
    },
  });

  function createData(name, calories, fat, carbs, protein, gram) {
    return { name, calories, fat, carbs, protein, gram };
  }

  const [rows, setRows] = useState([]);

  const classes = useStyles();

  // Meal array
  let gramField;
  const meals = [
    {
      name: "Choose Meal",
      protein: 0,
      fat: 0,
      carbs: 0,
      calories: 0,
    },
    {
      name: "white rice",
      protein: 2,
      fat: 0,
      carbs: 29,
      calories: 130,
    },
    {
      name: "brown rice",
      protein: 2.5,
      fat: 0.9,
      carbs: 22,
      calories: 110,
    },
    {
      name: "yellow rice",
      protein: 1.9,
      fat: 0.2,
      carbs: 21,
      calories: 95,
    },
    {
      name: "penne pasta",
      protein: 5.7,
      fat: 0.9,
      carbs: 30,
      calories: 157,
    },
    {
      name: "spaghetti pasta",
      protein: 5.8,
      fat: 0.9,
      carbs: 30,
      calories: 157,
    },
    {
      name: "rotini pasta",
      protein: 8,
      fat: 1.3,
      carbs: 43,
      calories: 220,
    },
    {
      name: "potato",
      protein: 1.6,
      fat: 2.4,
      carbs: 19.3,
      calories: 104,
    },
    {
      name: "sweet potato",
      protein: 1.6,
      fat: 0,
      carbs: 20.1,
      calories: 86,
    },
    {
      name: "quinoa",
      protein: 13,
      fat: 6,
      carbs: 69,
      calories: 374,
    },
    {
      name: "bulgur",
      protein: 3,
      fat: 0.2,
      carbs: 18.5,
      calories: 83,
    },
  ];
  //State managment for Autocomplete
  const [value, setValue] = useState(meals[0]);
  const [inputValue, setInputValue] = useState("");
  //State management for button
  const [meal, setMeal] = useState({
    success: false,
    name: "",
    protein: "",
    fat: "",
    carbs: "",
    calories: "",
  });

  const handleCalc = () => {
    let calc = {
      name: value.name,
      gram: Number(gramField.value),
      protein:
        (Number(gramField.value) / 100).toFixed(0) *
        Number(value.protein).toFixed(0),
      fat:
        (Number(gramField.value) / 100).toFixed(0) *
        Number(value.fat).toFixed(0),
      carbs:
        (Number(gramField.value) / 100).toFixed(0) *
        Number(value.carbs).toFixed(0),
      calories:
        (Number(gramField.value) / 100).toFixed(0) *
        Number(value.calories).toFixed(0),
    };
    setMeal({
      ...meal,
      success: true,
      name: calc.name,
      protein: calc.protein,
      fat: calc.fat,
      carbs: calc.carbs,
      calories: calc.calories,
    });

    setRows((rows) => [...rows, calc]);
    
  };

  return (
    <div className={contentClass}>
      <Typography variant="h5">Diet Calculator</Typography>
      <Typography variant="body1">
        Use this calculator to estimate the calories and macronutriets of your
        meals.
      </Typography>
      <br />
      <br />
      <Typography variant="h6">Calculate Calories</Typography>
      <br />
      <div className="meal">
        <Autocomplete
          id="combo-box-demo"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={meals}
          getOptionLabel={(option) => option.name}
          style={{ width: "15em" }}
          renderInput={(params) => (
            <TextField {...params} label="Choose Meal" variant="outlined" />
          )}
        />
        <TextField
          label="Grams"
          type="number"
          variant="outlined"
          style={{ width: "10em" }}
          inputRef={(comp) => (gramField = comp)}
        />
        <Button
          className="meal__button"
          variant="contained"
          color="primary"
          onClick={handleCalc}
        >
          <Typography variant="h4">+</Typography>
        </Button>
      </div>
        <br/>
        <br/>
      <TableContainer component={Paper} style={{maxWidth:'40em'}}>
        <Table className={classes.table} aria-label="simple table" >
          <TableHead>
            <TableRow >
              <TableCell>Meal</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Grams</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} hover>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.gram}</TableCell>
              </TableRow>
            ))}
            <TableRow hover>
              <TableCell>Total</TableCell>
              <TableCell align="right">
                {rows.map((row) => row.calories).reduce((a, b) => a + b, 0)}
              </TableCell>
              <TableCell align="right">
                {rows.map((row) => row.fat).reduce((a, b) => a + b, 0)}
              </TableCell>
              <TableCell align="right">
                {rows.map((row) => row.carbs).reduce((a, b) => a + b, 0)}
              </TableCell>
              <TableCell align="right">
                {rows.map((row) => row.protein).reduce((a, b) => a + b, 0)}
              </TableCell>
              <TableCell align="right">
                {rows.map((row) => row.gram).reduce((a, b) => a + b, 0)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Diet;
