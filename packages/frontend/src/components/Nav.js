import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link as ScrollLink } from "react-scroll";

import { Link as GatsbyLink } from "gatsby";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  tilt: {
    transform: 'rotate(20deg)'
  }
};

class Navbar extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    console.log(this.props)
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const { classes } = this.props;
    const isMobile = width <= 800;
    if (isMobile) {
      return (
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography
                component={ScrollLink}
                to="hero"
                smooth={true}
                variant="h6"
                color="inherit"
                className={classes.tilt}
                offset={-80}
              >
                Dmtr Ostrov
              </Typography>
              <Button
                component={ScrollLink}
                to="portfolio"
                smooth={true}
                color="inherit"
                className={classes.tilt}
                offset={-80}
              >
                Works
              </Button>
              <Button
                component={ScrollLink}
                to="about"
                smooth={true}
                color="inherit"
                className={classes.tilt}
                offset={-80}
              >
                About
              </Button>
              <Button component={GatsbyLink} to="/demo">
                Recipes Demo
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    } else {
      return (
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component={ScrollLink}
                to="hero"
                smooth={true}
                variant="h6"
                color="inherit"
                className={classes.grow}
                spy={true}
                offset={-80}
              >
                Dmitriy Ostrov Personal Site
              </Typography>
              <Button
                component={ScrollLink}
                to="portfolio"
                smooth={true}
                color="inherit"
                offset={-80}
                >
                Portfolio
              </Button>
              <Button
                component={ScrollLink}
                to="about"
                smooth={true}
                color="inherit"
                offset={-80}
              >
                About
              </Button>
              <Button component={GatsbyLink} to="/demo">
                Recipes Demo
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
