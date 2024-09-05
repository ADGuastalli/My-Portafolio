import ContactMail from "./indexMail";
import { Redes } from "./redes";
import { IndexUbicacion } from "./ubicacion";

const sectionTitleClasses =
  "text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300 md:text-5xl lg:text-6xl xl:text-7xl";
const subTitleClasses =
  "text-3xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] my-10 md:text-2xl lg:text-3xl xl:text-4xl";
const cardWrapperClasses = "w-full sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4";
const borderClasses = "border-r-2 border-[#140e36] dark:border-[#E2e9ff]";

export function IndexContacto() {
  return (
    <div id="contacto" className="my-5">
      <h1 className={sectionTitleClasses}>Contacto</h1>
      <h2 className={subTitleClasses}>Hola, gracias por tu visita 😊</h2>
      <div className="flex flex-col sm:flex-row justify-center md:flex-wrap lg:flex-nowrap">
        <div className={`${cardWrapperClasses} ${borderClasses} pr-5`}>
          <ContactMail />
        </div>
        <div className={`${cardWrapperClasses} ${borderClasses} pl-5`}>
          <IndexUbicacion />
        </div>
        <div className={`${cardWrapperClasses} pl-5`}>
          <Redes />
        </div>
      </div>
    </div>
  );
}
