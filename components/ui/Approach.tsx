import React from "react";
import Heading3 from "./HeadingThree";
import ApproachCard from "./ApproachCard";
import { FaThumbsUp, FaHeart, FaRocket } from "react-icons/fa6";

const approachCards = [
  {
    title: "Usabilidad",
    p: (
      <p className="text-center text-lg text-pretty">
        Clientes digitales que buscan cada vez más una interacción simple,
        integrada en canales y mensajes siempre con foco en la persona y sus
        necesidades.
      </p>
    ),
    icon: <FaThumbsUp className="text-7xl" />,
  },
  {
    title: "Big Data & Estructura",
    p: (
      <p className="text-center text-lg text-pretty">
        El desafío es integrar datos estructurados, conversaciones, sensores
        sociales , transformándolos a través de una analítica de flujo continuo,
        en inteligencia del negocio y del subsector con foco siempre en las
        personas .
      </p>
    ),
    icon: <FaRocket className="text-7xl" />,
  },
  {
    title: "Omnicanalidad",
    p: (
      <p className="text-center text-lg text-pretty">
        ¿Cómo hablamos adecuadamente con un cliente que se comunica mediante{" "}
        múltiples medios, canales, tipología de mensajes , asegurándole la misma
        experiencia, optimizando el esfuerzo y maximizado el impacto?
      </p>
    ),
    icon: <FaHeart className="text-7xl" />,
  },
];

const Approach = () => {
  return (
    <div>
      <Heading3 text="Abordaje Sistémico" position="center" />
      <div
        data-animate-stagger
        className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-10 mt-16"
      >
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
