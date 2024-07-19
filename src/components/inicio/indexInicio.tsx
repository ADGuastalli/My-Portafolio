import React from "react";
import Image from "next/image";

function IndexInicio() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-white text-5xl font-bold m-5">
          Gracias por acercarte
        </h1>

        <h2 className="text-white text-3xl m-5">
          ¡ Hola, soy Alexis Dante Guastalli !
        </h2>
        <h3 className="text-white text-2xl m-2">
          Desarrollador Full Stack | Front-end
        </h3>
      </div>
      <div className="flex items-center m-5">
        <Image
          className="rounded-full"
          src="/Sintítulo.png"
          alt="Flowbite Logo"
          width={400}
          height={400}
        />
        <p className="text-white text-2xl p-10 text-center">
          ¡Bienvenido a mi rincón digital! Soy un apasionado de la tecnología y
          la creación de experiencias web excepcionales. Mi enfoque principal
          está en el desarrollo front-end, donde combino mi amor por el diseño
          con mi habilidad para escribir código limpio y eficiente.
        </p>
      </div>
    </div>
  );
}

export default IndexInicio;
