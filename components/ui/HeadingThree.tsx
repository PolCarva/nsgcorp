import { durk } from "@/lib/fonts";
import React from "react";


const HeadingThree = ({
  text,
  position = "left",
}: {
  text: string;
  position?: "right" | "center" | "left";
}) => {
  return (
    <h3
      className={`${durk.className} text-5xl md:text-8xl uppercase text-center ${
        position === "center" ? "md:text-center" : position === "right" ? "md:text-right" : "md:text-left"
      }`}
    >
      {text}
    </h3>
  );
};

export default HeadingThree;
