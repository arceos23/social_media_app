import { FC, useEffect, useState } from "react";
import { doc, arrayUnion, arrayRemove, increment, writeBatch } from "firebase/firestore";
import { auth, firestore } from "@/lib/firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";

type HeartProps = {
  docId: any;
  numHearts: number;
  alreadyHearted: boolean;
};

const Heart: FC<HeartProps> = ({ docId, numHearts, alreadyHearted }) => {
  const [allowHeart, setAllowHeart] = useState<boolean>(alreadyHearted);
  const [heartsCount, setNumHearts] = useState<number>(numHearts);

  useEffect(() => {
    setAllowHeart(alreadyHearted);
  }, [alreadyHearted]);

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
      usersHearted: arrayRemove(uid),
    });
    batch.update(postRef, {
      numHearts: increment(-1),
    });
    await batch.commit();
    setNumHearts(heartsCount - 1);
    setAllowHeart(false);
  };

  if (!auth.currentUser?.uid) {
    return <Chip icon={<FavoriteIcon aria-label="favorites" />} label={heartsCount}></Chip>;
  }
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
