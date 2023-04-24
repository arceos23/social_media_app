import { FC } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoritesCount from "@/components/FavoritesCount";
import CommentsCount from "@/components/CommentsCount";
import DeletePost from "@/components/DeletePost";
import { Timestamp } from "firebase/firestore";
import { auth } from "@/lib/firebase";

type timestampType = {
  seconds: number;
  nanoseconds: number;
};

type PostProps = {
  displayName: string;
  docId: string;
  avatar: string;
  title: string;
  src: string;
  body: string;
  numHearts: number;
  timestamp: timestampType;
  comments: Array<object>;
  link: boolean;
  uid: string;
};

const Post: FC<PostProps> = ({
  displayName,
  docId,
  avatar,
  title,
  timestamp,
  src,
  body,
  numHearts,
  comments,
  link,
  uid,
}) => {
  const date = new Timestamp(Number(timestamp.seconds), Number(timestamp.nanoseconds)).toDate();
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar>{avatar}</Avatar>}
        title={displayName}
        subheader={date.toLocaleDateString() + " " + date.toLocaleTimeString("en-US")}
      ></CardHeader>
      {src && <CardMedia component="img" height="194" sx={{ objectFit: "contain" }} src={src} alt={body}></CardMedia>}
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <FavoritesCount {...{ numHearts }}></FavoritesCount>
          {link ? (
            <Link href={`/${docId}`}>
              <CommentsCount {...{ numComments: comments.length }}></CommentsCount>
            </Link>
          ) : (
            <CommentsCount {...{ numComments: comments.length }}></CommentsCount>
          )}
          {auth.currentUser?.uid === uid && <DeletePost {...{ docId }}></DeletePost>}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Post;
