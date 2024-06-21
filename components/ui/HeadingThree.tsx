import { durk } from "@/lib/fonts";
import React from "react";

const HeadingThree = ({
  text,
  secondTitle,
  position = "left",
  color = "black",
  mobilePosition = "center",
}: {
  text: string;
  secondTitle?: string;
  position?: "right" | "center" | "left";
  color?: "black" | "primary" | "white";
  mobilePosition?: "left" | "center" | "right";
}) => {
  return (
    <h3
      data-animate-in
      className={`${durk.className} text-5xl lg:text-8xl uppercase ${
        position === "center"
          ? "lg:text-center"
          : position === "right"
          ? "lg:text-right"
          : "lg:text-left"
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
      {secondTitle && (
        <span className="inline md:block">{secondTitle}</span>
      )}
    </h3>
  );
};

export default HeadingThree;
