import { FC, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { doc, updateDoc } from "firebase/firestore";
import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/Edit";
import { firestore } from "@/lib/firebase";
import { Container, Stack, Typography, TextField, Button } from "@mui/material";

type EditPostProps = {
  title: string;
  body: string;
  docId: string;
};

const EditPost: FC<EditPostProps> = ({ title, body, docId }) => {
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newBody, setNewBody] = useState<string>(body);
  const [editPost, setEditPost] = useState<boolean>(false);

  const router = useRouter();

  const updatePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postRef = doc(firestore, "posts", docId);
    await updateDoc(postRef, {
      title: newTitle,
      body: newBody,
    });
    router.reload();
  };

  const updateEditOption = () => {
    setEditPost(!editPost);
  };

  return (
    <>
      <Chip
        icon={<EditIcon aria-label="edit post" />}
        label="Edit"
        sx={{ cursor: "pointer" }}
        onClick={updateEditOption}
      ></Chip>
      {editPost && (
        <Container sx={{ background: "white" }}>
          <form onSubmit={updatePost}>
            <Stack>
              <Typography variant="h6" sx={{ color: "#1976d2", mt: 2 }}>
                Edit post
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
              onChange={(e) => setNewTitle(e.target.value)}
            ></TextField>
            <TextField
              autoComplete="body"
              name="body"
              required
              fullWidth
              id="body"
              label="Body"
              autoFocus
              sx={{ background: "white", mb: 2 }}
              onChange={(e) => setNewBody(e.target.value)}
            ></TextField>
            <Button type="submit" variant="contained" sx={{ mb: 2 }}>
              Submit
            </Button>
          </form>
        </Container>
      )}
    </>
  );
};

export default EditPost;
