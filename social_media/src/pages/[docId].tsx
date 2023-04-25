import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Comments from "@/components/Comments";
import Post from "@/components/Post";
import AddComment from "@/components/AddComment";
import { doc, getDoc } from "firebase/firestore";
import { firestore, auth } from "@/lib/firebase";
import { useEffect, useState } from "react";

const PostPage = () => {
  const [post, setPost] = useState<any>(null);
  const [docRef, setDocRef] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { docId } = router.query;
    const getPost = async () => {
      const docReference = doc(firestore, "posts", docId as string);
      setDocRef(docReference);
      const docSnap = await getDoc(docReference);
      let data: any = docSnap.data();
      setPost(data);
    };
    getPost();
  }, [router.isReady]);

  if (!post)
    return (
      <Container sx={{ background: "gray" }}>
        <Typography variant="body1" sx={{ p: 2 }}>
          Loading...
        </Typography>
      </Container>
    );
  const { docId } = router.query;
  let postAndDocId = { ...post, ...{ docId: docId } };
  return (
    <Container>
      <Link href="/">
        <Typography component="button" variant="body1" color="text.white" sx={{ mt: 2, mb: 2 }}>
          Back to posts
        </Typography>
      </Link>
      <Post
        displayName={""}
        docId={""}
        avatar={""}
        title={""}
        src={""}
        body={""}
        uid={""}
        numHearts={0}
        timestamp={{
          seconds: 0,
          nanoseconds: 0,
        }}
        comments={[]}
        usersHearted={[]}
        {...postAndDocId}
      ></Post>
      <Comments postComments={post.comments} docId={docId as unknown as string}></Comments>
      {auth.currentUser?.uid ? (
        <AddComment {...{ doc: docRef }}></AddComment>
      ) : (
        <Link href="/sign-up">
          <Typography component="button" variant="body1" color="text.white" sx={{ mb: 2 }}>
            Sign in to comment
          </Typography>
        </Link>
      )}
    </Container>
  );
};

export default PostPage;
