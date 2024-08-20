import React from "react";
import IndexInicio from "@/components/inicio/indexInicio";
import styles from "./style/style.module.css";
import Card from "@/components/cardProyecto/indexCard";
import { MisTec } from "@/components/MisTec";
import { IndexContacto } from "@/components/Contacto";

export default function Home() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
      <div id="inicio" className={styles.Home}>
        <IndexInicio />
      </div>
      <div id="proyectos">
        <Card />
      </div>
      <div id="tecnologias" className="mt-10">
        <MisTec />
      </div>
      <div id="contacto" className="mt-10">
        <IndexContacto />
      </div>
    </div>
  );
}
