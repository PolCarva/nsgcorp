import React from "react";
import Container from "./ui/Container";
import AboutTexts from "./ui/AboutTexts";
import Approach from "./ui/Approach";
import HeadingTwo from "./ui/HeadingTwo";
import PresenceAndPerformance from "./ui/PresenceAndPerformance";

const AboutSection = () => {
  return (
    <section id="nosotros">
      <Container>
       <HeadingTwo top={"¿Quiénes"} bottom={"Somos?"} />
        <AboutTexts />
        <Approach />
        <PresenceAndPerformance />
      </Container>
    </section>
  );
};

export default AboutSection;
