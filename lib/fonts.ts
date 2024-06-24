
import localfont from "next/font/local";


/* export const helvetica = localfont({
  src: [
    {
      path: "../public/fonts/helvetica/helvetica.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/helvetica/helvetica-Bold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-helvetica",
}); */

export const montserrat = localfont({
  src: [
    {
      path: "../public/fonts/montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "800",
    },
  ],
  variable: "--font-montserrat",
});

export const durk = localfont({
  src: [
    {
      path: "../public/fonts/durk_cyr/DrukCyr-Medium.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/durk_cyr/DrukCyr-Bold.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/durk_cyr/DrukCyr-Heavy.woff2",
      weight: "800",
    },
  ],
  variable: "--font-durk",
});