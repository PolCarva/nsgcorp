import { Post } from "@/types";
import Image from "next/image";
import React from "react";
import HeadingThree from "./HeadingThree";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  const image = {
    src: post.featuredImage?.node.mediaDetails.sizes[0].sourceUrl,
    width: parseInt(post.featuredImage?.node.mediaDetails.sizes[0].width),
    height: parseInt(post.featuredImage?.node.mediaDetails.sizes[0].height),
    alt: post.title,
  };

  return (
    <Link href={`/${post.slug}`} className="w-full md:hover:scale-105 hover:bg-primary/5 transition grid gap-x-5 md:grid-cols-12 grid-cols-1 p-5 border-y-2 border-primary">
      {post.featuredImage ? (
        <Image
          className="col-span-12 md:col-span-4 transition object-cover w-full h-full aspect-video"
          alt={post.title}
          height={1080}
          width={1920}
          src={image.src}
        />
      ) : (
        <div className="col-span-12 md:col-span-4 bg-slate-200 object-cover w-full h-full aspect-video"></div>
      )}
      <div className="col-span-12 md:col-span-8 flex flex-col md:gap-2 mt-2">
        <HeadingThree mobilePosition="left" text={post.title} />
        <p className="text-xl text-ellipsis line-clamp-4 lg:line-clamp-3">
          {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
