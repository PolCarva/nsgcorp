import React from "react";
import Container from "./ui/Container";
import AboutTexts from "./ui/AboutTexts";
import Approach from "./ui/Approach";
import HeadingTwo from "./ui/HeadingTwo";

const AboutSection = () => {
  return (
    <section id="nosotros">
      <Container>
       <HeadingTwo top={"¿Quiénes"} bottom={"Somos?"} />
        <AboutTexts />
        <Approach />
      </Container>
    </section>
  );
};

export default AboutSection;
