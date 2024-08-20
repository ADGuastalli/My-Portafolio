import React from "react";
import "flowbite-react";
import Image from "next/image";
import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  return (
    <div className="flex flex-col items-center h-96">
      <Carousel className="opacity-90 w-6/12">
        <div>
          <Image
            src="/Proyectos/m4.png"
            alt="..."
            width={500}
            height={500}
            className="w-full"
          />
          <button>Detalle</button>
        </div>
        <Image
          src="/Proyectos/m3.png"
          alt="..."
          width={500}
          height={500}
          className="w-full"
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
