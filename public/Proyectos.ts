export interface IProyectos {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

export const Proyectos: IProyectos[] = [
  {
    id: 1,
    title: "Apple Zone",
    description:
      "Apple Zone es un innovador proyecto de e-commerce diseñado para ofrecer una experiencia de compra en línea fluida y segura. En Apple Zone, los usuarios pueden registrarse, iniciar sesión, adquirir productos y consultar su historial de compras. Este proyecto incorpora tecnologías como React, para construir una interfaz de usuario dinámica y responsiva; Next.js, para el renderizado del lado del servidor y una mejor optimización del rendimiento; Tailwind CSS, para diseñar una interfaz atractiva y moderna; Flowbite, para utilizar componentes predefinidos que mejoran la consistencia del diseño; TypeScript, para asegurar un código más robusto y menos propenso a errores; SQL, para la gestión y almacenamiento eficiente de datos; y Express, para construir una API robusta y escalable. Apple Zone se centra en proporcionar una experiencia de usuario excepcional, combinando facilidad de uso, seguridad y eficiencia.",
    img: "/Proyectos/m4.png",
    link: "https://github.com/ADGuastalli",
  },
  {
    id: 2,
    title: "Full Stack GYM",
    description:
      "Full Stack Gym es una aplicación diseñada para gestionar la inscripción de usuarios y la solicitud de turnos en un gimnasio. Utilizando una combinación de tecnologías avanzadas, Full Stack Gym ofrece una experiencia de usuario eficiente y fácil de usar. La aplicación permite a los usuarios registrarse y gestionar sus turnos de manera sencilla y rápida. Este proyecto incorpora tecnologías como React, para la construcción de una interfaz de usuario dinámica; TypeScript, para asegurar un código más robusto y menos propenso a errores; SQL, para la gestión y almacenamiento eficiente de datos; Express, para construir una API robusta y escalable; y CSS, para diseñar una interfaz atractiva y moderna.",
    img: "/Proyectos/m3.png",
    link: "https://github.com/ADGuastalli",
  },
];
