import { FC } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import Chip from "@mui/material/Chip";

type CommentsCountProps = {
  numComments: number;
  hover: string;
};

const CommentsCount: FC<CommentsCountProps> = ({ numComments, hover }) => {
  return (
    <Chip icon={<CommentIcon aria-label="comments" />} label={`${numComments} comments`} sx={{ cursor: hover }}></Chip>
  );
};

export default CommentsCount;
