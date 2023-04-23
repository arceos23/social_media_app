import Link from "next/link";
import { auth } from "@/lib/firebase";
import { Container, Typography } from "@mui/material";

const AuthCheck = (props: any) => {
  return auth.currentUser ? (
    props.children
  ) : (
    <Container sx={{ background: "gray" }}>
      <Link href="sign-up">
        <Typography variant="body1" sx={{ mt: 2, mb: 2, p: 2 }}>
          You must be signed in.
        </Typography>
      </Link>
      ;
    </Container>
  );
};

export default AuthCheck;
