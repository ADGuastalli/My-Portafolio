import React from "react";

function IndexNavbar() {
  return (
    <div>
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://www.linkedin.com/in/alexis-guastalli/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap transition-transform duration-300 hover:scale-110  hover:text-orange-700  dark:text-white">
              My Portafolio
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-orange-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/proyectos"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-orange-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="/habilidades"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-orange-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Habilidades
                </a>
              </li>

              <li>
                <a
                  href="/contacto"
                  className="block py-2 px-3 text-xl text-white rounded transition-transform duration-300 transform hover:scale-110 hover:text-orange-700 hover:shadow-2xl hover:shadow-white md:hover:bg-transparent md:border-0 md:hover:transition-colors md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
