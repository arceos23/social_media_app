import { FC } from "react";
import Container from "@mui/material/Container";
import Comment from "@/components/Comment";

type CommentsProps = {
  postComments: Array<object>;
};

const Comments: FC<CommentsProps> = ({ postComments }) => {
  let comments = postComments.map((comment) => (
    <Comment
      timestamp={{
        seconds: 0,
        nanoseconds: 0,
      }}
      displayName={""}
      uid={""}
      avatar={""}
      body={""}
      {...comment}
      key={comment["cid" as keyof typeof comment]}
    ></Comment>
  ));
  return <Container sx={{ mt: 2 }}>{comments}</Container>;
};

export default Comments;
