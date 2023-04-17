import Container from "@mui/material/Container";
import Post from "@/components/Post";
import data from "@/mock/data.json";

const Posts = () => {
  let posts = data.map((post) => <Post {...post} key={post["pid"]}></Post>);
  return <Container>{posts}</Container>;
};

export default Posts;
