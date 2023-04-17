import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";
import { useState } from "react";

const FavoritesCount = () => {
  console.log();
  const [count, setCount] = useState(0);

  return (
    <Chip
      icon={<FavoriteIcon className="favorite" color="error" aria-label="favorites" />}
      label={count}
      onClick={() => setCount(count + 1)}
    ></Chip>
  );
};

export default FavoritesCount;
