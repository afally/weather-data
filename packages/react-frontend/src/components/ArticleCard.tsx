import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ArticleType } from "../types";

const ArticleCard: React.FC<ArticleType> = ({
  title,
  description,
  imageUrl,
  author,
  source,
  publishedAt,
  url,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image={imageUrl}
      />
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          <p>
            {" "}
            <small
              style={{
                fontStyle: "italic",
                color: "gray",
              }}
            >
              Description : {description ? description : " Not Available"}
            </small>
            <br></br>
            <small
              style={{
                fontStyle: "italic",
                color: "black",
              }}
            >
              Title: {title}
              <br></br>
              Source: {source.name}
              <br></br>
            </small>
          </p>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ flex: "1 0 auto" }}
        ></Typography>
      </CardContent>

      <CardActions>
        <Button size="small">
          {new Date(publishedAt).toLocaleDateString()}
        </Button>
        <Button size="small">
          <a href={url}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default ArticleCard;
