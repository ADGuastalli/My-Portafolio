import React from "react";
import IndexInicio from "@/components/inicio/indexInicio";
import Card from "@/components/cardProyecto/indexCard";
import { MisTec } from "@/components/MisTec";
import { IndexContacto } from "@/components/Contacto";
import { IndexEstudios } from "@/components/estudios/indexEstudios";

const sectionStyle =
  "mt-20 px-5 sm:px-40 sm:w-full bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358]";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center">
      <div
        id="inicio"
        className="text-shadow-sm tracking-wider pt-5 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-5 sm:px-40 sm:w-full"
      >
        <IndexInicio />
      </div>
      <div id="proyectos" className={sectionStyle}>
        <Card />
      </div>
      <div id="estudios" className={sectionStyle}>
        <IndexEstudios />
      </div>
      <div id="tecnologias" className={sectionStyle}>
        <MisTec />
      </div>
      <div id="contacto" className={sectionStyle}>
        <IndexContacto />
      </div>
    </div>
  );
}
