import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  var user = "mnnkhndlwl";
  return (
    <>
      <div className={styles.main}>
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
