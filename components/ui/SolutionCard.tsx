import React from "react";
import HeadingThree from "./HeadingThree";
import Image from "next/image";

const SolutionCard = ({
  title,
  text,
  reversed = false,
  img,
}: {
  title: string;
  text: string;
  reversed?: boolean;
  img: string;
}) => {
  return (
    <div className="mt-5 felx md:grid gap-16 grid-cols-1 md:grid-cols-12 items-center justify-between">
      <div className="flex md:col-span-8 flex-col gap-5">
        <HeadingThree mobilePosition="left" text={title} color="primary" />
        <p className="text-xl">{text}</p>
      </div>
      <Image
        src={img}
        alt={title}
        width={411}
        height={411}
        className={`${
          reversed && "md:-order-1"
        } w-full h-full col-span-4 aspect-square mt-5 md:mt-0`}
      />
    </div>
  );
};

export default SolutionCard;
