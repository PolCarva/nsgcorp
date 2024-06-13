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
          <HeadingTwo top="Nuestras" bottom="soluciones" />
        </div>
        <div className="mt-16">
          <div className="w-full flex flex-col gap-20">
            <SolutionCard
              img={"/img/consulting.webp"}
              title="Consultoría"
              text="En Ns Group somos pioneros en la combinación y análisis híbrido de
              Analítica Aumentada, Inteligencia Artificial, Social Science y
              Experiencia Humana, para comprender mejor las problemáticas y
              desafíos de los Proyecto y Causas de nuestros clientes,
              identificar sus necesidades específicas, desarrollar mensajes
              específicos para diferentes audiencias, y estrategias accionables
              de comunicación, disruptivas e innovadoras."
            />
            <SolutionCard
              img={"/img/platforms.webp"}
              title="Plataformas"
              reversed
              text="Proceso de Contamos con plataformas para capturar y mantenerte informado de todo lo que sucede en el entorno digital (redes sociales, medios, blogs, sitios). Generamos alertas frente a cambios de tendencias en redes sociales o participación de personalidades influyentes en el buzz social de nuestros clientes."
            />
            <SolutionCard
              img={"/img/data.webp"}
              title="Data & Insights"
              text="Profundizamos en el conocimiento de tus consumidores y obtenemos el máximo valor de sus datos. Identificamos las tendencias emergentes en tu mercado y comparamos tu posicionamiento de marca con las aspiraciones de los consumidores. Clasificamos los perfiles de tus clientes e identificamos sus motivaciones."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;
