import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore, auth } from "@/lib/firebase";
import Posts from "@/components/Posts";
import AuthCheck from "@/components/AuthCheck";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const MyPostsPage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(firestore, "posts"), where("uid", "==", auth.currentUser?.uid));
      let fetchedPosts: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let dataAndId = { ...doc.data(), ...{ docId: doc.id } };
        fetchedPosts.push(dataAndId);
      });
      setPosts(fetchedPosts);
    };
    if (auth.currentUser?.uid) {
      getPosts();
    }
  }, [auth.currentUser?.uid]);

  if (auth.currentUser?.uid === undefined)
    return (
      <Container sx={{ background: "gray" }}>
        <Typography variant="body1" sx={{ p: 2 }}>
          Sign in to view your posts
        </Typography>
      </Container>
    );
  if (posts === null)
    return (
      <Container sx={{ background: "gray" }}>
        <Typography variant="body1" sx={{ p: 2 }}>
          Loading...
        </Typography>
      </Container>
    );

  return (
    <AuthCheck>
      <Posts {...{ posts }}></Posts>
    </AuthCheck>
  );
};

export default MyPostsPage;
