import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Comments from "@/components/Comments";
import data from "@/mock/data.json";

const Post = () => {
  const router = useRouter();
  const { postid } = router.query;
  let postComments = data.filter((post) => post["pid"] === postid)[0]["comments"];
  return (
    <Container>
      <Comments {...{ postComments }}></Comments>
      <Link href="/">
        <Typography variant="body1" color="text.white">
          Back to posts
        </Typography>
      </Link>
    </Container>
  );
};

export default Post;
