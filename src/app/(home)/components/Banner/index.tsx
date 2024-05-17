import Image from "next/image";
import foto from "assets/png/Victor.png";
import { BannerBase } from "components/Banner";
import React from "react";
import Button from "components/Button";

export default function BannerHome(...rest: any[]) {
  return (
    <BannerBase>
      <div {...rest} className=" flex gap-24 max-md:flex-wrap max-md:items-center max-md:justify-center max-md:gap-8">
        <div className="flex flex-col items-center justify-center w-[420px] max-md:order-2">
          <h1 className="text-white font-extrabold text-[32px]">
            Olá, sou Victor
          </h1>
          <p className="text-center text-white">
            Sou desenvolvedor mobile, com foco no desenvolvimento de android
            nativo. Gosto de criar aplicações utlizando Kotlin, mas também posso
            criar com a linguagem legado Java
          </p>
        </div>
        <div className="bg-gradient-to-r from-verde-android to-green-800 rounded-full border border-solid border-1">
          <Image
            src={foto}
            alt="Foto de Victor"
            className="rounded-full w-full h-full object-cover overflow-hidden"
            height={200}
            width={200}
          />
        </div>
      </div>
      <Button buttonType="primary" buttonColor="verde">
        Ver Mais
      </Button>
    </BannerBase>
  );
}
