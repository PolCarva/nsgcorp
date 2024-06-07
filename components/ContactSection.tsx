import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import Tag from "./ui/Tag";
import { durk, helvetica } from "@/lib/fonts";

const ContactSection = () => {
  return (
    <section id="contacto" className="pt-5 md:pt-20 h-fit">
      <Container>
        <div className="flex flex-col">
          <Tag text="Contáctanos" className="w-fit" />
          <HeadingTwo top="Cuéntanos" bottom="Tus Ideas" />
        </div>
        <form
          className={`${durk.className} flex flex-col gap-5 my-16`}
          action=""
        >
          <label>
            <span className={` uppercase text-4xl tracking-wide`}>Nombre</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Tu nombre y apellido..."
              id="name_inp"
              className={`${helvetica.className} outline-none focus:ring-2 focus:ring-primary/30 tracking-wide text-xl border-2 border-primary w-full p-5`}
            />
          </label>
          <label>
            <span className={`uppercase text-4xl tracking-wide`}>Email</span>
            <input
              type="text"
              name="email"
              required
              placeholder="Tu email..."
              id="email_inp"
              className={`${helvetica.className} outline-none focus:ring-2 focus:ring-primary/30 tracking-wide text-xl border-2 border-primary w-full p-5`}
            />
          </label>
          <label>
            <span className={`uppercase text-4xl tracking-wide`}>
              Asunto del Mail
            </span>
            <input
              type="text"
              name="subject"
              required
              placeholder="Escribe el asunto..."
              id="subject_inp"
              className={`${helvetica.className} outline-none focus:ring-2 focus:ring-primary/30 tracking-wide text-xl border-2 border-primary w-full p-5`}
            />
          </label>
          <label>
            <span className={`uppercase text-4xl tracking-wide`}>Mensaje</span>
            <textarea
              name="subject"
              required
              placeholder="Escribe el mensaje..."
              id="subject_inp"
              className={`${helvetica.className} min-h-60 resize-y outline-none focus:ring-2 focus:ring-primary/30 tracking-wide text-xl border-2 border-primary w-full p-5`}
            />
          </label>
          <button
            className=" md:w-1/3 w-full py-5 text-4xl uppercase tracking-wider self-end bg-primary text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </Container>
    </section>
  );
};

export default ContactSection;
