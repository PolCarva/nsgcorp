"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GSAPAnimations = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titles = gsap.utils.toArray("h2");
    const animateInArray = gsap.utils.toArray("[data-animate-in]");
    const animateStagger = gsap.utils.toArray("[data-animate-stagger]");
    const tags = gsap.utils.toArray("[data-tag]");
    const headings = gsap.utils.toArray("[data-animate-heading]");
    const tl = gsap.timeline();
    const images = gsap.utils.toArray("[data-animate-image]");

    tl
    .to("[data-animate-loader]", {
      height: "100%",
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to("[data-animate-loader]", {
      width: "100%",
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to("#title", {
      opacity: 1,
      duration: 0.01,
    })
    .to("[data-animate-loader]", {
      left: "100%",
      width: 0,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to(headings, {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      duration: 1,
    });

    images.forEach((tag: any) => {
      gsap.to(tag, {
        opacity: 1,
        scrollTrigger: {
          trigger: tag,
          start: "top 70%",
        },
      });
    });

    tags.forEach((tag: any) => {
      gsap.to(tag, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: tag,
          start: "top 60%",
        },
      });
    });

    animateStagger.forEach((item: any) => {
      gsap.from(item.children, {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
        },
      });
    });

    animateInArray.forEach((item: any) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });
    });

    titles.forEach((title: any) => {
      gsap.from(gsap.utils.toArray("span", title), {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: title,
          start: "top 60%",
        },
      });
    });
  });
  return <div></div>;
};

export default GSAPAnimations;
