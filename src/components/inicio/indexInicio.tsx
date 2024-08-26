import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import ImagenMia from "../../../public/Imagen_de_WhatsApp_2024-08-22_a_las_15.13.37_528e0acb-removebg-previewwww.png";
import style from "./style.module.css";
function IndexInicio() {
  return (
    <div id="inicio" className="mb-96 mt-5 ">
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300">
          ¡ Hola, soy Alexis Dante Guastalli !
        </h2>
        <h3 className="text-[#402158] dark:text-[#E2E9FF] text-3xl m-2">
          Desarrollador Full Stack | Front-end
        </h3>
        <div className="flex flex-col items-center h-60 w-60">
          <Spline scene="https://prod.spline.design/Ipnnmy0yCG9emlUm/scene.splinecode" />
        </div>
      </div>
      <div className="flex items-center">
        <Image
          className={style.Image}
          src={ImagenMia}
          alt="Mi Foto"
          width={1200}
          height={1200}
        />
        <div>
          <p className="text-[#402158] dark:text-[#E2E9FF] text-2xl mb-5 text-center">
            Soy Desarrolador web Full Stack con horientacion en Frontend,
            utilizando tecnologias como React, Next.js, JavaScript, TypeScript,
            CSS, Tailwind, Bootstrap, y más. Ademas soy Testing QA Manual. Me
            encanta desarrollar soluciones creativas, eficientes y visualmente
            atractivas, y siempre estoy en busca de nuevas tecnologías y
            herramientas para seguir aprendiendo y mejorando.
          </p>

          <p className="text-[#402158] dark:text-[#E2E9FF] text-2xl text-center">
            Ademas soy un Profesor de Educación Física con más de una década de
            experiencia en el ámbito educativo y deportivo. Mi trayectoria
            incluye roles en instituciones educativas públicas y privadas, así
            como en clubes deportivos, donde me he desempeñado en funciones
            tanto de profesor como de coordinador deportivo.
          </p>
        </div>
      </div>

      <Link
        href="https://docs.google.com/document/d/1NzKnW68FvUZbR2X27A05MP1xOlZ8643fgz_gEpaQzsI/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-20 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]  ">
          Curriculum CV
        </button>
      </Link>
    </div>
  );
}

export default IndexInicio;
