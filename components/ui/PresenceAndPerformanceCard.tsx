import React from "react";

const PresenceAndPerformanceCard = ({
  number,
  mesure,
  text,
}: {
  number: string | number;
  mesure?: string;
  text: string;
}) => {
  return (
    <div className="bg-primary aspect-square text-white relative order-1">
      <p className="text-[8rem] md:text-[12rem] absolute aspect-square left-5 font-bold">
        {number}
        <span className="text-6xl lg:text-7xl 2xl:text-8xl font-normal">
          {mesure}
        </span>
      </p>
      <p className="text-4xl md:text-5xl 2xl:text-6xl uppercase absolute leading-[80%] md:-bottom-2 -bottom-1 right-5 text-right">
        {text}
      </p>
    </div>
  );
};

export default PresenceAndPerformanceCard;
