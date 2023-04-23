import { FC } from "react";
import Chip from "@mui/material/Chip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

type DeleteContentProps = {
  docId: string;
};

const DeleteContent: FC<DeleteContentProps> = ({ docId }) => {
  const deleteInDB = async () => {
    await deleteDoc(doc(firestore, "posts", docId));
  };

  return (
    <Chip
      icon={<DeleteForeverIcon aria-label="delete content" />}
      label="Delete"
      sx={{ cursor: "pointer" }}
      onClick={deleteInDB}
    ></Chip>
  );
};

export default DeleteContent;
