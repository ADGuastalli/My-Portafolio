import React from "react";
import IndexInicio from "@/components/inicio/indexInicio";
import styles from "./style/style.module.css";
import Card from "@/components/cardProyecto/indexCard";
import { MisTec } from "@/components/MisTec";
import { IndexContacto } from "@/components/Contacto";
import { IndexEstudios } from "@/components/estudios/indexEstudios";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div id="inicio" className={styles.Home}>
        <IndexInicio />
      </div>
      <div
        id="proyectos"
        className="mt-10 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-40 w-full"
      >
        <Card />
      </div>
      <div
        id="estudios"
        className="mt-10 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-40 w-full"
      >
        <IndexEstudios />
      </div>
      <div
        id="tecnologias"
        className="mt-10 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-40 w-full"
      >
        <MisTec />
      </div>
      <div
        id="contacto"
        className="mt-10 bg-gradient-to-t from-transparent to-[#ecf1ff] dark:to-[#2b2358] px-40 w-full"
      >
        <IndexContacto />
      </div>
    </div>
  );
}
