import { FormEvent, useState } from "react";
import { auth, firestore } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import AuthCheck from "@/components/AuthCheck";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const docRef = await addDoc(collection(firestore, "posts"), {
      uid: auth.currentUser!.uid,
      displayName: auth.currentUser!.displayName,
      title: title,
      body: body,
      comments: [],
      timestamp: serverTimestamp(),
      numHearts: 0,
    });
  };

  return (
    <AuthCheck>
      <Container sx={{ background: "white" }}>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Typography variant="h6" sx={{ color: "#1976d2", mt: 2 }}>
              Add post
            </Typography>
          </Stack>
          <TextField
            autoComplete="title"
            name="title"
            required
            fullWidth
            id="title"
            label="Title"
            autoFocus
            sx={{ background: "white", mt: 2, mb: 2 }}
            onChange={(e) => setTitle(e.target.value)}
          ></TextField>
          <TextField
            autoComplete="comment"
            name="comment"
            required
            fullWidth
            id="comment"
            label="Comment"
            autoFocus
            sx={{ background: "white", mb: 2 }}
            onChange={(e) => setBody(e.target.value)}
          ></TextField>
          <Button type="submit" variant="contained" sx={{ mb: 2 }}>
            Submit
          </Button>
        </form>
      </Container>
    </AuthCheck>
  );
};

export default CreatePostPage;
