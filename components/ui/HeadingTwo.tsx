import { durk } from "@/lib/fonts";
import React from "react";

const HeadingTwo = ({ top, bottom }: { top: string; bottom: string }) => {
  return (
    <h2
      className={`${durk.className} w-full tracking-wide text-8xl md:text-9xl lg:text-[14rem] 2xl:text-[16em] uppercase`}
    >
      <span className="block md:mb-[-0.2em]">{top}</span>
      <span className="block text-end">{bottom}</span>
    </h2>
  );
};

export default HeadingTwo;
