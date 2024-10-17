"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImgSol from "../../../public/svg/sun-svgrepo-com.svg";
import ImgLun from "../../../public/svg/moon-svgrepo-com.svg";
import Link from "next/link";
import IndexChat from "../chatBot/indexChat";

const NavButton: React.FC<{
  onClick: () => void;
  icon: any;
  alt: string;
}> = ({ onClick, icon, alt }) => (
  <button onClick={onClick} className="cursor-pointer">
    <Image
      src={icon}
      alt={alt}
      width={50}
      height={50}
      className="object-cover"
    />
  </button>
);

const MenuItem: React.FC<{
  href: string;
  text: string;
  isActive?: boolean;
}> = ({ href, text, isActive }) => (
  <li>
    <a
      href={href}
      className={`block py-2 px-3 text-xl font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white ${
        isActive ? "text-violet-700" : "text-[#402158]"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {text}
    </a>
  </li>
);

export function IndexNavbar() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document
      .querySelector("html")
      ?.classList.toggle("dark", storedTheme === "dark");
  }, []);

  useEffect(() => {
    document.querySelector("html")?.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div>
      <nav className="relative md:fixed top-0 left-0 w-full h-full md:w-64 bg-[#C9BFB5] border-r border-[#7D5683] dark:bg-[#402158] z-50">
        {/* Navbar visible on small screens */}
        <div className="flex justify-between items-center p-4 md:hidden">
          <span className="text-[#402158] font-bold text-2xl dark:text-[#E2E9FF]">
            Mi Portafolio
          </span>
          <button onClick={toggleMenu} className="cursor-pointer">
            <svg
              className="w-6 h-6 text-[#402158] dark:text-[#E2E9FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu for larger screens or when menu is open */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block flex flex-col h-full justify-between p-4`}
        >
          <div>
            <a
              href="https://www.linkedin.com/in/alexis-guastalli/"
              className="flex items-center space-x-3 rtl:space-x-reverse mb-6"
            >
              <div className="relative object-contain w-10 h-10 mr-2">
                <Image
                  src="/svg/iconCode.svg"
                  alt="Logo"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="text-[#402158] font-bold text-2xl whitespace-nowrap transition-transform duration-300 hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF]">
                Mi Portafolio
              </span>
            </a>
            <ul className="font-medium flex flex-col items-start space-y-4">
              <MenuItem href="#inicio" text="Sobre Mi" isActive={false} />
              <MenuItem
                href="#proyectos"
                text="Mis Proyectos"
                isActive={false}
              />
              <MenuItem href="#estudios" text="Mis Estudios" isActive={false} />
              <MenuItem
                href="#tecnologias"
                text="Mis Habilidades"
                isActive={false}
              />
              <MenuItem href="#contacto" text="Mis Contacto" isActive={false} />
            </ul>
            <Link
              href="https://drive.google.com/file/d/1XukW7OvWA6KqzbZ9X0wXHT2kzfnffvE6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-10 text-xl rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5] px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]">
                Curriculum CV
              </button>
            </Link>
          </div>
          <div className="relative mt-5 md:absolute md:bottom-4 md:left-4">
            <NavButton
              onClick={handleChangeTheme}
              icon={theme === "light" ? ImgLun : ImgSol}
              alt="Change Theme"
            />
          </div>
        </div>
      </nav>

      {/* Always visible Chatbot */}
      <div className="fixed bottom-0 left-0 mb-4 ml-4 z-50">
        <IndexChat />
      </div>
    </div>
  );
}

export default IndexNavbar;
