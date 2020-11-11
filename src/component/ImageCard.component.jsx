import React from "react";
import "./ImageCard.styles.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const ImageCard = () => {
  return (
    <>
        <Card className="card-container">
          <CardMedia
            className="card-media-1"
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="image-title"
              className="image-title"
            >
            Maldives
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="image-description"
            >
            The Maldives are home to some of the world's most ravishing island, but it's the sead. which truly makes these island shine. luminous aquamarine waters with crystal clarity lap upon these dazzing white shores, which barely peek above the Indian ocean
            </Typography>
          </CardContent>
        </Card>

        <Card className="card-container">
        <CardMedia
          className="card-media-2"
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="image-title"
            className="image-title"
          >
            Bora Bora
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="image-description"
          >
            Shaped like a giant sombrero, this lush volcainc island stars in countless
            South Pacific fantasies. The focal point and best asset of this tropical beauty 
            is its ravishing legoon in technicolor turqoise. Fish, turtles, sharks, and rays swim in the clear waters.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ImageCard;
