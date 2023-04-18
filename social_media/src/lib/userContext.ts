import { createContext } from "react";

type CurrentUserContextType = {
  username: string | null;
};

export const UserContext = createContext<CurrentUserContextType>({ username: null });
