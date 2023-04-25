import { FC } from "react";
import { useRouter } from "next/router";
import Chip from "@mui/material/Chip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

type DeleteCommentProps = {
  comment: string;
  docId: string;
};

const DeleteComment: FC<DeleteCommentProps> = ({ comment, docId }) => {
  const router = useRouter();

  const deleteDBField = async () => {
    const postRef = doc(firestore, "posts", docId);
    await updateDoc(postRef, {
      comments: arrayRemove(comment),
    });
    router.reload();
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
