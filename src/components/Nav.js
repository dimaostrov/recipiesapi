import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link as ScrollLink } from 'react-scroll'

import { Link as GatsbyLink } from "gatsby";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar({classes}) {
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography component={ScrollLink} to='hero' smooth={true} variant="h6" color="inherit" className={classes.grow}>
            Dmitriy Ostrov Personal Site
          </Typography>
          <Button component={ScrollLink} to='portfolio' smooth={true} color="inherit" >Portfolio</Button>
          <Button component={ScrollLink} to='about' smooth={true} color="inherit">About</Button>
          <Button component={GatsbyLink} to="/demo">Recipes Demo</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);