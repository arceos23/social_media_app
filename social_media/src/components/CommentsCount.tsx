import { FC, useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import Chip from "@mui/material/Chip";

type CommentsCountProps = {
  numComments: number;
};

const CommentsCount: FC<CommentsCountProps> = ({ numComments }) => {
  const [count, setCount] = useState(numComments);
  return (
    <Chip
      icon={<CommentIcon className="comment" aria-label="comments" />}
      label={`${count} comments`}
      sx={{ cursor: "pointer" }}
    ></Chip>
  );
};

export default CommentsCount;
