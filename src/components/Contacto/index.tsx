import ContactMail from "./indexMail";
import { IndexUbicacion } from "./ubicacion";

export function IndexContacto() {
  return (
    <div id="contacto" className="mt-20 ">
      <h1 className="text-6xl font-bold text-center text-white hover:text-violet-700 hover:shadow-md hover:translate-x-1 transition duration-300">
        Contacto
      </h1>
      <h2 className="text-3xl font-bold text-center text-white my-5">
        Hola, gracias por tu visita 😊
      </h2>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="border-r-2 pr-5 w-full sm:w-96">
          <ContactMail />
        </div>
        <div className="pl-5 w-full sm:w-96">
          <IndexUbicacion />
        </div>
      </div>
    </div>
  );
}
