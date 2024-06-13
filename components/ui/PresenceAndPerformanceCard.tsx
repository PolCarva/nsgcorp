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
    <div
      className="bg-primary aspect-square text-white relative order-1"
      data-animate-in
    >
      <p className="text-[8rem] md:text-[5rem] lg:text-[10rem] absolute aspect-square left-5 font-bold">
        <span data-animate-increasing-number>{number}</span>
        <span className="text-6xl lg:text-6xl 2xl:text-7xl font-normal">
          {mesure}
        </span>
      </p>
      <p className="text-5xl md:text-2xl lg:text-5xl 2xl:text-5xl uppercase absolute leading-[80%] bottom-1 right-5 text-right">
        {text}
      </p>
    </div>
  );
};

export default PresenceAndPerformanceCard;
