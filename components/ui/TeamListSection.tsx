import React from "react";
import Container from "./Container";
import Image from "next/image";
import { durk } from "@/lib/fonts";

const persons = [
  {
    name: "Pablo Carvalho",
    img: "/img/hero_img.webp",
    profesion: "Desarrollador Web",
  },
  {
    name: "Samuel González",
    img: "/img/hero_img.webp",
    profesion: "Desarrollador Web",
  },
  {
    name: "Jorge Pio Bado",
    img: "/img/hero_img.webp",
    profesion: "Desarrollador Web",
  },
  {
    name: "María Eugenia Durán",
    img: "/img/hero_img.webp",
    profesion: "Desarrollador Web",
  },
  {
    name: "El Guti",
    img: "/img/hero_img.webp",
    profesion: "Desarrollador Web",
  },
  {
    name: "Gustavo Cadeiras",
    img: "/img/hero_img.webp",
    profesion: "Desarrollador Web",
  },
];

const TeamListSection = () => {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {persons.map((person) => (
            <div key={person.name} className="w-full h-full bg-primary p-2">
              <Image
                objectPosition="center"
                className="w-full aspect-square object-cover"
                alt={person.name}
                width={934}
                height={594}
                src={person.img}
              />
              <h2
                className={`${durk.className} tracking-wide uppercase text-3xl text-white`}
              >
                {person.name}
              </h2>
              <p className="text-semibold text-white/80">
                {person.profesion}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamListSection;
