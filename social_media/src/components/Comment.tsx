import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import DeleteComment from "@/components/DeleteComment";
import { Timestamp } from "firebase/firestore";
import { auth } from "@/lib/firebase";

type timestampType = {
  seconds: number;
  nanoseconds: number;
};

type CommentProps = {
  displayName: string;
  uid: string;
  avatar: string;
  body: string;
  timestamp: timestampType;
  docId: string;
};

const Comment: FC<CommentProps> = ({ displayName, uid, avatar, body, timestamp, docId }) => {
  let comment = { body, displayName, timestamp, uid };
  const date = new Timestamp(Number(timestamp.seconds), Number(timestamp.nanoseconds)).toDate();
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar>{avatar}</Avatar>}
        title={displayName}
        subheader={`${date.toLocaleDateString()} ${date.toLocaleTimeString("en-US")}`}
      ></CardHeader>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {auth.currentUser?.uid === uid && <DeleteComment comment={comment} docId={docId}></DeleteComment>}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Comment;
