import Image from "next/image";
import foto from "../../../public/assets/Victor.png";
import Button from "../Button";
export const Banner = () => {
  return (
    <div className="w-full p-12 bg-azul-escuro h-auto flex flex-col items-center justify-center gap-8">
      <div className=" flex gap-24">
        <div className="flex flex-col items-center justify-center w-[420px]">
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
          <Image src={foto} alt="Foto de Victor" className="rounded-full" height={200} width={200} />
        </div>
      </div>
      <Button buttonType="primary" buttonColor="verde">Ver Mais</Button>
    </div>
  );
};
