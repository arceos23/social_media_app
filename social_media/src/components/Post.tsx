import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoritesCount from "@/components/FavoritesCount";
import CommentsCount from "@/components/CommentsCount";

const Post = () => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader avatar={<Avatar>R</Avatar>} title="User1" subheader="Seeing the flowers"></CardHeader>
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "contain" }}
        src="dylan-taylor-4ynodQ7QiWY-unsplash.jpg"
        alt="flower meadow with a stream surronded by mountains"
      ></CardMedia>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum expedita eius aperiam adipisci illo
          animi unde qui porro? Ducimus facere aspernatur, cumque provident praesentium officiis! Ducimus corrupti sequi
          laborum!
        </Typography>
      </CardContent>
      <CardActions>
        <FavoritesCount></FavoritesCount>
        <CommentsCount></CommentsCount>
      </CardActions>
    </Card>
  );
};

export default Post;
