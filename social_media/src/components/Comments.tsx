import { FC } from "react";
import Container from "@mui/material/Container";
import Comment from "@/components/Comment";
import { ObjectType } from "typescript";

type CommentsProps = {
  postComments: Array<object>;
};

const Comments: FC<CommentsProps> = ({ postComments }) => {
  console.log(postComments);
  let comments = postComments.map((comment) => (
    <Comment
      author={""}
      cid={""}
      avatar={""}
      body={""}
      {...comment}
      key={comment["cid" as keyof typeof comment]}
    ></Comment>
  ));
  return <Container sx={{ mt: 2 }}>{comments}</Container>;
};

export default Comments;
