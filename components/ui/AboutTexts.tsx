import React from "react";
import HeadingThree from "./HeadingThree";

const TextosQuienesSomos = () => {
  return (
    <div className="grid lg:gap-x-20 gap-y-12 md:gap-y-20 w-full grid-cols-1 mb-20 lg:mb-16 lg:grid-cols-12">
      {/* --- ABOUT --- */}
      <div className="col-span-8 flex flex-col gap-5 mt-8 md:-mt-8 text-xl">
        <HeadingThree
          mobilePosition="left"
          text="Excelencia y "
          secondTitle="Experiencia Comprobada"
        />

        <p className="mt-6">
          Con más de 200 proyectos de comunicación estratégica exitosos y
          experiencia en inteligencia electoral en más de 40 campañas de alto
          perfil.
        </p>
        <p>
          A través de nuestra unidad de inteligencia de datos, proveemos de la
          información y análisis especializado para la prevención y protección
          de activos reputacionales estratégicos, prevención de riesgos y
          gestión de crisis . Todos nuestros servicios de asesoría están
          sustentados en datos y potenciados por IA.
        </p>

        <p>
          Nuestro enfoque boutique garantiza a cada cliente una solución única y
          a medida , respaldada por nuestra vasta experiencia.{" "}
        </p>

        <p>
          Combinamos la atención personalizada con estrategias probadas ,
          creando soluciones que impulsan el éxito y forjan legados duraderos.{" "}
          El reconocimiento y la confianza de líderes y organizaciones avalan la
          calidad transformadora de nuestro trabajo .
        </p>
      </div>
      {/* --- END ABOUT --- */}
      <div className="col-span-6 md:col-span-2"></div>
      {/* --- NUESTRA MISIÓN --- */}
      <div className="col-span-6 flex flex-col gap-5">
        <HeadingThree mobilePosition="left" text="Nuestra Misión" />
        <p className="text-xl">
          Respaldar a nuestros clientes en la consecución de sus objetivos en un
          mundo interconectado y competitivo .
        </p>
        <p className="text-xl">
          Logramos esto unificando nuestras especialidades y experiencia en{" "}
          Ciencias Sociales, Big Data e Inteligencia Artificial , ofreciendo
          soluciones integrales e innovadoras.
        </p>
        <p className="text-xl">
          Con foco en las personas y con un proceso de innovación permanente ,{" "}
          aseguramos el acompañamiento de la dinámica y la escalabilidad del
          negocio de nuestros clientes .
        </p>
      </div>
      {/* --- END NUESTRA MISIÓN --- */}
      {/* --- NUESTRA HISTORIA --- */}
      <div className="col-span-6 flex flex-col gap-5">
        <HeadingThree mobilePosition="left" text="Nuestra Historia" />

        <p className="text-xl">
          Desde 2010, lideramos la innovación incorporando tecnologías de última
          generación y unidades especializadas en Gestión Reputacional, Manejo
          de Crisis, Promoción de Agenda para Instituciones Públicas & Privadas,
          Causas de la Sociedad Civil e Inteligencia Electoral.
        </p>
        <p className="text-xl">
          En NS Group desafiamos constantemente el statu quo , evolucionando
          hacia soluciones innovadoras impulsadas por nuestra experiencia en{" "}
          Ciencias Sociales y Data Analytics & AI .
        </p>
      </div>
      {/* --- END NUESTRA HISTORIA --- */}
    </div>
  );
};

export default TextosQuienesSomos;
