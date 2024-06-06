"use client";
import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import { getAllPosts } from "@/lib/posts";
import { Post } from "@/types";
import PostCard from "./ui/PostCard";
import PostCardSkeleton from "./ui/PostCardSkeleton";

const CompaniesSection = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts();
      setPosts(data.nodes);
    };
    fetchData();
  }, []);

  return (
    <section id="empresas" className="pt-20 min-h-svh">
      <Container>
        <HeadingTwo top="Nuestras" bottom="Empresas" />
        {posts === null ? (
          <div className="flex flex-col gap-5 mt-16">
            <PostCardSkeleton />
            <PostCardSkeleton />
          </div>
        ) : (
          <div className="flex flex-col gap-5 mt-16">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default CompaniesSection;
