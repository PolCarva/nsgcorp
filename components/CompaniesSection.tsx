import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import { getAllPosts } from "@/lib/posts";
import { Post } from "@/types";
import PostCard from "./PostCard";

const CompaniesSection = async () => {
  const data: { nodes: Post[] } = await getAllPosts();

  return (
    <section id="empresas" className="pt-20 min-h-svh">
      <Container>
        <HeadingTwo top="Nuestras" bottom="Empresas" />
        <div className="flex flex-col gap-5 mt-16">
          {data.nodes.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompaniesSection;
