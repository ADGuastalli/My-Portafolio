"use client";
import ImgExpress from "../../../public/svg/tec/express-svgrepo-com.svg";
import ImgType from "../../../public/svg/tec/typescript-svgrepo-com.svg";
import ImgJavascript from "../../../public/svg/tec/javascript-155-svgrepo-com.svg";
import ImgNext from "../../../public/svg/tec/nextjs-fill-svgrepo-com.svg";
import ImgNode from "../../../public/svg/tec/node-js-svgrepo-com.svg";
import ImgReact from "../../../public/svg/tec/react-svgrepo-com.svg";
import ImgTailwind from "../../../public/svg/tec/tailwind-svgrepo-com.svg";
import ImgPosgres from "../../../public/svg/tec/postgresql-svgrepo-com.svg";
import ImgHtml from "../../../public/svg/tec/html5-01-svgrepo-com.svg";
import ImgCss from "../../../public/svg/tec/css3-svgrepo-com.svg";
import ImgPyt from "../../../public/svg/tec/python-svgrepo-com.svg";
import ImgGit from "../../../public/svg/tec/github-142-svgrepo-com.svg";
import ImgAppSheet from "../../../public/svg/tec/appsheet.svg";
import { motion } from "framer-motion";
import Image from "next/image";

interface TechItemProps {
  img: any;
  alt: string;
  label: string;
}

const techItems: TechItemProps[] = [
  { img: ImgHtml, alt: "HTML", label: "HTML" },
  { img: ImgCss, alt: "CSS", label: "CSS" },
  { img: ImgType, alt: "TypeScript", label: "TypeScript" },
  { img: ImgJavascript, alt: "JavaScript", label: "JavaScript" },
  { img: ImgNext, alt: "Next.js", label: "Next.js" },
  { img: ImgNode, alt: "Node.js", label: "Node.js" },
  { img: ImgReact, alt: "React", label: "React" },
  { img: ImgTailwind, alt: "Tailwind CSS", label: "Tailwind CSS" },
  { img: ImgExpress, alt: "Express", label: "Express" },
  { img: ImgPosgres, alt: "PostgreSQL", label: "PostgreSQL" },
  { img: ImgGit, alt: "Github", label: "Github" },
  { img: ImgAppSheet, alt: "Appsheet", label: "Appsheet" },
];

const learningTech: TechItemProps[] = [
  { img: ImgReact, alt: "React Native", label: "React Native" },
  { img: ImgPyt, alt: "Python", label: "Python" },
];

function TechCard({ img, alt, label }: TechItemProps) {
  return (
    <motion.div
      className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={img}
        alt={alt}
        width={200}
        height={200}
        className="transition-opacity duration-300"
      />
      <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
        {label}
      </p>
    </motion.div>
  );
}

export function MisTec() {
  return (
    <div id="tecnologias" className="mb-96 mt-5">
      <h1 className="text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300 md:text-5xl lg:text-6xl xl:text-7xl">
        Mis Habilidades
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-5">
        {techItems.map((tech, index) => (
          <TechCard
            key={index}
            img={tech.img}
            alt={tech.alt}
            label={tech.label}
          />
        ))}
      </div>
      <h2 className="font-bold text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300 md:text-2xl lg:text-3xl xl:text-4xl mt-20">
        Aprendiendo ...
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-10 mt-5">
          {learningTech.map((tech, index) => (
            <TechCard
              key={index}
              img={tech.img}
              alt={tech.alt}
              label={tech.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
