import { durk } from "@/lib/fonts";
import React from "react";
import Container from "./ui/Container";

const HeroSection = () => {
  return (
    <Container>
      <section className="h-[80svh] bg-red-500 pt-12">
        <div className="mx-auto pl-5 md:pl-0 relative bg-green-400">
          <h1 className={`font-6xl ${durk.className}`}>
            <span>HERO SECTION</span>
          </h1>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
