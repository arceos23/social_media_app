import Container from "@mui/material/Container";
import Post from "@/components/Post";

const Posts = (dbPosts: any) => {
  console.log("dbPosts", dbPosts);
  dbPosts = Array.from(dbPosts.posts.posts);
  // dbPosts = Array.from(dbPosts.posts);
  let posts = dbPosts.map((post: any) => <Post {...post} key={post["id"]}></Post>);
  return <Container>{posts}</Container>;
};

export default Posts;
