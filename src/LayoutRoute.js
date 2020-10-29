import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Route, Link } from "react-router-dom";
import SideBar from './SideBar'
const LayoutRoute =(props)=>{
    return(
        <React.Fragment>
            <SideBar
        links={[
            {label: 'Info', path: 'infoscreen'},
            {label: 'FAQ', path: 'faq'},

        ]}
        sideLinks={[
            {label: 'BMI', path: 'bmi'},
            {label: 'BMR', path: 'bmr'},
            {label: 'Body Fat', path: 'bodyfat'},
            {label: 'Exercise', path: 'exercise'},
            
        ]}
        />
         <Route
          path={props.path}
          exact={props.exact}
          component={props.component}
        />
        </React.Fragment>
        
        
    )
}

export default LayoutRoute