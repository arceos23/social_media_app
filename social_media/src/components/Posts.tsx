import Container from "@mui/material/Container";
import Post from "@/components/Post";

const Posts = (dbPosts: any) => {
  dbPosts = Array.from(dbPosts.posts);
  let posts = dbPosts.map((post: any) => <Post {...post} link={true} key={post["docId"]}></Post>);
  return <Container>{posts}</Container>;
};

export default Posts;
