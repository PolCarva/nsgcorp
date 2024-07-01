import { durk, montserrat } from "@/lib/fonts";
import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import { TfiAngleRight } from "react-icons/tfi";
import Tag from "./ui/Tag";

const HeroSection = () => {
  return (
    <Container>
      <section className="h-[80svh] md:h-[60svh] md:pt-40 xl:pt-26 2xl:pt-40 flex items-center">
        <div className="mx-auto 2xl:max-w-full max-w-screen-lg w-full flex flex-col justify-center gap-20 md:pl-0 relative">
          <div
            className={`uppercase leading-none relative tracking-wider text-[3.5rem] md:text-8xl 2xl:text-[10rem] lg:text-[7rem] ${durk.className}`}
          >
            <Tag
              text="Ns Group"
              delay={1.1}
              className="absolute mb-5 bottom-full left-0"
            />
            <div
              data-animate-image
              className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7/12 h-[120%] bg-[url("/img/hero_img.webp")]'
            ></div>
            <div
              data-animate-loader
              className="h-0 w-24 left-0 top-1/2 z-30 -translate-y-1/2 opacity-0 absolute bg-primary"
            />
            <h1 id="title" className="relative">
              <span className="w-full flex flex-col md:flex-row md:gap-4 relative z-10">
                <span className="flex">
                  <span>Social Data </span>
                  <span className="flex-1 bg-primary"></span>
                </span>
                <span className="flex">
                  <span>House De</span>
                  <span className="flex-1 bg-primary"></span>
                </span>
                <span className="flex-1 bg-primary"></span>
              </span>
              <span className="w-full flex relative z-10">
                <span>Comunicación </span>
                <span className="flex-1 w-full bg-primary scale-y-105"></span>
              </span>
              <span className="flex-col relative z-10 gap-y-4 lg:gap-0 lg:flex-row w-full flex">
                <span className="flex w-full">
                  <span>Estratégica </span>
                  <span className="flex-1 bg-primary"></span>
                </span>
                <Link
                  href={"#contacto"}
                  scroll
                  className={`${montserrat.className} w-full py-5 lg:px-[9.2%] 2xl:px-[6%] md:py-8 lg:w-fit grid group place-content-center flex-1 text-white bg-black`}
                >
                  <span className="capitalize group-hover:w-[110%] transition text-xl md:text-2xl relative">
                    Contáctanos
                  </span>
                  <span className="w-full h-px mt-2 relative bg-white  lg:group-hover:scale-x-125 transition-transform ease-in-out duration-300">
                    <TfiAngleRight className="absolute text-base right-0 top-1/2 !scale-100 -translate-y-1/2 translate-x-1/3" />
                  </span>
                </Link>
              </span>
            </h1>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
