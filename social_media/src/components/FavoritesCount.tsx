import { FC, useState } from "react";
import { useRouter } from "next/router";
import { doc, arrayUnion, increment, writeBatch } from "firebase/firestore";
import { auth, firestore } from "@/lib/firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";

type FavoritesCountProps = {
  docId: any;
  numHearts: number;
};

const FavoritesCount: FC<FavoritesCountProps> = ({ docId, numHearts }) => {
  const [allowHeart, setAllowHeart] = useState(false);
  const [heartsCount, setNumHearts] = useState(numHearts);
  const router = useRouter();

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
    // router.reload();
  };

  return (
    <Chip
      icon={<FavoriteIcon color="error" aria-label="favorites" />}
      label={heartsCount}
      onClick={heartContent}
    ></Chip>
  );
};

export default FavoritesCount;
