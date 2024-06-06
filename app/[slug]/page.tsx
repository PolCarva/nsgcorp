import Container from "@/components/ui/Container";
import HeadingOne from "@/components/ui/HeadingOne";
import { getAllPosts, getSinglePost } from "@/lib/posts";
import { Post } from "@/types";
import React from "react";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.nodes.map((post: Post) => ({
    params: { slug: post.slug },
  }));
}

// Este componente recibirá los props estáticamente generados por Next.js
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getSinglePost(slug);

  return (
    <Container>
      <HeadingOne text={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
}
