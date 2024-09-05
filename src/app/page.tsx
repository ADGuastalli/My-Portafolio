import React from "react";
import IndexInicio from "@/components/inicio/indexInicio";
import Card from "@/components/cardProyecto/indexCard";
import { MisTec } from "@/components/MisTec";
import { IndexContacto } from "@/components/Contacto";
import { IndexEstudios } from "@/components/estudios/indexEstudios";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center">
      <div
        id="inicio"
        className="text-shadow-sm uppercase text-center tracking-wider pt-5 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-5 sm:px-40 sm:w-full"
      >
        <IndexInicio />
      </div>
      <div
        id="proyectos"
        className="mt-20 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-5 sm:px-40 sm:w-full"
      >
        <Card />
      </div>
      <div
        id="estudios"
        className="mt-20 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-5 sm:px-40 sm:w-full"
      >
        <IndexEstudios />
      </div>
      <div
        id="tecnologias"
        className="mt-20 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-5 sm:px-40 sm:w-full"
      >
        <MisTec />
      </div>
      <div
        id="contacto"
        className="mt-20 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-5 sm:px-40 sm:w-full"
      >
        <IndexContacto />
      </div>
    </div>
  );
}
