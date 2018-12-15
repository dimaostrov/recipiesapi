import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import RecipeCard from '../components/RecipeCard'
import { withStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
import withRoot from "../withRoot";
import { setConfig } from "react-hot-loader";
import axios from "axios";

setConfig({ pureSFC: true });

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  },
  backButton: {
    position: "fixed",
    top: 0,
    left: 0
  },
  search: {
    top:0,
    position: 'absolute'
  }
});

function AmazonRecipe(props) {
  const { classes } = props;
  const [input, changeInput] = useState();
  const [recipes, changeRecipes] = useState();
  const fetchData = async () => {
    const data = await axios.post("http://localhost:3000/api/search", {
      "query": input
    })

    changeRecipes(data.data);
  };
  const updateResults = (e) => {
    changeInput(e.target.value)
    fetchData()
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Button component={Link} to="/" className={classes.backButton}>
        Back
      </Button>
      <Input className={classes.search} onChange={e => updateResults(e)} />
      {console.log(recipes)}
      <div style={{display: 'flex', flexWrap: 'wrap' }}>
      {recipes && recipes.map(x => <RecipeCard recipe={x}/>)}
      </div>
    </div>
  );
}

AmazonRecipe.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(AmazonRecipe));
