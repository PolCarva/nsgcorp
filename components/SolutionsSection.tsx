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
          <Tag text="Soluciones" className="absolute mb-5 bottom-full left-0" />
          <div
            data-animate-image
            className='absolute hidden md:block left-60 top-0 -z-10 bg-[url("/img/hero_img.webp")] bg-cover bg-right w-1/2 h-5/6'
          />
          <HeadingTwo top="Mirada" bottom="Innovadora" />
        </div>
        <div className="mt-16">
          <div className="w-full flex flex-col gap-20">
            <SolutionCard img={"/img/maru.webp"} title="Social Deep Dive">
              <p className="text-xl">
                Utilizamos plataformas avanzadas para capturar y mantenerte
                informado sobre todo lo relevante en esfera digital. Generamos
                alertas en tiempo real frente a cambios de tendencias o la
                participación de personalidades influyentes en las
                conversaciones relacionadas con tu organización o causa.
              </p>
              <p className="text-xl">
                Nuestro sistema de monitoreo integral te permite estar al tanto
                de la percepción pública sobre tu entidad , marca o mensaje,{" "}
                detectar oportunamente crisis potenciales o temas emergentes,
                identificar aliados y detractores clave en el ecosistema
                digital, y medir el impacto de tus campañas y comunicaciones .
              </p>
              <p className="text-xl">
                Ya sea que busques entender la opinión pública, gestionar tu
                reputación o medir el alcance de tus iniciativas, nuestro
                enfoque personalizado te proporciona insights accionables para
                tomar decisiones informadas y estratégicas.
              </p>
            </SolutionCard>
            <SolutionCard
              img={"/img/manos.webp"}
              title="Asesoramiento En Acción"
              reversed
            >
              <p className="text-xl">
                En Ns Group, transformamos los desafíos en oportunidades para
                líderes de todos los sectores. Nuestro asesoramiento estratégico
                se basa en un análisis profundo de datos, potenciado por IA ,
                que ofrece insights cruciales para la toma de decisiones
                informadas .
              </p>
              <p className="text-xl">
                Ya sea que dirija una empresa, una institución estatal, una
                organización sin fines de lucro o un movimiento político,{" "}
                nuestro enfoque boutique asegura que cada cliente reciba una
                solución meticulosamente analizada y adaptada a su contexto
                único.
              </p>
              <p className="text-xl">
                Desde la gestión corporativa hasta la política pública, desde la
                innovación institucional hasta las campañas de impacto social,{" "}
                nuestro asesoramiento en acción le proporciona las herramientas
                y perspectivas necesarias para la toma de decisiones en un mundo
                en constante cambio.
              </p>
            </SolutionCard>
            <SolutionCard
              img={"/img/juli.webp"}
              title="Data Analytics "
              secondTitle="& Social Insights"
            >
              <p className="text-xl">
                Profundizamos en el conocimiento de tus audiencias clave y
                maximizamos el valor de los datos disponibles. Identificamos las
                tendencias emergentes en tu entorno y comparamos tu
                posicionamiento con las expectativas y aspiraciones de tus
                grupos de interés.
              </p>
              <p className="text-xl">
                Analizamos los perfiles de tus públicos objetivo e identificamos
                sus motivaciones, permitiéndote conectar de manera más efectiva
                con ellos. Ya sea que busques llegar a consumidores, donantes,
                votantes o cualquier otro grupo relevante, nuestro enfoque
                personalizado te ayuda a comprender y responder mejor a sus
                necesidades y deseos.
              </p>
            </SolutionCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;
