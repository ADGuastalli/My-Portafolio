import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
function IndexInicio() {
  return (
    <div id="inicio" className="mb-96 mt-20">
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-6xl font-bold text-center text-white hover:text-violet-700 hover:shadow-md hover:translate-x-1 transition duration-300">
          Gracias por acercarte
        </h1>
        <Spline scene="https://prod.spline.design/Ipnnmy0yCG9emlUm/scene.splinecode" />
        <h2 className="text-4xl font-bold text-center text-white hover:text-violet-700 hover:shadow-md hover:translate-x-1 transition duration-300">
          ¡ Hola, soy Alexis Dante Guastalli !
        </h2>
        <h3 className="text-white text-2xl m-2">
          Desarrollador Full Stack | Front-end
        </h3>
      </div>
      <div className="flex items-center m-5">
        <Image
          className="rounded-full "
          src="/Sintítulo.png"
          alt="Flowbite Logo"
          width={800}
          height={800}
        />
        <div>
          <p className="text-white text-2xl p-10 text-center">
            Soy Desarrolador web Full Stack con horientacion en Frontend,
            utilizando tecnologias como React, Next.js, JavaScript, TypeScript,
            CSS, SCSS, Tailwind, Bootstrap, y más. Ademas soy Testing QA Manual.
            Me encanta desarrollar soluciones creativas, eficientes y
            visualmente atractivas, y siempre estoy en busca de nuevas
            tecnologías y herramientas para seguir aprendiendo y mejorando.
          </p>

          <p className="text-white text-2xl p-10 text-center">
            Ademas soy un Profesor de Educación Física con más de una década de
            experiencia en el ámbito educativo y deportivo. Mi trayectoria
            incluye roles en instituciones educativas públicas y privadas, así
            como en clubes deportivos, donde me he desempeñado en funciones
            tanto de profesor como de coordinador deportivo.
          </p>
        </div>
      </div>
      <Link href="https://docs.google.com/document/d/1NzKnW68FvUZbR2X27A05MP1xOlZ8643fgz_gEpaQzsI/edit?usp=sharing">
        <button className="btn btn-primary bg-violet-700 border-none text-3xl">
          Curriculum CV
        </button>
      </Link>
    </div>
  );
}

export default IndexInicio;
