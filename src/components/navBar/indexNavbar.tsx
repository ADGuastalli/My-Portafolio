"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImgSol from "../../../public/svg/sun-svgrepo-com.svg";
import ImgLun from "../../../public/svg/moon-svgrepo-com.svg";

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
      <nav className="fixed top-0 left-0 w-full bg-[#C9BFB5]/80 border-b  border-[#7D5683] dark:bg-[#402158]/80 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://www.linkedin.com/in/alexis-guastalli/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
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
              My Portafolio
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-trasparent">
              <li>
                <a
                  href="#inicio"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-[#E2E9FF] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-[#E2E9FF] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#tecnologias"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-[#E2E9FF] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-[#E2E9FF] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a onClick={handleChangeTheme} className="cursor-pointer">
                  <Image
                    src={theme === "light" ? ImgLun : ImgSol}
                    alt="..."
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default IndexNavbar;
