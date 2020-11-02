import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import InfoScreen from "./InfoScreen";
import Faq from "./Faq";
import Bmi from "./calculators/Bmi";
import Bmr from "./calculators/Bmr";
import BodyFat from "./calculators/BodyFat";
import Exercise from "./calculators/Exercise";
import Diet from "./calculators/Diet";
import "./App.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, red, orange, green, black } from "@material-ui/core/colors";

const App = () => {
  const [globalState, setGlobalState] = useState({
    mode: "light",
    on:'off',
    fontSize: 18
  });
  const theTheme = createMuiTheme({
    typography: {
      htmlFontSize: globalState.fontSize,
    },
    palette: {
      type: globalState.mode,
       primary: {
          main: orange[600]
       }
    },
  });

  return (
    <ThemeProvider theme={theTheme}>
      <AppContext.Provider value={[globalState, setGlobalState]}>
        <BrowserRouter>
          <Switch>
            <LayoutRoute path="/" exact={true} component={InfoScreen} />
            <LayoutRoute
              path="/infoscreen"
              exact={true}
              component={InfoScreen}
            />
            <LayoutRoute path="/faq" exact={true} component={Faq} />
            <LayoutRoute path="/bmi" exact={true} component={Bmi} />
            <LayoutRoute path="/bmr" exact={true} component={Bmr} />
            <LayoutRoute path="/bodyfat" exact={true} component={BodyFat} />
            <LayoutRoute path="/exercise" exact={true} component={Exercise} />
            <LayoutRoute path="/diet" exact={true} component={Diet} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
