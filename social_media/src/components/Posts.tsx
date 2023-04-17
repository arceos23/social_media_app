import Container from "@mui/material/Container";
import Post from "@/components/Post";
import data from "@/mock/data.json";

const Posts = () => {
  let posts = [];
  for (let i = 0; i < data.length; i++) {
    posts.push(<Post {...data[i]} key={data[i]["uid"]}></Post>);
  }
  return <Container>{posts}</Container>;
};

export default Posts;
