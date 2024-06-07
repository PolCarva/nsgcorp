import { durk } from "@/lib/fonts";
import React from "react";

const Tag = ({ text, className }: { text: string, className?: string}) => {
  return <span className={`${durk.className} ${className} tracking-wider text-2xl md:text-4xl z-30 bg-primary px-5 md:px-6 text-white uppercase py-2.5 md:py-3`}>{text}</span>;
};

export default Tag;
