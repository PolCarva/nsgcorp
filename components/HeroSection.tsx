import { durk } from "@/lib/fonts";
import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import { TfiAngleRight } from "react-icons/tfi";
import Tag from "./ui/Tag";

const HeroSection = () => {
  return (
    <Container>
      <section className="h-[80svh] pt-20 md:pt-0 flex items-center">
        <div className="mx-auto w-full flex flex-col justify-center gap-20 md:pl-0 relative bg-primary">
          <h1
            className={`uppercase leading-normal md:leading-none relative tracking-wider text-[3.9rem] md:text-9xl lg:text-[10rem] ${durk.className}`}
          >
            <Tag text="Especialistas en" className="absolute bottom-full left-0" />
            <span className="bg-white scale-105 pl-[5%] lg:pl-0 lg:scale-100 w-full lg:w-fit pr-5 block">
              Social Science
            </span>
            <span className="bg-white scale-105 lg:scale-100 pl-[5%] lg:pl-0 w-full lg:w-fit pr-5 block">
              Comunicación <span className="hidden lg:inline">&</span>
            </span>

            <span className="bg-white scale-105 pl-[4%] lg:pl-0 lg:scale-100 w-fit pr-5 block">
              Big Data
            </span>
          </h1>
          <Link
            href={"#contacto"}
            scroll
            className="w-full py-5 md:self-end md:px-[12%] md:py-8 md:w-fit lg:px-[8.75%] grid group place-content-center h-1/3 text-white lg:absolute bottom-0 right-0 bg-black"
          >
            <span className="capitalize group-hover:w-[110%] transition text-2xl relative">
              Contáctanos
            </span>
            <div className="w-full h-px mt-2 relative bg-white  lg:group-hover:scale-x-125 transition-transform ease-in-out duration-300">
              <TfiAngleRight className="absolute right-0 top-1/2 !scale-100 -translate-y-1/2 translate-x-1/3" />
            </div>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
