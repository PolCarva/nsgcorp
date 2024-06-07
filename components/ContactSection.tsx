import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import Tag from "./ui/Tag";
import { durk, helvetica } from "@/lib/fonts";
import ContactForm from "./ui/ContactForm";

const ContactSection = () => {
  return (
    <section id="contacto" className="pt-5 md:pt-20 h-fit">
      <Container>
        <div className="flex flex-col">
          <Tag text="Contáctanos" className="w-fit" />
          <HeadingTwo top="Cuéntanos" bottom="Tus Ideas" />
        </div>
       <ContactForm />
      </Container>
    </section>
  );
};

export default ContactSection;
