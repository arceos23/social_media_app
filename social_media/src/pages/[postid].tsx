import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Comments from "@/components/Comments";
import Post from "@/components/Post";
import data from "@/mock/data.json";

const PostPage = () => {
  const router = useRouter();
  const { postid } = router.query;
  // let postComments = data.filter((post) => post["pid"] === postid)[0]["comments"];
  let post = data.filter((post) => post["pid"] === postid)[0];
  let postComments = post["comments"];
  return (
    <Container>
      <Post {...post} key={post["pid"]}></Post>
      <Comments {...{ postComments }}></Comments>
      <Link href="/">
        <Typography variant="body1" color="text.white">
          Back to posts
        </Typography>
      </Link>
    </Container>
  );
};

export default PostPage;
