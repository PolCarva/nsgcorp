import { durk, helvetica } from "@/lib/fonts";
import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import { TfiAngleRight } from "react-icons/tfi";
import Tag from "./ui/Tag";

const HeroSection = () => {
  return (
    <Container>
      <section className="h-[80svh] pt-20 md:pt-0 flex items-center">
        <div className="mx-auto w-full flex flex-col justify-center gap-20 md:pl-0 relative">
          <div
            className={`uppercase leading-none relative tracking-wider text-[3.9rem] md:text-9xl 2xl:text-[10rem] lg:text-[8rem] ${durk.className}`}
          >
            <Tag
              text="Nsg Corp"
              className="absolute bottom-full left-0"
            />
            <h1 className="relative">
              <span className='hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7/12 h-[120%] bg-[url("/img/hero_img.webp")]'></span>
              <span className="w-full flex relative z-10">
                <span>Social Science</span>
                <span className="flex-1 bg-primary"></span>
              </span>
              <span className="w-full flex relative z-10">
                <span>
                  Comunicación <span className="hidden lg:inline">&</span>
                </span>
                <span className="flex-1 bg-primary"></span>
              </span>
              <span className="flex-col relative z-10 gap-4 md:gap-0 md:flex-row w-full flex">
                <span className="flex w-full">
                  <span className="">Big Data</span>
                  <span className="flex-1 bg-primary"></span>
                </span>
                <Link
                  href={"#contacto"}
                  scroll
                  className={`${helvetica.className} w-full py-5 md:px-[12%] md:py-8 md:w-fit lg:px-[13.74%] 2xl:px-[6%] grid group place-content-center flex-1 text-white bg-black`}
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
