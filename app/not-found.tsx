import Container from "@/components/ui/Container";
import { FaAngleLeft } from "react-icons/fa";
import { durk } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="flex min-h-[80svh] items-center">
      <Container>
        <h1
          className={`${durk.className} w-full tracking-wide text-8xl md:text-9xl lg:text-[14rem] 2xl:text-[16em] uppercase`}
        >
          <span className="block md:mb-[-0.2em]">Página no</span>
          <span className="block text-end">encontrada</span>
        </h1>
        <Link
          href={"/"}
          className={`${durk.className} hover:text-primary-alternativo flex items-center w-fit group transition text-5xl lg:text-8xl uppercase text-primary`}
        >
          <span>
            <FaAngleLeft className="group-hover:-translate-x-10 transition" />
          </span>
          <span>Volver</span>
        </Link>
      </Container>
    </section>
  );
};

export default notFound;
