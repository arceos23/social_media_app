import { FC } from "react";
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
import { Timestamp } from "firebase/firestore";

type timestampType = {
  seconds: number;
  nanoseconds: number;
};

type PostProps = {
  displayName: string;
  pid: string;
  avatar: string;
  title: string;
  src: string;
  body: string;
  hearts: number;
  timestamp: timestampType;
  comments: Array<object>;
};

const Post: FC<PostProps> = ({ displayName, pid, avatar, title, timestamp, src, body, hearts, comments }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar>{avatar}</Avatar>}
        title={displayName}
        subheader={
          title +
          " - " +
          new Timestamp(Number(timestamp.seconds), Number(timestamp.nanoseconds)).toDate().toLocaleDateString()
        }
      ></CardHeader>
      <CardMedia component="img" height="194" sx={{ objectFit: "contain" }} src={src} alt={body}></CardMedia>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <FavoritesCount {...{ hearts }}></FavoritesCount>
        <Link href={`/${pid}`}>
          <CommentsCount {...{ numComments: comments.length }}></CommentsCount>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
