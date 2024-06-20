import React from "react";
import HeadingThree from "./HeadingThree";

const TextosQuienesSomos = () => {
  return (
    <div className="grid lg:gap-x-20 gap-y-12 md:gap-y-20 w-full grid-cols-1 mb-20 lg:mb-16 lg:grid-cols-12">
      {/* --- ABOUT --- */}
      <div className="col-span-8 flex flex-col gap-5 mt-8 text-xl">
        <HeadingThree
          mobilePosition="left"
          text="Exelencia y Experiencia Comprobada"
        />

        <p className="mt-6">
          Con{" "}
          <span className="font-bold text-primary">más de 200 proyectos </span>{" "}
          de comunicación estratégica exitosos y experiencia en inteligencia
          electoral en{" "}
          <span className="font-bold text-primary">más de 40 campañas </span> de
          alto perfil.
        </p>
        <p>
          A través de nuestra unidad de inteligencia de datos,{" "}
          <span className="font-bold text-primary">
            proveemos de la información y análisis especializado para la
            prevención y protección de activos reputacionales estratégicos,
            prevención de riesgos y gestión de crisis
          </span>
          . Todos nuestros servicios de asesoría están sustentados en datos y
          potenciados por IA.
        </p>

        <p>
          Nuestro enfoque boutique garantiza a cada cliente una{" "}
          <span className="font-bold text-primary">
            solución única y a medida
          </span>
          , respaldada por nuestra vasta experiencia.{" "}
        </p>

        <p>
          Combinamos la{" "}
          <span className="font-bold text-primary">
            atención personalizada con estrategias probadas
          </span>
          , creando soluciones que impulsan el éxito y forjan legados duraderos.{" "}
          <span className="font-bold text-primary">
            El reconocimiento y la confianza de líderes y organizaciones avalan
            la calidad transformadora de nuestro trabajo
          </span>
          .
        </p>
      </div>
      {/* --- END ABOUT --- */}
      <div className="col-span-6 md:col-span-2"></div>
      {/* --- NUESTRA MISIÓN --- */}
      <div className="col-span-6 flex flex-col gap-5">
        <HeadingThree mobilePosition="left" text="Nuestra Misión" />
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
        <HeadingThree mobilePosition="left" text="Nuestra Historia" />

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
