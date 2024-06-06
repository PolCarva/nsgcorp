"use client";

import Container from "@/components/ui/Container";
import PostDetailSketeleton from "@/components/ui/PostDetailSketeleton";
import { durk } from "@/lib/fonts";
import { getSinglePost } from "@/lib/posts";
import { Post } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      if (typeof slug === "string") {
        const postData = await getSinglePost(slug);
        setPost(postData);
      } else {
        console.error("Invalid slug type:", slug);
      }
    };
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post && post.content) {
      // Espera a que el contenido se haya renderizado
      const container = document.getElementById("post-content");
      if (container) {
        const buttons = container.querySelectorAll(".wp-block-button__link.wp-element-button");
        buttons.forEach(button => {
          button.classList.add(durk.className);
        });
      }
    }
  }, [post]);

  if (!post) {
    return <PostDetailSketeleton />;
  }

  return (
    <Container>
      <div className="md:w-2/3 mx-auto flex flex-col gap-5 justify-center items-start pb-12">
        <h1 className={`${durk.className} self-start uppercase text-9xl`}>
          {post.title}
        </h1>
        {post.content && (
          <div
            id="post-content"
            className="space-y-5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </div>
    </Container>
  );
};

export default Page;
