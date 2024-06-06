import { durk } from "@/lib/fonts";
import React from "react";

const HeadingOne = ({ text }: { text: string }) => {
  return <h1 className={`${durk.className} uppercase text-6xl`}>{text}</h1>;
};

export default HeadingOne;
