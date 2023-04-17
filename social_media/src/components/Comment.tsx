import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

type CommentProps = {
  author: string;
  cid: string;
  avatar: string;
  body: string;
};

const Comment: FC<CommentProps> = ({ author, cid, avatar, body }) => {
  return (
    <Card>
      <CardHeader avatar={<Avatar>{avatar}</Avatar>} title={author}></CardHeader>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
