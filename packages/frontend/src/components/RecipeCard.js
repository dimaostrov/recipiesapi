import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import HealthChip from './HealthChip';


const styles = theme => ({
  card: {
    maxWidth: '15rem',
    margin: '1rem',
    height: '30rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  render() {
    const { classes, recipe } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.label}
        />
        <CardMedia
          className={classes.media}
          image={recipe.image}
          title={recipe['label']}
          />
        <CardContent>
          <Typography component="p">
            {recipe.ingredients.map(x => <p>{x.text}</p>)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);


//recipe.healthLabels.map(x => <HealthChip tag={x}/>)}