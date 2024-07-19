import React from "react";
import Image from "next/image";
import IndexInicio from "@/components/inicio/indexInicio";

export default function Home() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <IndexInicio />
    </div>
  );
}
