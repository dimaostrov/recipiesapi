import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import withRoot from '../withRoot';
import { useDebounce } from 'use-debounce';
import edamamGet from '../api/edamam'
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
  const searchResult = edamamGet(debouncedInput);
  const exampleUri = 'http://www.edamam.com/ontologies/edamam.owl#recipe_09b4dbdf0c7244c462a4d2622d88958e'
  const uniqueizer = (key) => {
    return key.split('recipe_')[1]
  }
  return (
    <div className={classes.root}>
      <Button component={Link} to="/" className={classes.backButton}>Back</Button>
      <Input onChange={(e) => changeInput(e.target.value)} />
      <p>value: {input}</p>
      <p>debouncedValue: {debouncedInput}</p>
      <p>{uniqueizer(exampleUri)}</p>
    </div>
  );
}

AmazonRecipe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(AmazonRecipe));


