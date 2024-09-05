"use client";
import { useState } from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ImgGit from "../../../public/svg/tec/github-142-svgrepo-com.svg";
import ImgDepl from "../../../public/svg/tec/deploy-svgrepo-com.svg";

interface ModalContent {
  title: string;
  images: string[];
  description: string;
  githubLink: string;
  liveLink?: string;
}

const modals: { [key: string]: ModalContent } = {
  fithub: {
    title: "FitHub",
    images: [
      "/Proyectos/mFa.png",
      "/Proyectos/mFb.png",
      "/Proyectos/mFc.png",
      "/Proyectos/mFd.png",
      "/Proyectos/mFe.png",
    ],
    description: `FitHub es una plataforma integral diseñada para fomentar un estilo
      de vida activo y saludable. A través de una combinación de
      funcionalidades y recursos, FitHub ofrece una experiencia completa
      para los entusiastas del fitness y aquellos que buscan mejorar su
      bienestar. FitHub se construyó utilizando tecnologías avanzadas,
      como React, Next.js, Tailwind CSS, MercadoPago, Google Maps,
      Auth0, NodeMailer y TypeScript. Esto garantiza una experiencia de
      usuario fluida y segura.`,
    githubLink: "https://github.com/ADGuastalli/FitHub-FinalHenry",
    liveLink: "https://fit-hub-front-end.vercel.app/",
  },
  applezone: {
    title: "Apple Zone",
    images: [
      "/Proyectos/m4.png",
      "/Proyectos/m4b.png",
      "/Proyectos/m4c.png",
      "/Proyectos/m4d.png",
      "/Proyectos/m4e.png",
    ],
    description: `Proyecto orientado al desarrollo Front-End. Con herramientas y
      técnicas que permitieron construir una página web moderna, con gran
      rendimiento y eficiencia. La aplicación es un e-commerce con la
      capacidad de seleccionar productos de forma dinámica. Las
      principales tecnologías que se utilizaron son: NextJs, Deployment,
      SEO, UX/UI, React, TypeScript y Tailwind CSS.`,
    githubLink: "https://github.com/ADGuastalli/M4-E-Commerss",
    liveLink: "https://applezone.vercel.app/",
  },
  fullstackgym: {
    title: "Full Stack Gym",
    images: [
      "/Proyectos/m3a.png",
      "/Proyectos/m3b.png",
      "/Proyectos/m3c.png",
      "/Proyectos/m3d.png",
      "/Proyectos/m3e.png",
    ],
    description: `En este proyecto he realizado una Single Page Application (SPA)
      para un registro de turnos de un gimnasio con fechas y horarios.
      Además de desarrollar el servidor HTTP para gestionar los turnos
      en la base de datos. Las principales tecnologías utilizadas son
      React, TypeScript, TypeORM y SQL.`,
    githubLink: "https://github.com/ADGuastalli/M3-AppTurns",
  },
};

function Modal({
  id,
  content,
  onClose,
}: {
  id: string;
  content: ModalContent;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      onClick={(e) => e.currentTarget === e.target && onClose()}
    >
      <div
        className="daisy-modal-box bg-[#c9bfb5]/90 dark:bg-[#402158]/90 p-4 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-full max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-5xl font-bold text-center text-[#402158] dark:text-[#c9bfb5] mb-5">
          {content.title}
        </h3>
        <div className="flex flex-col items-center w-full h-auto">
          <Carousel className="opacity-90 w-full h-[30rem]">
            {content.images.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Imagen ${idx}`}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            ))}
          </Carousel>
        </div>
        <p className="py-4 text-[#402158] dark:text-[#c9bfb5] text-center text-xl mb-5">
          {content.description}
        </p>
        <div className="flex flex-row justify-evenly">
          <Link href={content.githubLink}>
            <Image
              src={ImgGit}
              alt="GitHub"
              width={80}
              height={80}
              className="object-cover"
            />
          </Link>
          {content.liveLink && (
            <Link href={content.liveLink}>
              <Image
                src={ImgDepl}
                alt="Live"
                width={80}
                height={80}
                className="object-cover"
              />
            </Link>
          )}
        </div>
        <div className="daisy-modal-action flex flex-row-reverse">
          <button
            className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

function Card() {
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const openModal = (id: string) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.0 } },
  };

  return (
    <div id="proyectos" className="mb-96 mt-5">
      <h1 className="text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] da hover:translate-x-1 transition duration-300">
        Mis Proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-10">
        {Object.keys(modals).map((key) => (
          <motion.div
            key={key}
            className="card lg:card-side shadow-xl bg-[#c9bfb5] dark:bg-[#402158] w-full h-auto hover:shadow-[#100E36] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <figure>
              <Image
                src={modals[key].images[0]}
                alt={modals[key].title}
                width={900}
                height={300}
                priority
                className="w-full h-auto"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-[#402158] dark:text-[#E2E9FF]">
                {modals[key].title}
              </h2>
              <p className="text-sm text-[#402158] dark:text-[#E2E9FF]">
                Explora un poquito más sobre mi Proyecto
              </p>
              <div className="card-actions justify-end">
                <button
                  className="m-4 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5] px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
                  onClick={() => openModal(key)}
                >
                  Ver Más
                </button>
              </div>
            </div>
            {openModalId === key && (
              <Modal id={key} content={modals[key]} onClose={closeModal} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Card;
