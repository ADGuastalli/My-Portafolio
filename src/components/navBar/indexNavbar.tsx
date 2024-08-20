import React from "react";
import Image from "next/image";

function IndexNavbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white/15 border-b border-gray-200 dark:bg-gray-900 z-50">
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
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap transition-transform duration-300 hover:scale-110 hover:text-violet-700 dark:text-white">
              My Portafolio
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-trasparent">
              <li>
                <a
                  href="#inicio"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#tecnologias"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contacto
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
