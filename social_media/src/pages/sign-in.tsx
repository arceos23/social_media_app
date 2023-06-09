import { auth, googleAuthProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const SignUpPage = () => {
  if (auth.currentUser?.uid !== undefined) {
    return (
      <Container sx={{ background: "gray" }}>
        <Typography variant="body1" sx={{ mt: 2, mb: 2, p: 2 }}>
          Already logged in.
        </Typography>
      </Container>
    );
  }
  return (
    <Container>
      <Link href="/">
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
      </Link>
    </Container>
  );
};

const signInWithGoogle = async () => {
  googleAuthProvider.addScope("profile");
  googleAuthProvider.addScope("email");
  const result = await signInWithPopup(auth, googleAuthProvider);
};

export default SignUpPage;
