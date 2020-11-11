import React from "react";
import "./ImageCard.styles.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ImageCard = () => {
  return (
    <>
      <Card className="card-container">
        <CardMedia className="card-media" title="Contemplative Reptile" />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="image-title"
            className="image-title"
          >
            Lizard
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="image-description"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ImageCard;
