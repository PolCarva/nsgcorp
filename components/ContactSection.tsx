import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import Tag from "./ui/Tag";
import ContactForm from "./ui/ContactForm";

const ContactSection = () => {
  return (
    <section id="contacto" className="pt-5 md:pt-20 h-fit">
      <Container>
        <div className="flex flex-col relative">
        <div className='absolute hidden md:block right-52 bottom-0 -z-10 bg-[url("/img/hero_img.webp")] bg-cover bg-right w-1/2 h-2/3'/>
          <Tag text="Contáctanos" className="w-fit" />
          <HeadingTwo top="Cuéntanos" bottom="Tus Ideas" />
        </div>
       <ContactForm />
      </Container>
    </section>
  );
};

export default ContactSection;
