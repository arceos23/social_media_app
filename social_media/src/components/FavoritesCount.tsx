import { FC, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";

type FavoritesCountProps = {
  numHearts: number;
};

const FavoritesCount: FC<FavoritesCountProps> = ({ numHearts }) => {
  const [count, setCount] = useState(numHearts);

  return (
    <Chip
      icon={<FavoriteIcon color="error" aria-label="favorites" />}
      label={count}
      onClick={() => setCount(count + 1)}
    ></Chip>
  );
};

export default FavoritesCount;
