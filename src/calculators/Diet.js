import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
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
import { PieChart } from "react-minimal-pie-chart";
const Diet = () => {
  const [globalState, setGlobalState] = useContext(AppContext);
  // Handle window size
  const { width } = useWindowDimensions();

  const [contentClass, setContentClass] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [tableStyle, setTableStyle] = useState({ maxWidth: "32em" });
  useEffect(() => {
    if (width > 600) {
      setContentClass("content--wide");
      setInputClass("input--wide");
      setTableStyle({ maxWidth: "32em" });
      setGlobalState({ ...globalState, fontSize: 18 });
    } else {
      setContentClass("content--narrow");
      setInputClass("input--narrow");
      setTableStyle({ ...tableStyle, overflowY: "visible", maxWidth: "32em" });
      setGlobalState({ ...globalState, fontSize: 22 });
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
      name: "",
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
    {
      name: "chicken breast, no skin",
      protein: 23.1,
      fat: 1.2,
      carbs: 0,
      calories: 110,
    },
    {
      name: "chicken wing, with skin",
      protein: 18.3,
      fat: 16,
      carbs: 0,
      calories: 222,
    },
    {
      name: "chicken thigh, no skin",
      protein: 19.7,
      fat: 3.9,
      carbs: 0,
      calories: 119,
    },
    {
      name: "chicken drumstick, with skin",
      protein: 19.3,
      fat: 8.7,
      carbs: 0,
      calories: 161,
    },
    {
      name: "chicken liver",
      protein: 16.9,
      fat: 4.8,
      carbs: 0,
      calories: 116,
    },
    {
      name: "ground beef, 15% fat",
      protein: 18.6,
      fat: 15,
      carbs: 0,
      calories: 215,
    },
    {
      name: "Beef Top Loin Steak",
      protein: 20.6,
      fat: 15.5,
      carbs: 0,
      calories: 228,
    },
    {
      name: "Wagyu Beef Tenderloin",
      protein: 18.9,
      fat: 17.7,
      carbs: 0,
      calories: 237,
    },
    {
      name: "Beef liver",
      protein: 20.4,
      fat: 3.6,
      carbs: 3.9,
      calories: 135,
    },
    {
      name: "Beef Sirloin Steak",
      protein: 20.3,
      fat: 12.7,
      carbs: 0,
      calories: 201,
    },
    {
      name: "Beef Jerky",
      protein: 32.2,
      fat: 25.6,
      carbs: 11,
      calories: 410,
    },
    {
      name: "Beef Ribeye Filet",
      protein: 22.7,
      fat: 4.7,
      carbs: 0,
      calories: 133,
    },
    {
      name: "Carrot",
      protein: 0.9,
      fat: 0.2,
      carbs: 9.6,
      calories: 41,
    },
    {
      name: "Broccoli",
      protein: 2.8,
      fat: 0.4,
      carbs: 6.6,
      calories: 34,
    },
    {
      name: "Cucumber",
      protein: 0.7,
      fat: 0.1,
      carbs: 3.6,
      calories: 15,
    },
    {
      name: "Iceber Lettuce",
      protein: 0.9,
      fat: 0.1,
      carbs: 3,
      calories: 14,
    },
    {
      name: "Romaine Lettuce",
      protein: 1.2,
      fat: 0.3,
      carbs: 3.3,
      calories: 17,
    },
    {
      name: "Lentils",
      protein: 25.8,
      fat: 1.1,
      carbs: 60.1,
      calories: 353,
    },
    {
      name: "Green Beans",
      protein: 1.8,
      fat: 0.1,
      carbs: 7.1,
      calories: 31,
    },
    {
      name: "Chickpeas",
      protein: 19.3,
      fat: 6,
      carbs: 60.7,
      calories: 364,
    },
    {
      name: "Kidney Beans",
      protein: 23.6,
      fat: 0.8,
      carbs: 60,
      calories: 333,
    },
    {
      name: "White Beans",
      protein: 23.4,
      fat: 0.9,
      carbs: 60.3,
      calories: 333,
    },
    {
      name: "Tomato",
      protein: 0.9,
      fat: 0.2,
      carbs: 3.9,
      calories: 18,
    },
    {
      name: "Olive Oil",
      protein: 0,
      fat: 100.3,
      carbs: 0,
      calories: 886,
    },
    {
      name: "Vegetable Oil",
      protein: 0,
      fat: 100,
      carbs: 0,
      calories: 883,
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
  const totalCalories = rows
    .map((row) => row.calories)
    .reduce((a, b) => a + b, 0);
  const totalFat = rows.map((row) => row.fat).reduce((a, b) => a + b, 0);
  const totalCarbs = rows.map((row) => row.carbs).reduce((a, b) => a + b, 0);
  const totalProtein = rows
    .map((row) => row.protein)
    .reduce((a, b) => a + b, 0);
  
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
          renderInput={(params) => (
            <TextField {...params} label="Choose Meal" variant="outlined" />
          )}
        />
        <TextField
          label="Grams"
          type="number"
          variant="outlined"
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
      <br />
      <br />
      <TableContainer component={Paper} style={tableStyle} className="dietTable">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ padding: "0.5em" }}>Meal</TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right">
                Calories
              </TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right">
                Fat&nbsp;(g)
              </TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right">
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right">
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} hover>
                <TableCell
                  style={{ padding: "0.5em" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell style={{ padding: "0.5em" }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell style={{ padding: "0.5em" }} align="right">
                  {row.fat}
                </TableCell>
                <TableCell style={{ padding: "0.5em" }} align="right">
                  {row.carbs}
                </TableCell>
                <TableCell style={{ padding: "0.5em" }} align="right">
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
            <TableRow hover>
              <TableCell style={{ padding: "0.5em" }}>Total</TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right" color='primary'>
                {totalCalories}
              </TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right">
                {totalFat}
              </TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right">
                {totalCarbs}
              </TableCell>
              <TableCell style={{ padding: "0.5em" }} align="right">
                {totalProtein}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      
    </div>
  );
};

export default Diet;
