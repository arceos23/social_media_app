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
import Heart from "@/components/Heart";
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
  usersHearted: Array<string | undefined>;
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
  usersHearted,
}) => {
  const date = new Timestamp(Number(timestamp.seconds), Number(timestamp.nanoseconds)).toDate();
  let heartStatus = false; // User not signed in
  if (auth.currentUser?.uid !== undefined) {
    heartStatus = usersHearted.includes(auth.currentUser?.uid) ? true : false; // User signed in and check if hearted
  }

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar>{avatar}</Avatar>}
        title={displayName}
        subheader={title + " - " + date.toLocaleDateString() + " " + date.toLocaleTimeString("en-US")}
      ></CardHeader>
      {src && <CardMedia component="img" height="194" sx={{ objectFit: "contain" }} src={src} alt={body}></CardMedia>}
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Heart {...{ docId, numHearts, alreadyHearted: heartStatus }}></Heart>
          {link ? (
            <Link href={`/${docId}`}>
              <CommentsCount {...{ numComments: comments.length, hover: "pointer" }}></CommentsCount>
            </Link>
          ) : (
            <CommentsCount {...{ numComments: comments.length, hover: "" }}></CommentsCount>
          )}
          {auth.currentUser?.uid === uid && <DeletePost {...{ docId }}></DeletePost>}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Post;
