"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBarMobile() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const changeVisibility = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="md:hidden w-full relative flex justify-end items-center">
      <button onClick={changeVisibility} className="mr-4">
        {isShow ? (
          <Image
            src="/icons/x-close.svg"
            alt="x para fechar menu"
            width={40}
            height={40}
          />
        ) : (
          <Image
            src="/icons/menu-hamburguer.svg"
            alt="menu hamburguer"
            width={40}
            height={40}
          />
        )}
      </button>
      <ul
        className={`w-screen h-screen flex flex-col justify-center items-center gap-6 text-verde-android py-8 top-12 right-0 z-10 bg-cinza absolute text-xl font-bold ${
          isShow ? "block" : "hidden"
        }`}
      >
        <Link href="/">
          <li>Início</li>
        </Link>
        <Link href={"/sobre-mim"}>
          <li>Sobre mim</li>
        </Link>
        <Link href={"/projetos"}>
          <li>Projetos</li>
        </Link>
        <Link href={"/cursos"}>
          <li>Cursos</li>
        </Link>
      </ul>
    </div>
  );
}
