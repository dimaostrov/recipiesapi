import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
// import Skills from '../components/Skills';
import Footer from '../components/Footer'

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 10
  }
});

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Nav />
        <div className={classes.root}>
          <Hero />
          <About />
          <Portfolio />
          <Footer />
        </div>
      </>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
/*
<Skills />
*/
