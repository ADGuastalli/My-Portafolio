"use client";
import React from "react";
import ChatBot from "react-simple-chatbot";

export default function IndexChat() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ChatBot
        steps={[
          {
            id: "1",
            message:
              "Hola, como andas ? Gracias por pasar por mi Portafolio 🤗",
            trigger: "2",
          },
          {
            id: "2",
            message: "En que te puedo ayudarte?",
            trigger: "3",
          },
          {
            id: "8",
            message: "Deseas ver algo mas?",
            trigger: "9",
          },
          {
            id: "3",
            options: [
              { value: 1, label: "Ver Mis Proyectos", trigger: "4" },
              { value: 2, label: "Ver Mis Estudios", trigger: "5" },
              { value: 3, label: "Ver Mis Habilidades", trigger: "6" },
              { value: 4, label: "Ver Mis Contacto", trigger: "7" },
              { value: 5, label: "Ver mi CV", trigger: "11" },
            ],
          },
          {
            id: "9",
            options: [
              { value: 5, label: "Si, por favor.", trigger: "3" },
              { value: 6, label: "No, gracias", trigger: "10" },
            ],
          },
          {
            id: "4",
            component: (
              <div>
                <button
                  onClick={() => handleScrollToSection("proyectos")}
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Ir a Mis Proyectos
                </button>
              </div>
            ),
            trigger: "8",
          },
          {
            id: "5",
            component: (
              <div>
                <button
                  onClick={() => handleScrollToSection("estudios")}
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Ir a Mis Estudios
                </button>
              </div>
            ),
            trigger: "8",
          },
          {
            id: "6",
            component: (
              <div>
                <button
                  onClick={() => handleScrollToSection("tecnologias")}
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Ir a Mis Habilidades
                </button>
              </div>
            ),
            trigger: "8",
          },
          {
            id: "7",
            component: (
              <div>
                <button
                  onClick={() => handleScrollToSection("contacto")}
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Ir a Mis Contactos
                </button>
              </div>
            ),
            trigger: "8",
          },
          {
            id: "11",
            component: (
              <div>
                <a
                  href="https://drive.google.com/file/d/1psLuBKFZOg5QxF_H1ogPlW2WBV6SHskF/view?usp=sharing"
                  className="block py-2 px-3 text-xl text-[#402158] font-bold rounded transition-transform duration-300 transform hover:scale-110 hover:text-violet-700 dark:text-[#E2E9FF] dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Ver mi CV
                </a>
              </div>
            ),
            trigger: "8",
          },
          {
            id: "10",
            message: "Hasta la proxima 👋",
            end: true,
          },
        ]}
        floating={true}
      />
    </>
  );
}
