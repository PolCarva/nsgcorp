import React from "react";
import Container from "./Container";
import Image from "next/image";
import { durk } from "@/lib/fonts";
import { getAllPosts } from "@/lib/posts";
import { Post, PostList } from "@/types";
import { revalidatePath } from "next/cache";
import HeadingThree from "./HeadingThree";

type GroupedPersons = {
  [country: string]: Post[];
};

const groupByCountry = (persons: Post[]): GroupedPersons => {
  return persons.reduce((acc: GroupedPersons, person: Post) => {
    const countryCategory = person.categories.nodes.find(
      (cat) => cat.slug !== "equipo"
    );

    if (countryCategory) {
      const country = countryCategory.name;

      if (!acc[country]) {
        acc[country] = [];
      }

      acc[country].push(person);
    }

    return acc;
  }, {});
};

const TeamListSection = async () => {
  const persons: PostList = await getAllPosts("equipo");

  revalidatePath("/equipo");

  const groupedPersons = groupByCountry(persons.nodes);

  return (
    <section className="pb-20 opacity-0" data-animate-hidden>
      <Container>
        {Object.keys(groupedPersons).map((country) => (
          <div key={country} className="mb-16">
            <HeadingThree
              text={country}
              color="primary"
              mobilePosition="left"
            />

            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6"
              data-animate-stagger
            >
              {groupedPersons[country].map((person: Post) => (
                <div
                  key={person.title}
                  className="w-full h-full bg-primary p-3"
                >
                  <Image
                    objectPosition="center"
                    className="w-full aspect-square object-cover"
                    alt={person.title}
                    width={934}
                    height={594}
                    src={
                      person.featuredImage.node.mediaDetails.sizes[0].sourceUrl
                    }
                  />
                  <h2
                    className={`${durk.className} tracking-wide uppercase text-3xl text-white`}
                  >
                    {person.title}
                  </h2>
                  <p className="text-semibold text-white/80 line-clamp-2">
                    {person.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 100)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default TeamListSection;
