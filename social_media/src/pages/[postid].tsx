import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Comments from "@/components/Comments";
import data from "@/mock/data.json";

const Post = () => {
  const router = useRouter();
  const { postid } = router.query;
  let postComments = data.filter((post) => post["pid"] === postid)[0]["comments"];
  return (
    <Container>
      <p>Post: {postid}</p>
      <Comments {...{ postComments }}></Comments>
      <Link href="/">Back to posts</Link>
    </Container>
  );
};

export default Post;
