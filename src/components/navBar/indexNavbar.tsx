"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImgSol from "../../../public/svg/sun-svgrepo-com.svg";
import ImgLun from "../../../public/svg/moon-svgrepo-com.svg";
import Link from "next/link";

function IndexNavbar() {
  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 h-full w-64 bg-[#C9BFB5] border-r border-[#7D5683] dark:bg-[#402158] z-50">
        <div className="flex flex-col h-full justify-between p-4">
          <div>
            <a
              href="https://www.linkedin.com/in/alexis-guastalli/"
              className="flex items-center space-x-3 rtl:space-x-reverse mb-6"
            >
              <div className="relative object-contain w-10 h-10 mr-2">
                <Image
                  src="/svg/iconCode.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="text-[#402158] font-bold self-center text-2xl whitespace-nowrap transition-transform duration-300 hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF]">
                Mi Portafolio
              </span>
            </a>
            <ul className="font-medium flex flex-col items-start space-y-4">
              <li>
                <a
                  href="#inicio"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700  dark:text-[#E2E9FF]  dark:hover:bg-gray-700 dark:hover:text-white"
                  aria-current="page"
                >
                  Sobre Mi
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700  dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Mis Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#estudios"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700  dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Mis Estudios
                </a>
              </li>
              <li>
                <a
                  href="#tecnologias"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700  dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Mis Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700  dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Mis Contacto
                </a>
              </li>
            </ul>
            <Link
              href="https://docs.google.com/document/d/1NzKnW68FvUZbR2X27A05MP1xOlZ8643fgz_gEpaQzsI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-10 text-xl relative z-[2] rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5]  px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]  ">
                Curriculum CV
              </button>
            </Link>
          </div>
          <div>
            <a onClick={handleChangeTheme} className="cursor-pointer">
              <Image
                src={theme === "light" ? ImgLun : ImgSol}
                alt="..."
                width={50}
                height={50}
                className="object-cover"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default IndexNavbar;
