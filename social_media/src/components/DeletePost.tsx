import { FC } from "react";
import Chip from "@mui/material/Chip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

type DeletePostProps = {
  docId: string;
};

const DeletePost: FC<DeletePostProps> = ({ docId }) => {
  const deleteDBPost = async () => {
    await deleteDoc(doc(firestore, "posts", docId));
  };

  return (
    <Chip
      icon={<DeleteForeverIcon aria-label="delete content" />}
      label="Delete"
      sx={{ cursor: "pointer" }}
      onClick={deleteDBPost}
    ></Chip>
  );
};

export default DeletePost;
