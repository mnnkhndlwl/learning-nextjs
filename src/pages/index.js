import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  var user = "mnnkhndlwl";
  return (
    <>
      <div className={styles.container}>
      <Head>
        <title>
          learning
        </title>
      </Head>
        <Link
          href={{
            pathname: `profile/[username]`,
            query: {
              username: user,
            },
          }}
        >
          About
        </Link>
        <h1>hello</h1>
      </div>
    </>
  );
}
