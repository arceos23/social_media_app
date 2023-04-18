import { auth, googleAuthProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { log } from "console";

const SignUpPage = () => {
  return (
    <Container>
      <Button type="submit" variant="contained" sx={{ textTransform: "none" }} onClick={signInWithGoogle}>
        <Avatar src="Google__G__Logo.svg" alt="Google G logo" sx={{ mr: 2 }}></Avatar>Sign in with Google
      </Button>
      <br />
      <br />
      <Button type="submit" variant="contained" sx={{ textTransform: "none" }} onClick={logOut}>
        Log out
      </Button>
    </Container>
  );
};

const signInWithGoogle = async () => {
  // Sign in using a popup.
  googleAuthProvider.addScope("profile");
  googleAuthProvider.addScope("email");
  const result = await signInWithPopup(auth, googleAuthProvider);

  //   const user = result.user;
  //   const credential = googleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
};

const logOut = () => {
  auth.signOut();
};

export default SignUpPage;
