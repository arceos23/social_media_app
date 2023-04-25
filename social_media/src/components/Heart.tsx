import { FC, useEffect, useState } from "react";
import { doc, arrayUnion, arrayRemove, increment, writeBatch } from "firebase/firestore";
import { auth, firestore } from "@/lib/firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

type HeartProps = {
  docId: any;
  numHearts: number;
  alreadyHearted: boolean;
};

const Heart: FC<HeartProps> = ({ docId, numHearts, alreadyHearted }) => {
  const [allowHeart, setAllowHeart] = useState<boolean>(alreadyHearted);
  const [heartsCount, setNumHearts] = useState<number>(numHearts);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    setAllowHeart(alreadyHearted);
  }, [alreadyHearted]);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
    return (
      <>
        <Chip icon={<FavoriteIcon aria-label="favorites" />} label={heartsCount} onClick={handleClick}></Chip>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>Sign in to heart post.</Typography>
        </Popover>
      </>
    );
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
