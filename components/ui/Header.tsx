"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { helvetica } from "@/lib/fonts";
import Container from "./Container";

const navItems = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Soluciones", href: "#soluciones" },
  { name: "Empresas", href: "#empresas" },
  { name: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${helvetica.className} container p-5 mx-auto fixed right-0 left-0 bg-white flex justify-between items-center py-5 z-50`}
    >
      <Link href="/" className="max-w-32 md:max-w-full">
        <Image
          className="relative w-full z-50"
          alt="Logo Nsgroup"
          src="/logo_negro.png"
          width={185}
          height={38}
        />
      </Link>
      <nav className="hidden md:flex gap-5 uppercase">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative hover:after:translate-y-0 p-5 overflow-hidden after:absolute after:w-full after:h-full after:inset-0 after:-translate-y-full after:transition after:duration-300 after:-z-10 after:bg-primary hover:text-white transition duration-300"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-2xl uppercase p-5"
            onClick={toggleMenu}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
