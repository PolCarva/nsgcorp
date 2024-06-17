import { durk } from "@/lib/fonts";
import React from "react";
import Tag from "./Tag";
import Container from "./Container";

const TeamHeading = () => {
  return (
    <Container>
      <section className="pt-20 pb-16 flex items-center">
        <div className="mx-auto w-full flex flex-col justify-center gap-20 md:pl-0 relative">
          <div
            className={`uppercase leading-none relative tracking-wider text-[3.9rem] md:text-9xl 2xl:text-[10rem] lg:text-[7rem] ${durk.className}`}
          >
            <Tag
              text="Equipo"
              delay={1.1}
              className="absolute bottom-full left-0"
            />

            <div
              data-animate-loader
              className="h-0 w-24 left-0 top-1/2 z-30 -translate-y-1/2 opacity-0 absolute bg-primary"
            />
            <h1 id="title" className="relative">
              <span className="w-full flex relative z-10">
                <span>Nuestro Equipo</span>
                <span className="flex-1 bg-primary"></span>
              </span>
            </h1>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TeamHeading;
