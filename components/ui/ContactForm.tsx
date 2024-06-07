"use client";

import { durk, helvetica } from "@/lib/fonts";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ErrorField {
  field?: string;
  message?: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error" | "unfilled"
  >("idle");
  const [errorField, setErrorField] = useState<ErrorField>({});
  const [form, setForm] = useState({
    from: "",
    name: "",
    subject: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrorField({});
    setForm({ ...form, [name]: value });
  };

  const showToast = (message: string, type: "success" | "error") => {
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.from) {
      setErrorField({
        field: "from",
        message: "Por favor, introduce un email válido",
      });
      showToast("Por favor, introduce un email válido", "error");
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(form.from)) {
      setErrorField({
        field: "from",
        message: "Por favor, introduce un email válido",
      });
      showToast("Por favor, introduce un email válido", "error");
      return;
    }

    if (!form.name) {
      setErrorField({
        field: "name",
        message: "Por favor, introduce tu nombre",
      });
      showToast("Por favor, introduce tu nombre", "error");
      return;
    }
    if (!form.subject) {
      setErrorField({
        field: "subject",
        message: "Por favor, introduce un asunto",
      });
      showToast("Por favor, introduce un asunto", "error");
      return;
    }
    if (!form.body) {
      setErrorField({
        field: "body",
        message: "Por favor, introduce un mensaje",
      });
      showToast("Por favor, introduce un mensaje", "error");
      return;
    }

    setErrorField({});
    setFormState("loading");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setFormState("success");
        showToast("Mensaje enviado con éxito!", "success");
      } else {
        setFormState("error");
        showToast("No se pudo enviar el mensaje.", "error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormState("error");
      showToast("No se pudo enviar el mensaje.", "error");
    } finally {
      setFormState("idle");
    }
  };

  const getInputClass = (field: string) => {
    const isError = errorField.field === field;
    return `${
      helvetica.className
    } outline-none focus:ring-2 focus:ring-primary/30 tracking-wide text-xl border-2 border-primary w-full p-5 ${
      isError ? "border-red-500" : ""
    }`;
  };

  return (
    <>
      {" "}
      <Toaster position="top-center" reverseOrder={false} />
      <form
        className={`${durk.className} flex flex-col gap-5 my-16`}
        onSubmit={send}
      >
        <label>
          <span className="uppercase text-4xl tracking-wide">Nombre</span>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre y apellido..."
            id="name_inp"
            className={getInputClass("name")}
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className="uppercase text-4xl tracking-wide">Email</span>
          <input
            type="text"
            name="from"
            placeholder="Tu email..."
            id="email_inp"
            className={getInputClass("from")}
            value={form.from}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className="uppercase text-4xl tracking-wide">
            Asunto del Mail
          </span>
          <input
            type="text"
            name="subject"
            placeholder="Escribe el asunto..."
            id="subject_inp"
            className={getInputClass("subject")}
            value={form.subject}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className="uppercase text-4xl tracking-wide">Mensaje</span>
          <textarea
            name="body"
            placeholder="Escribe el mensaje..."
            id="body_inp"
            className={`${
              helvetica.className
            } min-h-60 resize-y outline-none focus:ring-2 focus:ring-primary/30 tracking-wide text-xl border-2 border-primary w-full p-5 ${
              errorField.field === "body" ? "border-red-500" : ""
            }`}
            value={form.body}
            onChange={handleChange}
          />
        </label>
        <button
          className="md:w-1/3 w-full py-5 text-4xl uppercase tracking-wider self-end bg-primary text-white"
          type="submit"
          disabled={formState === "loading"}
        >
          {formState === "loading" ? (
            <span className="flex gap-5 justify-center items-center">
              <AiOutlineLoading3Quarters className="animate-spin" />
              Enviando
            </span>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
