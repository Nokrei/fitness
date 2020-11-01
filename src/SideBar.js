import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import AppContext from "./AppContext";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useWindowDimensions from "./useWindowDimensions";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const [globalState, setGlobalState] = useContext(AppContext);
  const handleDark = () => {
    globalState.mode === "light"
      ? setGlobalState({
          ...globalState,
          mode: "dark",
          on:'on'
        })
      : setGlobalState({
          mode: "light",
          on:'off'
        });
    
  };
  const { width } = useWindowDimensions();
  const [toolbarClass, setToolbarClass] = useState("");
  useEffect(() => {
    if (width > 500) {
      setToolbarClass("toolbar--wide");
    } else {
      setToolbarClass("toolbar--narrow");
    }
  }, [width]);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Typography className={toolbarClass} variant="h6" noWrap>
        Calculators
      </Typography>
      <Divider />
      <List>
        {props.sideLinks.map((entry, index) => (
          <Link key={index} className="nav-link" to={entry.path}>
            <ListItem button key={entry.label}>
              <ListItemText primary={entry.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <ul className="nav__links">
              {
                // loop through links
                props.links.map((entry, index) => (
                  // for every link, generate an 'li'
                  <li key={index} className="topNav__links">
                    <Link className="nav-link" to={entry.path}>
                      {entry.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Typography>
        </Toolbar>
        <Button
          onClick={handleDark}
          variant="text"
          style={{ position: "absolute", right: "1em", top: "1.25em" }}
        >
          <WbIncandescentTwoToneIcon/>
        </Button>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onClick={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
