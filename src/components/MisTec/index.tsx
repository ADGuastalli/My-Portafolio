import ImgExpress from "../../../public/svg/tec/express-svgrepo-com.svg";
import ImgType from "../../../public/svg/tec/typescript-svgrepo-com.svg";
import ImgJavascript from "../../../public/svg/tec/javascript-155-svgrepo-com.svg";
import ImgNext from "../../../public/svg/tec/nextjs-fill-svgrepo-com.svg";
import ImgNode from "../../../public/svg/tec/node-js-svgrepo-com.svg";
import ImgReact from "../../../public/svg/tec/react-svgrepo-com.svg";
import ImgTailwind from "../../../public/svg/tec/tailwind-svgrepo-com.svg";
import ImgPosgres from "../../../public/svg/tec/postgresql-svgrepo-com.svg";
import ImgHtml from "../../../public/svg/tec/html5-01-svgrepo-com.svg";
import ImgCss from "../../../public/svg/tec/css3-svgrepo-com.svg";
import ImgPyt from "../../../public/svg/tec/python-svgrepo-com.svg";

import Image from "next/image";

export function MisTec() {
  return (
    <div id="tecnologias" className="mb-96 mt-5">
      <h1 className="text-6xl font-bold text-center text-[#402158] dark:text-[#E2E9FF]  hover:translate-x-1 transition duration-300 md:text-5xl lg:text-6xl xl:text-7xl">
        Mis Habilidades
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-5">
        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgHtml}
            alt="Html"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            HTML
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgCss}
            alt="CSS"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            CSS
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgType}
            alt="TypeScript"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            TypeScript
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgJavascript}
            alt="JavaScript"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            JavaScript
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgNext}
            alt="Next"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            Next.js
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgNode}
            alt="Node"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            Node.js
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgReact}
            alt="React"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            React
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgTailwind}
            alt="Tailwind"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            Tailwind CSS
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgExpress}
            alt="Express"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            Express
          </p>
        </div>

        <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
          <Image
            src={ImgPosgres}
            alt="Postgres"
            width={200}
            height={200}
            className="transition-opacity duration-300"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
            PostgreSQL
          </p>
        </div>
      </div>
      <h2 className="font-bold text-[#402158] dark:text-[#E2E9FF]  hover:translate-x-1 transition duration-300 md:text-2xl lg:text-3xl xl:text-4xl mt-20">
        Aprendiendo ...
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-10 mt-5">
          {/* React Native */}
          <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
            <Image
              src={ImgReact}
              alt="React"
              width={200}
              height={200}
              className="transition-opacity duration-300"
            />
            <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
              React Native
            </p>
          </div>

          {/* Python */}
          <div className="relative bg-[#e2ddd8] dark:bg-[#d9c5ff] rounded-3xl p-3 transition-shadow duration-300 hover:shadow-[#4a487d] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl group">
            <Image
              src={ImgPyt}
              alt="Python"
              width={200}
              height={200}
              className="transition-opacity duration-300"
            />
            <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-[#402158] dark:text-[#E2E9FF] text-3xl text-center font-bold">
              Python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
