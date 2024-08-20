import ImgExpress from "../../../public/svg/tec/express-svgrepo-com.svg";
import ImgType from "../../../public/svg/tec/typescript-svgrepo-com.svg";
import ImgJavascript from "../../../public/svg/tec/javascript-155-svgrepo-com.svg";
import ImgNext from "../../../public/svg/tec/nextjs-fill-svgrepo-com.svg";
import ImgNode from "../../../public/svg/tec/node-js-svgrepo-com.svg";
import ImgReact from "../../../public/svg/tec/react-svgrepo-com.svg";
import ImgRedux from "../../../public/svg/tec/redux-svgrepo-com.svg";
import ImgTailwind from "../../../public/svg/tec/tailwind-svgrepo-com.svg";
import ImgPosgres from "../../../public/svg/tec/postgresql-svgrepo-com.svg";
import ImgHtml from "../../../public/svg/tec/html5-01-svgrepo-com.svg";
import ImgCss from "../../../public/svg/tec/css3-svgrepo-com.svg";

import Image from "next/image";

export function MisTec() {
  return (
    <div id="tecnologias" className="mt-20 mb-48">
      <h1 className="text-6xl font-bold text-center text-white hover:text-violet-700 hover:shadow-md hover:translate-x-1 transition duration-300">
        Mis Tecnologias
      </h1>
      <div className="grid grid-cols-5 gap-10 mt-5">
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgHtml} alt="Html" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgCss} alt="Css" width={200} height={200} />
        </div>

        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgType} alt="TypeScript" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image
            src={ImgJavascript}
            alt="JavaScript"
            width={200}
            height={200}
          />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgNext} alt="Next" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgNode} alt="Node" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgReact} alt="React" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgRedux} alt="Redux" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgTailwind} alt="Tailwind" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgExpress} alt="Express" width={200} height={200} />
        </div>
        <div className="relative bg-white/80 rounded-3xl p-3 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-2xl hover:scale-105">
          <Image src={ImgPosgres} alt="Posgres" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
