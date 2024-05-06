'use client';
import { Header } from "~/components/Header";
import { PostDetail } from "~/components/PostDetails";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <PostDetail slug={params.slug} />
    </>
  )
}