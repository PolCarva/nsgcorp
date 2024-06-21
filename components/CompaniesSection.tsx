"use client";
import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import { getAllPosts } from "@/lib/posts";
import { Post } from "@/types";
import PostCard from "./ui/PostCard";
import PostCardSkeleton from "./ui/PostCardSkeleton";
import ClientSlider from "./ui/ClientSlider";
import HeadingThree from "./ui/HeadingThree";
import Tag from "./ui/Tag";

const CompaniesSection = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts("empresas");
      setPosts(data.nodes);
    };
    fetchData();
  }, []);

  return (
    <section id="empresas" className="pt-20">
      <Container>
        <div className="flex flex-col gap-2 relative">
          <Tag
            text="Ecosistema"
            className="w-fit md:absolute md:top-[1em] lg:top-1/3 md:right-0"
          />
           <div data-animate-image className='absolute hidden md:block left-52 top-0 -z-10 bg-[url("/img/hero_img.webp")] bg-cover bg-right w-1/3 h-full'/>
          <HeadingTwo top="Nuestras" bottom="Empresas" />
        </div>
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
        <div className="mt-40 flex flex-col gap-5">
          <HeadingThree text="Clientes" position="center" />
          <ClientSlider />
        </div>
      </Container>
    </section>
  );
};

export default CompaniesSection;
