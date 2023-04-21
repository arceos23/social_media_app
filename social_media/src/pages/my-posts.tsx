import { useState, useEffect, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore, auth } from "@/lib/firebase";
import Posts from "@/components/Posts";
import AuthCheck from "@/components/AuthCheck";
import { UserContext } from "@/lib/userContext";

const MyPostsPage = () => {
  const [myPosts, setMyPosts] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { username, uid } = useContext(UserContext);

  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(firestore, "posts"), where("uid", "==", uid));
      //   const q = query(collection(firestore, "posts"), where("uid", "==", auth.currentUser?.uid));
      let posts: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      return posts;
    };
    setLoading(true);
    setMyPosts(getPosts());
    setLoading(false);
  }, [uid, auth.currentUser?.uid]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <AuthCheck>
      <Posts {...{ myPosts }}></Posts>
    </AuthCheck>
  );
};

export default MyPostsPage;
