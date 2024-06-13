import React from "react";
import Heading3 from "./HeadingThree";
import ApproachCard from "./ApproachCard";
import { FaThumbsUp, FaHeart, FaRocket } from "react-icons/fa6";

const approachCards = [
  {
    title: "Usabilidad",
    p: (
      <p className="text-center text-lg text-pretty">
        Clientes digitales que buscan cada vez más una{" "}
        <span className="font-bold text-primary">interacción simple</span>,
        integrada en canales y mensajes siempre con{" "}
        <span className="font-bold text-primary">
          foco en la persona y sus necesidades.
        </span>
      </p>
    ),
    icon: <FaThumbsUp className="text-7xl"/>,
  },
  {
    title: "Big Data & Estructura",
    p: (
      <p className="text-center text-lg text-pretty">
        El desafío es integrar{" "}
        <span className="font-bold text-primary">
          datos estructurados, conversaciones, sensores sociales
        </span>
        , transformándolos a través de una analítica de flujo continuo, en
        inteligencia del negocio y del subsector con{" "}
        <span className="font-bold text-primary">
          foco siempre en las personas
        </span>
        .
      </p>
    ),
    icon: <FaRocket className="text-7xl"/>,
  },
  {
    title: "Omnicanalidad",
    p: (
      <p className="text-center text-lg text-pretty">
        ¿Cómo hablamos adecuadamente con un cliente que se comunica mediante{" "}
        <span className="font-bold text-primary">
          múltiples medios, canales, tipología de mensajes
        </span>
        , asegurándole la misma experiencia, optimizando el esfuerzo y
        maximizado el impacto?
      </p>
    ),
    icon: <FaHeart className="text-7xl"/>,
  },
];

const Approach = () => {
  return (
    <div>
      <Heading3 text="Abordaje Sistémico" position="center" />
      <div data-animate-stagger className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-10 mt-16">
        {approachCards.map((item) => (
          <ApproachCard
            key={item.title}
            title={item.title}
            paragraph={item.p}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Approach;
