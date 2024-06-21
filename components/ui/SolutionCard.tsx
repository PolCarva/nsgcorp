import React from "react";
import HeadingThree from "./HeadingThree";
import Image from "next/image";

const SolutionCard = ({
  title,
  children,
  reversed = false,
  img,
  secondTitle,
}: {
  title: string;
  secondTitle?: string;
  reversed?: boolean;
  img: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mt-5 felx md:grid gap-16 grid-cols-1 md:grid-cols-12 items-center justify-between">
      <div className="flex md:col-span-8 flex-col gap-5">
        <HeadingThree mobilePosition="left" secondTitle={secondTitle} text={title} color="primary" />
        {children}
      </div>
      <Image
        src={img}
        alt={title}
        width={411}
        height={411}
        className={`${
          reversed && "md:-order-1"
        } w-full col-span-4 object-cover aspect-square mt-5 md:mt-0`}
      />
    </div>
  );
};

export default SolutionCard;
