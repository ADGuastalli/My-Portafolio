"use client";
import { useState } from "react";
import Image from "next/image";
import ImagenM4 from "../../../public/Proyectos/m4.png";
import ImagenM3 from "../../../public/Proyectos/m3.png";
import ImagenMF from "../../../public/Proyectos/mFa.png";
import { Carousel } from "flowbite-react";
import ImgGit from "../../../public/svg/tec/github-142-svgrepo-com.svg";
import ImgDepl from "../../../public/svg/tec/deploy-svgrepo-com.svg";
import Link from "next/link";

function Card() {
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div id="proyectos" className="mb-96 mt-20">
      <h1 className="text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] da hover:translate-x-1 transition duration-300">
        Mis Proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-10">
        {/* FitHub Card */}
        <div className="card lg:card-side shadow-xl bg-[#c9bfb5] dark:bg-[#402158] w-full h-auto hover:shadow-[#100E36] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl">
          <figure>
            <Image
              src={ImagenMF}
              alt="Album"
              width={900}
              height={200}
              priority
              className="w-full h-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#402158] dark:text-[#E2E9FF]">
              FitHub
            </h2>
            <p className="text-sm text-[#402158] dark:text-[#E2E9FF]">
              Explora un poquito más sobre mi Proyecto
            </p>
            <div className="card-actions justify-end">
              <button
                className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
                onClick={() => openModal("fithub")}
              >
                Ver Más
              </button>
            </div>
          </div>
        </div>

        {/* Apple Zone Card */}
        <div className="card lg:card-side shadow-xl bg-[#c9bfb5] dark:bg-[#402158] w-full h-auto hover:shadow-[#100E36] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl">
          <figure>
            <Image
              src={ImagenM4}
              alt="Album"
              width={900}
              height={300}
              priority
              className="w-full h-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#402158] dark:text-[#E2E9FF] ">
              Apple Zone
            </h2>
            <p className="text-sm text-[#402158] dark:text-[#E2E9FF]">
              Explora un poquito más sobre mi Proyecto
            </p>
            <div className="card-actions justify-end">
              <button
                className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
                onClick={() => openModal("applezone")}
              >
                Ver Más
              </button>
            </div>
          </div>
        </div>

        {/* Full Stack Gym Card */}
        <div className="card lg:card-side shadow-xl bg-[#c9bfb5] dark:bg-[#402158] w-full h-auto hover:shadow-[#100E36] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl">
          <figure>
            <Image
              src={ImagenM3}
              alt="Album"
              width={900}
              height={300}
              priority
              className="w-full h-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-[#402158] dark:text-[#E2E9FF]">
              Full Stack Gym
            </h2>
            <p className="text-sm text-[#402158] dark:text-[#E2E9FF]">
              Explora un poquito más sobre mi Proyecto
            </p>
            <div className="card-actions justify-end">
              <button
                className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
                onClick={() => openModal("fullstackgym")}
              >
                Ver Más
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal FitHub */}
      {openModalId === "fithub" && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleOutsideClick}
        >
          <div
            className="daisy-modal-box bg-[#c9bfb5]/90 dark:bg-[#402158]/90 p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold text-center text-[#402158] dark:text-[#c9bfb5] mb-5">
              FitHub
            </h3>
            <div className="flex flex-col items-center w-full h-auto">
              <Carousel className="opacity-90 w-full h-[30rem]">
                <Image
                  src="/Proyectos/mFa.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/mFb.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/mFc.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/mFd.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/mFe.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </Carousel>
            </div>
            <p className="py-4 text-[#402158] dark:text-[#c9bfb5] text-center text-lg mb-5">
              FitHub es una plataforma integral diseñada para fomentar un estilo
              de vida activo y saludable. A través de una combinación de
              funcionalidades y recursos, FitHub ofrece una experiencia completa
              para los entusiastas del fitness y aquellos que buscan mejorar su
              bienestar. FitHub se construyó utilizando tecnologías avanzadas,
              como React, Next.js, Tailwind CSS, MercadoPago, Auth0, NodeMailer
              y TypeScript. Esto garantiza una experiencia de usuario fluida y
              segura.
            </p>
            <div className="flex flex-row justify-evenly">
              <Link href="https://github.com/ADGuastalli/FitHub-FinalHenry">
                <Image
                  src={ImgGit}
                  alt="..."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </Link>
              <Link href="https://fit-hub-front-end.vercel.app/">
                <Image
                  src={ImgDepl}
                  alt="..."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="daisy-modal-action flex flex-row-reverse ">
              <button
                className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {openModalId === "applezone" && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleOutsideClick}
        >
          <div
            className="daisy-modal-box bg-[#c9bfb5]/90 dark:bg-[#402158]/90 p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-5xl font-bold text-center text-[#402158] dark:text-[#c9bfb5] mb-5">
              Apple Zone
            </h3>
            <div className="flex flex-col items-center w-full h-auto">
              <Carousel className="opacity-90 w-full h-[30rem]">
                <Image
                  src="/Proyectos/m4.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m4b.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m4c.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m4d.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m4e.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </Carousel>
            </div>
            <p className="py-4 text-[#402158] dark:text-[#c9bfb5] text-center text-xl mb-5">
              Proyecto oriendo al desarrollo Front-End. Con herramientas y
              tecnicas que permitieron contruir una pagina web moderna, con gran
              rendimiento y eficiencia. La aplicación es un e-commerce con la
              capacidad de seleccionar productos de forma dinámica. Las
              principales tecnologias que se utilizaron son: NextJs, Deployment,
              SEO, UX/UI, React, TypeScript y Tailwind CSS
            </p>
            <div className="flex flex-row justify-evenly">
              <Link href="https://github.com/ADGuastalli/M4-E-Commerss">
                <Image
                  src={ImgGit}
                  alt="..."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </Link>
              <Link href="https://applezone.vercel.app/">
                <Image
                  src={ImgDepl}
                  alt="..."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="daisy-modal-action flex flex-row-reverse ">
              <button
                className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {openModalId === "fullstackgym" && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleOutsideClick}
        >
          <div
            className="daisy-modal-box bg-[#c9bfb5]/90 dark:bg-[#402158]/90 p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-5xl font-bold text-center text-[#402158] dark:text-[#c9bfb5] mb-5">
              Full Stack Gym
            </h3>
            <div className="flex flex-col items-center w-full h-auto">
              <Carousel className="opacity-90 w-full h-[30rem]">
                <Image
                  src="/Proyectos/m3a.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m3b.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m3c.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m3d.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/Proyectos/m3e.png"
                  alt="..."
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </Carousel>
            </div>
            <p className="py-4 text-[#402158] dark:text-[#c9bfb5] text-center text-xl mb-5">
              En este proyecto he realizado una Single Page Aplication (SPA)
              para un registro de turnos de un gimnasio con fechas y horarios.
              Ademas de desarrollar el servidor HTTP para gestionar los turnos
              en la base de datos. Las principales tecnologías utilizadas son
              React, TypeScript, TypeORM y SQL.
            </p>
            <div className="flex flex-row justify-evenly">
              <Link href="https://github.com/ADGuastalli/M3-AppTurns">
                <Image
                  src={ImgGit}
                  alt="..."
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </Link>
              <Image
                src={ImgDepl}
                alt="..."
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="daisy-modal-action flex flex-row-reverse ">
              <button
                className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
