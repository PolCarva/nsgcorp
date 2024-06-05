import React from "react";
import HeadingThree from "./HeadingThree";

const TextosQuienesSomos = () => {
  return (
    <div className="grid gap-x-5 gap-y-12 md:gap-y-20 w-full grid-cols-1 mb-20 md:mb-16 md:grid-cols-12">
      {/* --- ABOUT --- */}
      <div className="col-span-6 text-2xl mt-8 md:-mt-12">
        <p className="mb-5">
          Somos un{" "}
          <span className="font-bold text-primary">
            ecosistema de comunicación estratégica
          </span>{" "}
          especializado en
          <span className="font-bold text-primary">
            {" "}
            asuntos empresariales, inteligencia electoral y public affairs.
          </span>
        </p>
        <p className="mb-5">
          Somos pioneros en la combinación y análisis híbrido de la
          <span className="font-bold text-primary">
            {" "}
            analítica aumentada, inteligencia artificial, ciencias sociales y
            experiencia humana
          </span>
          .
        </p>
        <p>
          Este enfoque nos permite{" "}
          <span className="font-bold text-primary">
            comprender a fondo las problemáticas y desafíos
          </span>{" "}
          de los proyectos y causas de nuestros clientes.
        </p>
      </div>
      {/* --- END ABOUT --- */}
      <div className="col-span-6"></div>
      {/* --- NUESTRA MISIÓN --- */}
      <div className="col-span-6 flex flex-col gap-5">
        <HeadingThree text="Nuestra Misión" />
        <p className="text-xl">
          Respaldar a nuestros clientes en la consecución de sus objetivos en un
          mundo{" "}
          <span className="font-bold text-primary">
            interconectado y competitivo
          </span>
          .
        </p>
        <p className="text-xl">
          Logramos esto unificando nuestras especialidades y experiencia en
          <span className="font-bold text-primary">
            {" "}
            Ciencias Sociales, Big Data e Inteligencia Artificial
          </span>
          , ofreciendo soluciones integrales e innovadoras.
        </p>
        <p className="text-xl">
          Con foco en las personas y con un proceso de innovación permanente ,{" "}
          <span className="font-bold text-primary">
            aseguramos el acompañamiento de la dinámica y la escalabilidad del
            negocio de nuestros clientes{" "}
          </span>
          .
        </p>
      </div>
      {/* --- END NUESTRA MISIÓN --- */}
      {/* --- NUESTRA HISTORIA --- */}
      <div className="col-span-6 flex flex-col gap-5">
        <HeadingThree text="Nuestra Historia" />

        <p className="text-xl">
          Desde 2010,{" "}
          <span className="font-bold text-primary">
            lideramos la innovación incorporando tecnologías de última
            generación{" "}
          </span>
          y unidades especializadas en Gestión Reputacional, Manejo de Crisis,
          Promoción de Agenda para Instituciones Públicas & Privadas, Causas de
          la Sociedad Civil e Inteligencia Electoral.
        </p>
        <p className="text-xl">
          En NS Group{" "}
          <span className="font-bold text-primary">
            desafiamos constantemente el statu quo{" "}
          </span>
          , evolucionando hacia soluciones innovadoras impulsadas por nuestra
          experiencia en{" "}
          <span className="font-bold text-primary">
            Ciencias Sociales y Data Analytics & AI
          </span>
          .
        </p>
      </div>
      {/* --- END NUESTRA HISTORIA --- */}
    </div>
  );
};

export default TextosQuienesSomos;
