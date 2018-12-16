import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from '@material-ui/core/Avatar';

const HealthChip = tag => (
  <Chip
    avatar={<Avatar>{determingTag(tag)}</Avatar>}
    label={tag}
    clickable
    color="primary"
  />
);

const determineTag = (tag) => {
    switch (tag){
        case "Peanut-Free":
            

    }
}

export default HealthChip

,
	"Tree-Nut-Free",
	"Vegan",
	"Vegetarian",
	"Alcohol-Cocktail",
	"Alcohol-Free",
	"Sugar-Conscious"
