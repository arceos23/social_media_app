import Link from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoritesCount from "@/components/FavoritesCount";
import CommentsCount from "@/components/CommentsCount";

type PostProps = {
  author: string;
  uid: string;
  avatar: string;
  title: string;
  src: string;
  body: string;
  hearts: number;
  comments: number;
};

const Post: React.FunctionComponent<PostProps> = ({ author, uid, avatar, title, src, body, hearts, comments }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader avatar={<Avatar>{avatar}</Avatar>} title={author} subheader={title}></CardHeader>
      <Link href="/1">
        <CardMedia component="img" height="194" sx={{ objectFit: "contain" }} src={src} alt={body}></CardMedia>
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {body}
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <FavoritesCount></FavoritesCount>
        <CommentsCount></CommentsCount>
      </CardActions>
    </Card>
  );
};

export default Post;
