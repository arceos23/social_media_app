import AuthCheck from "@/components/AuthCheck";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

const CreatePostPage = () => {
  return (
    <AuthCheck>
      <Container sx={{ background: "white" }}>
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
        ></TextField>
        <Button type="submit" variant="contained" sx={{ mb: 2 }}>
          Submit
        </Button>
      </Container>
    </AuthCheck>
  );
};

export default CreatePostPage;
