import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import SolutionCard from "./ui/SolutionCard";
import Tag from "./ui/Tag";

const SolutionsSection = () => {
  return (
    <section id="soluciones" className="pt-20">
      <Container>
        <div className="relative">
          <Tag text="Expertease" className="absolute mb-5 bottom-full left-0" />
          <div
            data-animate-image
            className='absolute hidden md:block left-60 top-0 -z-10 bg-[url("/img/hero_img.webp")] bg-cover bg-right w-1/2 h-5/6'
          />
          <HeadingTwo top="Nuestro" bottom="Abordaje" />
        </div>
        <div className="mt-16">
          <div className="w-full flex flex-col gap-20">
            <SolutionCard img={"/img/maru.webp"} title="Social Deep Dive">
              <p className="text-xl">
                Utilizamos{" "}
                <span className="font-bold text-primary">
                  plataformas avanzadas
                </span>{" "}
                para capturar y mantenerte informado sobre todo lo relevante en
                esfera digital.{" "}
                <span className="font-bold text-primary">
                  Generamos alertas en tiempo real frente a cambios de
                  tendencias o la participación de personalidades influyentes{" "}
                </span>
                en las conversaciones relacionadas con tu organización o causa.
              </p>
              <p className="text-xl">
                Nuestro sistema de monitoreo integral te permite{" "}
                <span className="font-bold text-primary">
                  estar al tanto de la percepción pública sobre tu entidad
                </span>
                , marca o mensaje,
                <span className="font-bold text-primary">
                  {" "}
                  detectar oportunamente crisis potenciales o temas emergentes,
                  identificar aliados y detractores clave en el ecosistema
                  digital, y medir el impacto de tus campañas y comunicaciones
                </span>
                .
              </p>
              <p className="text-xl">
                Ya sea que busques entender la opinión pública, gestionar tu
                reputación o medir el alcance de tus iniciativas,{" "}
                <span className="font-bold text-primary">
                  nuestro enfoque personalizado te proporciona insights
                  accionables para tomar decisiones informadas y estratégicas.
                </span>
              </p>
            </SolutionCard>
            <SolutionCard
              img={"/img/manos.webp"}
              title="Asesoramiento En Acción"
              reversed
            >
              <p className="text-xl">
                En Ns Group,{" "}
                <span className="font-bold text-primary">
                  transformamos los desafíos en oportunidades
                </span>{" "}
                para líderes de todos los sectores. Nuestro asesoramiento
                estratégico se basa en un{" "}
                <span className="font-bold text-primary">
                  análisis profundo de datos, potenciado por IA
                </span>
                , que ofrece insights cruciales para la toma de{" "}
                <span className="font-bold text-primary">
                  decisiones informadas
                </span>
                .
              </p>
              <p className="text-xl">
                Ya sea que dirija una empresa, una institución estatal, una
                organización sin fines de lucro o un movimiento político,
                <span className="font-bold text-primary">
                  {" "}
                  nuestro enfoque boutique asegura que cada cliente reciba una
                  solución meticulosamente analizada y adaptada a su contexto
                  único.
                </span>
              </p>
              <p className="text-xl">
                Desde la gestión corporativa hasta la política pública, desde la
                innovación institucional hasta las campañas de impacto social,
                <span className="font-bold text-primary">
                  {" "}
                  nuestro asesoramiento en acción le proporciona las
                  herramientas y perspectivas necesarias para la toma de
                  decisiones en un mundo en constante cambio.
                </span>
              </p>
            </SolutionCard>
            <SolutionCard
              img={"/img/juli.webp"}
              title="Data Analytics "
              secondTitle="& Socla Insights"
            >
              <p className="text-xl">
                Profundizamos en el conocimiento de tus audiencias clave y
                maximizamos el valor de los datos disponibles.{" "}
                <span className="font-bold text-primary">
                  Identificamos las tendencias emergentes en tu entorno y
                  comparamos tu posicionamiento con las expectativas y
                  aspiraciones de tus grupos de interés.
                </span>
              </p>
              <p className="text-xl">
                <span className="font-bold text-primary">
                  Analizamos los perfiles de tus públicos objetivo
                </span>{" "}
                e identificamos sus motivaciones, permitiéndote conectar de
                manera más efectiva con ellos. Ya sea que busques llegar a
                consumidores, donantes, votantes o cualquier otro grupo
                relevante,{" "}
                <span className="font-bold text-primary">
                  nuestro enfoque personalizado te ayuda a comprender y
                  responder mejor a sus necesidades y deseos.
                </span>
              </p>
            </SolutionCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;
