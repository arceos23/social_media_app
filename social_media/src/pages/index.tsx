import Head from "next/head";
import Posts from "@/components/Posts";
import { firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = (posts: any) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts {...{ posts }}></Posts>
    </>
  );
};

export async function getServerSideProps() {
  const querySnapshot = await getDocs(collection(firestore, "posts"));
  let posts: any = [];
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  console.log("getServerSideProps", posts);
  return { props: { posts: JSON.parse(JSON.stringify(posts)) } };
}

export default Home;
