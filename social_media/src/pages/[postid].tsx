import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Comments from "@/components/Comments";

const Post = () => {
  const router = useRouter();
  const { postid } = router.query;
  return (
    <Container>
      <p>Post: {postid}</p>
      <Comments></Comments>
      <Link href="/">Back to posts</Link>
    </Container>
  );
};

export default Post;
