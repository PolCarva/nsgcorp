import React from "react";
import Container from "./Container";
import Image from "next/image";
import { durk } from "@/lib/fonts";
import { getTeam } from "@/lib/posts";
import { Team, TeamList } from "@/types";
import { revalidatePath } from "next/cache";

const TeamListSection = async () => {
  const persons: TeamList = await getTeam();
  persons.nodes.sort((a, b) => a.equipo.prioridad - b.equipo.prioridad);
  revalidatePath("/equipo");

  return (
    <section className="pb-20 opacity-0" data-animate-hidden>
      <Container>
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6"
          data-animate-stagger
        >
          {persons.nodes.map((person: Team) => (
            <div key={person?.equipo?.nombre} className="w-full h-full bg-primary p-3">
              <Image
                objectPosition="center"
                className="w-full aspect-square object-cover"
                alt={person?.equipo?.imagen?.node?.altText}
                width={parseInt(person?.equipo?.imagen?.node?.mediaDetails?.sizes[0]?.width)}
                height={parseInt(person?.equipo?.imagen?.node?.mediaDetails?.sizes[0]?.height)}
                src={person?.equipo?.imagen?.node?.mediaDetails?.sizes[0]?.sourceUrl}
              />
              <h2
                className={`${durk.className} tracking-wide uppercase text-3xl text-white`}
              >
                {person?.equipo?.nombre}
              </h2>
              <p className="text-semibold text-white/80 line-clamp-2">
                {person?.equipo?.cargo?.replace(/(<([^>]+)>)/gi, "").slice(0, 100)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamListSection;
