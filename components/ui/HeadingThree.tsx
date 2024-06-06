import { durk } from "@/lib/fonts";
import React from "react";

const HeadingThree = ({
  text,
  position = "left",
  color = "black",
  mobilePosition = "center",
}: {
  text: string;
  position?: "right" | "center" | "left";
  color?: "black" | "primary" | "white";
  mobilePosition?: "left" | "center" | "right";
}) => {
  return (
    <h3
      className={`${
        durk.className
      } text-5xl md:text-8xl uppercase ${
        position === "center"
          ? "md:text-center"
          : position === "right"
          ? "md:text-right"
          : "md:text-left"
      }
      ${
        mobilePosition === "center"
          ? "text-center"
          : mobilePosition === "right"
          ? "text-right"
          : "text-left"
      }
      ${
        color === "black"
          ? "text-black"
          : color === "primary"
          ? "text-primary"
          : "text-white"
      }
      `}
    >
      {text}
    </h3>
  );
};

export default HeadingThree;
