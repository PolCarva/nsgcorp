import React from "react";
import HeadingThree from "./HeadingThree";
import PresenceAndPerformanceCard from "./PresenceAndPerformanceCard";
import Tag from "./Tag";

const PresenceAndPerformance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
      <PresenceAndPerformanceCard number={11} text="Países" />
      <PresenceAndPerformanceCard number={77} mesure="MM" text="Personas Alcanzadas" />
      <div className="h-fit md:aspect-square relative grid items-center order-0 md:order-1">
        <Tag text="Alcance" className="absolute hidden md:inline top-0 right-0" />
        <HeadingThree text="Presencia & Desempeño" position="right" />
      </div>
      <div className="order-1"></div>
      <PresenceAndPerformanceCard number={86} text="Proyectos" />
      <PresenceAndPerformanceCard number={25} mesure="MM" text="Inversión I+D" />

    </div>
  );
};

export default PresenceAndPerformance;
