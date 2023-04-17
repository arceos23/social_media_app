import Container from "@mui/material/Container";
import Post from "@/components/Post";
import data from "@/mock/data.json";

const Posts = () => {
  let posts = [];
  for (let post of data) {
    posts.push(<Post {...post} key={post["uid"]}></Post>);
  }
  return <Container>{posts}</Container>;
};

export default Posts;
