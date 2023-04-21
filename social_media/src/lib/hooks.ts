import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const getUsername = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUsername(user.displayName);
      setUid(user.uid);
    } else {
      setUsername(null);
      setUid(null);
    }
  });
  return { username, uid };
};
