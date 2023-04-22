import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Comments from "@/components/Comments";
import Post from "@/components/Post";
import { DocumentData, DocumentSnapshot, doc, getDoc } from "firebase/firestore";
import { firestore, auth } from "@/lib/firebase";
import { useEffect, useState } from "react";

const PostPage = () => {
  const [post, setPost] = useState<DocumentData | undefined | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { docId } = router.query;
    const getPost = async () => {
      const docRef = doc(firestore, "posts", docId as string);
      const docSnap = await getDoc(docRef);
      let data = docSnap.data();
      setPost(data);
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
        numHearts={0}
        timestamp={{
          seconds: 0,
          nanoseconds: 0,
        }}
        comments={[]}
        {...post}
      ></Post>
      {/* <Comments {...{ post }}></Comments> */}
      <Link href="/">
        <Typography variant="body1" color="text.white">
          Back to posts
        </Typography>
      </Link>
    </Container>
  );
};

export default PostPage;
