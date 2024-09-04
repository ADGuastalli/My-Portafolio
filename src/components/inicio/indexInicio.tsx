import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import ImagenMia from "../../../public/Imagen_de_WhatsApp_2024-08-22_a_las_15.13.37_528e0acb-removebg-previewwww.png";
import style from "./style.module.css";

function IndexInicio() {
  return (
    <div>
      <div id="inicio" className="mb-96">
        <div className="flex flex-col items-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300">
            ¡ Hola, soy Alexis Dante Guastalli !
          </h2>
          <h3 className="text-[#402158] dark:text-[#E2E9FF] text-lg sm:text-xl md:text-2xl lg:text-3xl m-2">
            Desarrollador Full Stack | Front-end
          </h3>
          <div className="flex flex-col items-center h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60">
            <Spline scene="https://prod.spline.design/Ipnnmy0yCG9emlUm/scene.splinecode" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center px-4">
          <Image
            className={`${style.Image} w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-auto lg:h-auto`}
            src={ImagenMia}
            alt="Mi Foto"
            width={1200}
            height={1200}
          />
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <p className="text-[#402158] dark:text-[#E2E9FF] text-base sm:text-lg md:text-xl lg:text-2xl mb-5 text-center lg:text-left">
              Soy desarrollador web Full Stack con especialización en Frontend.
              Mi experiencia abarca tecnologías como React, Next.js, JavaScript,
              TypeScript, CSS, Tailwind y Bootstrap. Además, cuento con
              conocimientos en Testing QA Manual.
            </p>

            <p className="text-[#402158] dark:text-[#E2E9FF] text-base sm:text-lg md:text-xl lg:text-2xl mb-5 text-center lg:text-left">
              Lo que más me motiva es crear soluciones innovadoras y visualmente
              atractivas. Siempre estoy en busca de nuevas herramientas y
              tecnologías para seguir aprendiendo y perfeccionando mis
              habilidades. Mi objetivo es contribuir al éxito de los proyectos y
              ofrecer experiencias excepcionales a los usuarios.
            </p>

            <p className="text-[#402158] dark:text-[#E2E9FF] text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-left">
              Siempre abierto a colaboraciones y oportunidades interesantes.
              ¡Conéctate conmigo y hablemos sobre cómo podemos crear algo
              increíble juntos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexInicio;
