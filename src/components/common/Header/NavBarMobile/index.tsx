"use client";
import Image from "next/image";
import { useState } from "react";
export default function NavBarMobile() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const changeVisibility = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="md:hidder">
      <button onClick={changeVisibility}>
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
      <div className="w-screen h-screen bg-white"></div>
    </div>
  );
}
