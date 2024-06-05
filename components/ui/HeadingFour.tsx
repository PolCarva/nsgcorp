import { durk } from "@/lib/fonts";
import React from "react";


const HeadingFour = ({
  text,
  position = "left",
}: {
  text: string;
  position?: "right" | "center" | "left";
}) => {
  return (
    <h4
      className={`${durk.className} text-4xl md:text-5xl uppercase text-center ${
        position === "center" ? "md:text-center" : position === "right" ? "md:text-right" : "md:text-left"
      }`}
    >
      {text}
    </h4>
  );
};

export default HeadingFour;
