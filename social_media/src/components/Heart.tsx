import { FC, useState } from "react";
import { doc, arrayUnion, increment, writeBatch } from "firebase/firestore";
import { auth, firestore } from "@/lib/firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";

type HeartProps = {
  docId: any;
  numHearts: number;
};

const Heart: FC<HeartProps> = ({ docId, numHearts }) => {
  const [allowHeart, setAllowHeart] = useState<boolean>(false);
  const [heartsCount, setNumHearts] = useState<number>(numHearts);

  const heartContent = async () => {
    const uid = auth.currentUser?.uid;
    const batch = writeBatch(firestore);
    const postRef = doc(firestore, "posts", docId);
    batch.update(postRef, {
      usersHearted: arrayUnion(uid),
    });
    batch.update(postRef, {
      numHearts: increment(1),
    });
    await batch.commit();
    setNumHearts(heartsCount + 1);
    setAllowHeart(true);
  };

  const unheartContent = async () => {
    const uid = auth.currentUser?.uid;
    const batch = writeBatch(firestore);
    const postRef = doc(firestore, "posts", docId);
    batch.update(postRef, {
      usersHearted: arrayUnion(uid),
    });
    batch.update(postRef, {
      numHearts: increment(-1),
    });
    await batch.commit();
    setNumHearts(heartsCount - 1);
    setAllowHeart(false);
  };

  return allowHeart ? (
    <Chip
      icon={<FavoriteIcon color="error" aria-label="favorites" />}
      label={heartsCount}
      onClick={unheartContent}
    ></Chip>
  ) : (
    <Chip icon={<FavoriteIcon aria-label="favorites" />} label={heartsCount} onClick={heartContent}></Chip>
  );
};

export default Heart;
