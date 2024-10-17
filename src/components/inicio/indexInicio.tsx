import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import ImagenMia from "../../../public/Imagen_de_WhatsApp_2024-08-22_a_las_15.13.37_528e0acb-removebg-previewwww.png";
import style from "./style.module.css";
import Link from "next/link";

const textBaseClass = "text-[#402158] dark:text-[#E2E9FF]";
const titleClass =
  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center";
const descriptionClass = "text-base sm:text-lg md:text-xl lg:text-2xl";
const containerClass =
  "flex flex-col items-center lg:items-start lg:ml-8 card lg:card-side p-5 bg-[#c9bfb5] dark:bg-[#402158] w-full h-auto hover:shadow-[#100E36] dark:hover:shadow-[#e2e9ff] hover:shadow-lg";
const buttonClass =
  "mt-10 text-xl rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#3b9853] dark:bg-[#d2febc] px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#286437] dark:hover:bg-[#bdf3a2] animate-blink";

function IndexInicio() {
  return (
    <div
      id="inicio"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-96 p-6"
    >
      {/* Header Section */}
      <div className="col-span-1 md:col-span-2 flex flex-col items-center px-4">
        <h2
          className={`${titleClass} ${textBaseClass} hover:translate-x-1 transition duration-300 mb-4`}
        >
          ¡ Hola, soy Alexis Dante Guastalli !
        </h2>
        <h3
          className={`${textBaseClass} text-lg sm:text-xl md:text-2xl lg:text-3xl m-5`}
        >
          Desarrollador Web Full Stack | Front-end | QA Manual
        </h3>
        <div className="flex flex-col items-center mx-auto h-40 w-40">
          <Spline scene="https://prod.spline.design/Ipnnmy0yCG9emlUm/scene.splinecode" />
        </div>
      </div>

      {/* Left Column (Image) */}
      <div className="flex justify-center items-center">
        <Image
          className={`${style.Image} w-48 h-72 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-auto lg:h-auto rounded-full`}
          src={ImagenMia}
          alt="Mi Foto"
          width={1200}
          height={1200}
        />
      </div>

      {/* Right Column (Descriptions) */}
      <div className="flex flex-col gap-4">
        <div className={containerClass}>
          <p
            className={`${textBaseClass} ${descriptionClass} mb-5 text-center lg:text-left`}
          >
            Soy desarrollador web Full Stack con especialización en Frontend. Mi
            experiencia abarca tecnologías como React, Next.js, JavaScript,
            TypeScript, CSS, Tailwind y Bootstrap. Además, cuento con
            conocimientos en Testing QA Manual.
          </p>
        </div>

        <div className={containerClass}>
          <p
            className={`${textBaseClass} ${descriptionClass} mb-5 text-center lg:text-left`}
          >
            Lo que más me motiva es crear soluciones innovadoras y visualmente
            atractivas. Siempre estoy en busca de nuevas herramientas y
            tecnologías para seguir aprendiendo y perfeccionando mis
            habilidades. Mi objetivo es contribuir al éxito de los proyectos y
            ofrecer experiencias excepcionales a los usuarios.
          </p>
        </div>
      </div>

      {/* Full Width Button Section */}
      <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-10">
        <Link href="#contacto">
          <button className={buttonClass}>Disponible para Trabajar</button>
        </Link>
      </div>
    </div>
  );
}

export default IndexInicio;
