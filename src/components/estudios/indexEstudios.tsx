import Link from "next/link";

interface CollapseItemProps {
  id: string;
  title: string;
  content: string;
  link: string;
  linkText: string;
}

const collapseItems: CollapseItemProps[] = [
  {
    id: "item-1",
    title: "Desarrollo Web Full Stack",
    content: `Ser Full Stack significa tener un perfil híbrido en el ámbito del
      desarrollo web y trabajar tanto en el front-end (parte visual)
      como en el back-end (parte lógica) de un proyecto.`,
    link: "https://www.soyhenry.com/webfullstack",
    linkText: "Henry - Agosto 2024",
  },
  {
    id: "item-2",
    title: "Testing QA Manual",
    content: `Durante este emocionante viaje, tuve la oportunidad de sumergirme
      en el mundo de las pruebas de calidad y aseguramiento de software.
      Desde desarrollar ciclos de pruebas hasta buscar y reportar
      errores, cada paso fue un desafío gratificante. Ejecutamos pruebas
      de estrés en aplicaciones web y móviles, evaluando su rendimiento,
      funcionalidad y SEO. Además, exploramos los diversos estados de
      los códigos de respuesta HTTP.`,
    link: "https://www.coderhouse.com/ar/online/testing-qa-manual",
    linkText: "CorderHouse - Julio 2024",
  },
  {
    id: "item-3",
    title: "Profesor de Educación Física",
    content: `Además de estar inmerso en el mundo de la tecnología, previamente
      obtuve mi título como Profesor de Educación Física. Durante más de
      10 años, ejercí esta profesión en diversos niveles educativos.`,
    link: "https://isfd86-bue.infd.edu.ar/sitio/",
    linkText: "I.S.F.D. n°86 - Mayo 2018",
  },
  {
    id: "item-4",
    title: "Técnico en Informática",
    content: `Me gradué de la Escuela Secundaria Técnica con orientación en
      Informática.`,
    link: "",
    linkText: "E.E.T n°3 - Diciembre 2008",
  },
];

function CollapseItem({
  id,
  title,
  content,
  link,
  linkText,
}: CollapseItemProps) {
  return (
    <div className="collapse collapse-plus bg-[#c9bfb5] dark:bg-[#402158] mb-5">
      <input type="radio" name="my-accordion-3" id={id} />
      <label
        htmlFor={id}
        className="collapse-title text-xl font-medium text-[#402158] dark:text-[#E2E9FF]"
      >
        {title}
      </label>
      <div className="collapse-content">
        <p className="text-[#402158] dark:text-[#E2E9FF]">{content}</p>
        {link && (
          <Link href={link}>
            <p className="font-bold mt-2 text-[#402158] dark:text-[#E2E9FF]">
              {linkText}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

export function IndexEstudios() {
  return (
    <div className="mb-96 mt-5">
      <div>
        <h1 className="text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF] hover:translate-x-1 transition duration-300 md:text-5xl lg:text-6xl xl:text-7xl">
          Mis Estudios
        </h1>
      </div>
      <div>
        {collapseItems.map((item) => (
          <CollapseItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            link={item.link}
            linkText={item.linkText}
          />
        ))}
      </div>
    </div>
  );
}
