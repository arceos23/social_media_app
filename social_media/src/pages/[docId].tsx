import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Comments from "@/components/Comments";
import Post from "@/components/Post";
import { doc, getDoc } from "firebase/firestore";
import { firestore, auth } from "@/lib/firebase";
import { useEffect, useState } from "react";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { docId } = router.query;
    console.log(docId);
    const getPost = async () => {
      const docRef = doc(firestore, "posts", docId as string);
      console.log("docRef", docRef);
      const docSnap = await getDoc(docRef);
      console.log("docSnap", docSnap);
    };
    setPost(getPost());
  }, []);

  return (
    <Container>
      <Post
        displayName={""}
        docId={""}
        avatar={""}
        title={""}
        src={""}
        body={""}
        hearts={0}
        timestamp={{
          seconds: 0,
          nanoseconds: 0,
        }}
        comments={[]}
        {...post}
      ></Post>
      {/* <Comments {...{ docSnap.comments }}></Comments> */}
      <Link href="/">
        <Typography variant="body1" color="text.white">
          Back to posts
        </Typography>
      </Link>
    </Container>
  );
};

export default PostPage;
