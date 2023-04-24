import { FC } from "react";
import Chip from "@mui/material/Chip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

type DeleteCommentProps = {
  comment: object;
  docId: string;
};

const DeleteComment: FC<DeleteCommentProps> = ({ comment, docId }) => {
  const deleteDBField = async () => {
    const postRef = doc(firestore, "posts", docId);
    await updateDoc(postRef, {
      comments: arrayRemove(comment),
    });
  };

  return (
    <Chip
      icon={<DeleteForeverIcon aria-label="delete content" />}
      label="Delete"
      sx={{ cursor: "pointer" }}
      onClick={deleteDBField}
    ></Chip>
  );
};

export default DeleteComment;
