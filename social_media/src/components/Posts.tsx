import Container from "@mui/material/Container";
import Post from "@/components/Post";

const Posts = (dbPosts: any) => {
  dbPosts = Array.from(dbPosts.posts.posts);
  let posts = dbPosts.map((post: any) => <Post {...post} key={post["pid"]}></Post>);
  return <Container>{posts}</Container>;
};

export default Posts;
