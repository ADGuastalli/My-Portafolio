import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import ImagenMia from "../../../public/Imagen_de_WhatsApp_2024-08-22_a_las_15.13.37_528e0acb-removebg-previewwww.png";
import style from "./style.module.css";

function IndexInicio() {
  return (
    <div id="inicio" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-96">
      <div className="col-span-1 md:col-span-3 flex flex-col items-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300">
          ¡ Hola, soy Alexis Dante Guastalli !
        </h2>
        <h3 className="text-[#402158] dark:text-[#E2E9FF] text-lg sm:text-xl md:text-2xl lg:text-3xl m-2">
          Desarrollador Full Stack | Front-end | QA Manual
        </h3>
        <div className="flex flex-col items-center mx-auto h-40 w-40">
          <Spline scene="https://prod.spline.design/Ipnnmy0yCG9emlUm/scene.splinecode" />
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 flex justify-center">
        <Image
          className={`${style.Image} w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-auto lg:h-auto`}
          src={ImagenMia}
          alt="Mi Foto"
          width={1200}
          height={1200}
        />
      </div>
      <div className="col-span-1 md:col-span-1 flex flex-col items-center lg:items-start lg:ml-8">
        <p className="text-[#402158] dark:text-[#E2E9FF] text-base sm:text-lg md:text-xl lg:text-2xl mb-5 text-center lg:text-left mt-10">
          Soy desarrollador web Full Stack con especialización en Frontend. Mi
          experiencia abarca tecnologías como React, Next.js, JavaScript,
          TypeScript, CSS, Tailwind y Bootstrap. Además, cuento con
          conocimientos en Testing QA Manual.
        </p>
      </div>
      <div className="col-span-1 md:col-span-1 flex flex-col items-center lg:items-start lg:ml-8">
        <p className="text-[#402158] dark:text-[#E2E9FF] text-base sm:text-lg md:text-xl lg:text-2xl mb-5 text-center lg:text-left mt-10">
          Lo que más me motiva es crear soluciones innovadoras y visualmente
          atractivas. Siempre estoy en busca de nuevas herramientas y
          tecnologías para seguir aprendiendo y perfeccionando mis habilidades.
          Mi objetivo es contribuir al éxito de los proyectos y ofrecer
          experiencias excepcionales a los usuarios.
        </p>
      </div>
      <div className="col-span-1 md:col-span-3 flex justify-center">
        <p className="text-[#402158] dark:text-[#E2E9FF] text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-10">
          Siempre abierto a colaboraciones y oportunidades interesantes.
          ¡Conéctate conmigo y hablemos sobre cómo podemos crear algo increíble
          juntos!
        </p>
      </div>
    </div>
  );
}

export default IndexInicio;
