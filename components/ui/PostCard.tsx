import { Empresa } from "@/types";
import Image from "next/image";
import React from "react";
import HeadingThree from "./HeadingThree";
import Link from "next/link";


const PostCard = ({ post }: { post: Empresa }) => {
  const amountOfImages = post.empresas.thumbnail?.node.mediaDetails.sizes.length-1;
  const image = {
    src: post.empresas.thumbnail?.node.mediaDetails.sizes[amountOfImages].sourceUrl,
    width: parseInt(post.empresas.thumbnail?.node.mediaDetails.sizes[amountOfImages].width),
    height: parseInt(post.empresas.thumbnail?.node.mediaDetails.sizes[amountOfImages].height),
    alt: post.empresas.title,
  };

  return (
    <Link href={`/${post.slug}`} className="w-full md:hover:scale-105 hover:bg-primary/5 transition grid gap-x-5 md:grid-cols-12 grid-cols-1 p-5 border-y-2 border-primary">
      {post.empresas.thumbnail ? (
        <Image
          className="col-span-12 md:col-span-4 transition object-cover w-full h-full aspect-video"
          alt={post.empresas.title}
          height={image.height}
          width={image.width}
          src={image.src}
        />
      ) : (
        <div className="col-span-12 md:col-span-4 bg-slate-200 object-cover w-full h-full aspect-video"></div>
      )}
      <div className="col-span-12 md:col-span-8 flex flex-col md:gap-2 mt-2">
        <HeadingThree mobilePosition="left" text={post.empresas.title} />
        <p className="text-xl text-ellipsis line-clamp-4 lg:line-clamp-3">
          {post.empresas.description}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
