import ImgLink from "../../../public/svg/tec/linkedin-svgrepo-com.svg";
import ImgGit from "../../../public/svg/tec/github-142-svgrepo-com.svg";
import Link from "next/link";
import Image from "next/image";
export function Redes() {
  return (
    <div>
      <h2 className="text-3xl font-bold m-10 text-center text-[#402158] dark:text-[#E2E9FF]">
        Queres contactarme en redes ?
      </h2>

      <div className="flex flex-row justify-evenly">
        <div className="relative bg-[#e2ddd8] dark:bg-[#b17fb8] rounded-3xl p-3 transition-transform duration-300 hover:shadow-[#100E36] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl hover:scale-105">
          <Link href="https://github.com/ADGuastalli">
            <Image
              src={ImgGit}
              alt="..."
              width={80}
              height={80}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="relative bg-[#e2ddd8] dark:bg-[#b17fb8] rounded-3xl p-3 transition-transform duration-300 hover:shadow-[#100E36] dark:hover:shadow-[#e2e9ff] hover:shadow-2xl hover:scale-105">
          <Link href="https://www.linkedin.com/in/alexis-guastalli/">
            <Image
              src={ImgLink}
              alt="..."
              width={80}
              height={80}
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
