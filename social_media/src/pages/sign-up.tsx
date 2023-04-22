import { auth, googleAuthProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const SignUpPage = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "gray" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "none", m: 2 }}
          onClick={signInWithGoogle}
          disabled={auth.currentUser?.uid !== undefined}
        >
          <Avatar
            src="Google__G__Logo.svg"
            alt="Google G logo"
            sx={{ mr: 2, height: "1.25rem", width: "1.25rem" }}
          ></Avatar>
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

const signInWithGoogle = async () => {
  googleAuthProvider.addScope("profile");
  googleAuthProvider.addScope("email");
  const result = await signInWithPopup(auth, googleAuthProvider);
  //   const user = result.user;
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential!.accessToken;
};

export default SignUpPage;
