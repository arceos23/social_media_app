import AuthCheck from "@/components/AuthCheck";
import { Container } from "@mui/material";

const CreatePostPage = () => {
  return (
    <Container>
      <AuthCheck>
        <h1>[TODO: insert form to create new post]</h1>
      </AuthCheck>
    </Container>
  );
};

export default CreatePostPage;
