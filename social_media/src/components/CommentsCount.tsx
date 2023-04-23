import { FC, useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import Chip from "@mui/material/Chip";

type CommentsCountProps = {
  numComments: number;
};

const CommentsCount: FC<CommentsCountProps> = ({ numComments }) => {
  return (
    <Chip
      icon={<CommentIcon aria-label="comments" />}
      label={`${numComments} comments`}
      sx={{ cursor: "pointer" }}
    ></Chip>
  );
};

export default CommentsCount;
