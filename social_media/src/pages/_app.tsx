import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav";
import { UserContext } from "@/lib/userContext";
import { getUsername } from "@/lib/hooks";

export default function App({ Component, pageProps }: AppProps) {
  const { username, uid } = getUsername();
  return (
    <>
      <UserContext.Provider value={{ username: username, uid: uid }}>
        <Nav></Nav>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}
