import { createContext } from "react";

type CurrentUserContextType = {
  username: string | null;
  uid: string | null;
};

export const UserContext = createContext<CurrentUserContextType>({ username: null, uid: null });
