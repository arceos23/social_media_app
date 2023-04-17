import CommentIcon from "@mui/icons-material/Comment";
import Chip from "@mui/material/Chip";
import { useState } from "react";

const CommentsCount = () => {
  const [count, setCount] = useState(0);

  return (
    <Chip
      icon={<CommentIcon className="comment" aria-label="comments" />}
      label={`${count} comments`}
      onClick={() => setCount(count + 1)}
    ></Chip>
  );
};

export default CommentsCount;
