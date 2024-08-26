import Link from "next/link";

export function IndexEstudios() {
  return (
    <div className="mb-96 mt-5">
      <div>
        <h1 className="text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300 md:text-5xl lg:text-6xl xl:text-7xl">
          Mis Estudios
        </h1>
      </div>
      <div>
        <div className="collapse collapse-plus my-5 bg-[#c9bfb5] dark:bg-[#402158]">
          <input
            type="radio"
            name="my-accordion-3"
            id="item-1"
            defaultChecked
          />
          <label
            htmlFor="item-1"
            className="collapse-title text-xl font-medium text-[#402158] dark:text-[#E2E9FF]"
          >
            Desarrollo Web Full Stack
          </label>
          <div className="collapse-content">
            <p className="text-[#402158] dark:text-[#E2E9FF]">
              Ser Full Stack significa tener un perfil híbrido en el ámbito del
              desarrollo web y trabajar tanto en el front-end (parte visual)
              como en el back-end (parte lógica) de un proyecto.
            </p>
            <Link href="https://www.soyhenry.com/webfullstack">
              <p className=" font-bold mt-2 text-[#402158] dark:text-[#E2E9FF]">
                Henry - Agosto 2024
              </p>
            </Link>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#c9bfb5] dark:bg-[#402158] mb-5">
          <input type="radio" name="my-accordion-3" id="item-2" />
          <label
            htmlFor="item-2"
            className="collapse-title text-xl font-medium text-[#402158] dark:text-[#E2E9FF]"
          >
            Testing QA Manual
          </label>
          <div className="collapse-content">
            <p className="text-[#402158] dark:text-[#E2E9FF]">
              Durante este emocionante viaje, tuve la oportunidad de sumergirme
              en el mundo de las pruebas de calidad y aseguramiento de software.
              Desde desarrollar ciclos de pruebas hasta buscar y reportar
              errores, cada paso fue un desafío gratificante. Ejecutamos pruebas
              de estrés en aplicaciones web y móviles, evaluando su rendimiento,
              funcionalidad y SEO. Además, exploramos los diversos estados de
              los códigos de respuesta HTTP.
            </p>
            <Link href="https://www.coderhouse.com/ar/online/testing-qa-manual">
              <p className=" font-bold mt-2 text-[#402158] dark:text-[#E2E9FF]">
                CorderHouse - Julio 2024
              </p>
            </Link>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#c9bfb5] dark:bg-[#402158] mb-5">
          <input type="radio" name="my-accordion-3" id="item-3" />
          <label
            htmlFor="item-3"
            className="collapse-title text-xl font-medium text-[#402158] dark:text-[#E2E9FF]"
          >
            Profesor de Educación Física
          </label>
          <div className="collapse-content">
            <p className="text-[#402158] dark:text-[#E2E9FF]">
              Ademas de encontrarme en el mundo IT, previamente me recibi de
              Además de estar inmerso en el mundo de la tecnología, previamente
              obtuve mi título como Profesor de Educación Física. Durante más de
              10 años, ejercí esta profesión en diversos niveles educativos.
            </p>
            <Link href="https://isfd86-bue.infd.edu.ar/sitio/">
              <p className=" font-bold mt-2 text-[#402158] dark:text-[#E2E9FF]">
                I.S.F.D. n°86 - Mayo 2018
              </p>
            </Link>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#c9bfb5] dark:bg-[#402158]">
          <input type="radio" name="my-accordion-3" id="item-4" />
          <label
            htmlFor="item-4"
            className="collapse-title text-xl font-medium text-[#402158] dark:text-[#E2E9FF]"
          >
            Tecnico en Informatica
          </label>
          <div className="collapse-content">
            <p className="text-[#402158] dark:text-[#E2E9FF]">
              Me gradué de la Escuela Secundaria Técnica con orientación en
              Informática.
            </p>

            <p className=" font-bold mt-2 text-[#402158] dark:text-[#E2E9FF]">
              E.E.T n°3 - Diciembre 2008
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
