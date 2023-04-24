import { FC } from "react";
import Chip from "@mui/material/Chip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { doc, updateDoc, arrayRemove, FieldValue } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

type DeleteCommentProps = {
  // docId: string;
  // comment: string;
  comment: object;
};

// const DeleteComment: FC<DeleteCommentProps> = ({ docId, comment }) => {
const DeleteComment: FC<DeleteCommentProps> = ({ comment }) => {
  const deleteDBField = async () => {
    // console.log(docId, comment);
    // const postRef = doc(firestore, "posts", docId);
    const postRef = doc(firestore, "posts", "LQG3c3gjpZnzweRxoYbJ");
    await updateDoc(postRef, {
      // comments: arrayRemove(comment),
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
