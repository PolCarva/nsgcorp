"use client";

import Container from "@/components/ui/Container";
import PostDetailSketeleton from "@/components/ui/PostDetailSketeleton";
import { durk } from "@/lib/fonts";
import { getSinglePost } from "@/lib/posts";
import { Post } from "@/types";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { slug } = useParams();
  const router = useRouter(); // Utiliza useRouter para la navegación

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug || typeof slug !== "string") {
        router.push("/not-found");
        return;
      }

      try {
        const postData = await getSinglePost(slug);

        if (!postData) {
          router.push("/not-found");
          return;
        }

        const hasEmpresasCategory = postData?.categories?.nodes?.some(
          (category: { slug: string; name: string }) =>
            category.slug === "empresas"
        );

        if (!hasEmpresasCategory) {
          router.push("/not-found");
          return;
        }

        setPost(postData);
      } catch (error) {
        console.error("Error al obtener el post:", error);
        router.push("/not-found");
      }
    };

    fetchPost();
  }, [slug, router]);

  useEffect(() => {
    if (post && post.content) {
      const container = document.getElementById("post-content");
      if (container) {
        const buttons = container.querySelectorAll(
          ".wp-block-button__link.wp-element-button"
        );
        buttons.forEach((button) => {
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
        <h1
          className={`${durk.className} self-start uppercase text-6xl md:text-9xl`}
        >
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
