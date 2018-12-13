import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
// import Skills from '../components/Skills';
import Footer from "../components/Footer";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 10
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Nav />
        <div className={classes.root}>
          <Element name="hero">
          <Hero />
          </Element>
          <Element name="about">
          <About />
          </Element>
          <Element name="portfolio">
            <Portfolio />
          </Element>
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
