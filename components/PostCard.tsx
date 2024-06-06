import { Post } from "@/types";
import Image from "next/image";
import React from "react";
import HeadingThree from "./ui/HeadingThree";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  const image = {
    src: post.featuredImage?.node.mediaDetails.sizes[0].sourceUrl,
    width: parseInt(post.featuredImage?.node.mediaDetails.sizes[0].width),
    height: parseInt(post.featuredImage?.node.mediaDetails.sizes[0].height),
    alt: post.title,
  };

  return (
    <Link href={`/${post.slug}`} className="w-full grid gap-x-5 grid-cols-12 py-5 border-y-2 border-primary">
      {post.featuredImage ? (
        <Image
          className="col-span-4 object-cover w-full h-full aspect-video"
          alt={post.title}
          height={image.height}
          width={image.width}
          src={image.src}
        />
      ) : (
        <div className="col-span-4 bg-slate-200 object-cover w-full h-full aspect-video"></div>
      )}
      <div className="col-span-8 flex flex-col gap-2">
        <HeadingThree text={post.title} />
        <p className="text-xl text-ellipsis line-clamp-6">
          {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
