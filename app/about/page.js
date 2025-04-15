import Link from "next/link";

export const metadata = {
  title: "About | よっぴ",
  description: "よっぴのポートフォリオ",
};

export default function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        <Link href="/">トップページに戻る</Link>
      </p>
    </>
  );
}
