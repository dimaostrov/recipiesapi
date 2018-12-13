import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import withRoot from '../withRoot';
import { useDebounce } from 'use-debounce';
import {setConfig} from 'react-hot-loader';

setConfig({pureSFC: true});

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  backButton: {
    position: 'fixed',
    top: 0,
    left: 0
  }
});

function AmazonRecipe(props) {
  const { classes } = props;
  const [ input, changeInput ] = useState();
  const debouncedInput = useDebounce(input, 600)
  return (
    <div className={classes.root}>
      <Button component={Link} to="/" className={classes.backButton}>Back</Button>
      <Input onChange={(e) => changeInput(e.target.value)} />
      <p>value: {input}</p>
      <p>debouncedValue: {debouncedInput}</p>
    </div>
  );
}

AmazonRecipe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(AmazonRecipe));


