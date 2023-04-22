import { FC, FormEvent, useState } from "react";
import { updateDoc, arrayUnion, serverTimestamp, Timestamp } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

type DocProps = {
  doc: any;
};

const AddComment: FC<DocProps> = ({ doc }) => {
  const [showAddComment, setShowAddComment] = useState(false);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateDoc(doc, {
      comments: arrayUnion({
        uid: auth.currentUser!.uid,
        displayName: auth.currentUser!.displayName,
        body: comment,
        timestamp: Timestamp.now(),
      }),
    });
  };

  if (!showAddComment) {
    return (
      <Button
        type="submit"
        variant="contained"
        sx={{ textTransform: "none", mb: 2 }}
        onClick={() => setShowAddComment(true)}
      >
        Add comment
      </Button>
    );
  }
  return (
    <Container sx={{ background: "white", mb: 2 }}>
      <Button
        type="submit"
        variant="contained"
        color="error"
        sx={{ textTransform: "none", mt: 2 }}
        onClick={() => {
          setShowAddComment(false);
        }}
      >
        Close
      </Button>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Typography variant="h6" sx={{ color: "#1976d2", mt: 2 }}>
            Add comment
          </Typography>
        </Stack>
        <TextField
          autoComplete="comment"
          name="comment"
          required
          fullWidth
          id="comment"
          label="Comment"
          autoFocus
          sx={{ background: "white", mb: 2 }}
          onChange={(e) => setComment(e.target.value)}
        ></TextField>
        <Button type="submit" variant="contained" sx={{ mb: 2 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddComment;
