import Link from "next/link";
import { auth } from "@/lib/firebase";

const AuthCheck = (props: any) => {
  return auth.currentUser ? props.children : <Link href="sign-up">You must be signed in.</Link>;
};

export default AuthCheck;
