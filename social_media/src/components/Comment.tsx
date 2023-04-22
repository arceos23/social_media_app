import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Timestamp } from "firebase/firestore";

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
};

const Comment: FC<CommentProps> = ({ displayName: author, uid: cid, avatar, body, timestamp }) => {
  console.log(timestamp);
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar>{avatar}</Avatar>}
        title={author}
        subheader={new Timestamp(Number(timestamp.seconds), Number(timestamp.nanoseconds))
          .toDate()
          .toLocaleDateString()}
      ></CardHeader>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
