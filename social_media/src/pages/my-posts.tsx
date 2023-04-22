import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore, auth } from "@/lib/firebase";
import Posts from "@/components/Posts";
import AuthCheck from "@/components/AuthCheck";

const MyPostsPage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(firestore, "posts"), where("uid", "==", auth.currentUser?.uid));
      let fetchedPosts: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        fetchedPosts.push(doc.data());
      });
      setPosts(fetchedPosts);
    };
    if (auth.currentUser?.uid) {
      getPosts();
    }
  }, [auth.currentUser?.uid]);

  if (posts == null) return <p>Loading...</p>;
  console.log(typeof posts);
  return (
    <AuthCheck>
      <Posts {...{ posts }}></Posts>
    </AuthCheck>
  );
};

export default MyPostsPage;
