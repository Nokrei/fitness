import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Route, Link } from "react-router-dom";
import SideBar from './SideBar';
import Footer from './Footer'
const LayoutRoute =(props)=>{
    return(
        <React.Fragment>
            <SideBar
        links={[
            {label: 'INFO', path: 'infoscreen'},
            {label: 'FAQ', path: 'faq'},

        ]}
        sideLinks={[
            {label: 'BMI', path: 'bmi'},
            {label: 'BMR', path: 'bmr'},
            {label: 'Body Fat', path: 'bodyfat'},
            {label: 'Exercise', path: 'exercise'},
            {label: 'Diet', path:'diet'}
            
        ]}
        />
        
         <Route
          path={props.path}
          exact={props.exact}
          component={props.component}
        />
        <Footer />
         
        </React.Fragment>
        
        
    )
}

export default LayoutRoute