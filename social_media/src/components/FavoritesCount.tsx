import { FC, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";

type FavoritesCountProps = {
  hearts: number;
};

const FavoritesCount: FC<FavoritesCountProps> = ({ hearts }) => {
  console.log();
  const [count, setCount] = useState(hearts);

  return (
    <Chip
      icon={<FavoriteIcon className="favorite" color="error" aria-label="favorites" />}
      label={count}
      onClick={() => setCount(count + 1)}
    ></Chip>
  );
};

export default FavoritesCount;
