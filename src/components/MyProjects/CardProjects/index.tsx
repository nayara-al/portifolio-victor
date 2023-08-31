import Button from "@/components/Button";
import Image from "next/image";
import { ReactNode } from "react";
interface ICardProject {
  imageSrc: string;
  imageAlt: string;
  title: string;
  children?: ReactNode
}

export default function CardProjects({
  imageSrc,
  imageAlt,
  title,
  children
}: ICardProject) {

  return (
    <div className="w-fit py-4 rounded-md bg-white shadow-lg">
      <Image src={imageSrc} alt={imageAlt} width={200} height={120}/>
      <h3 className="text-[20px] text-azul-escuro font-bold">{title}</h3>
      <div className="flex items-center justify-center gap-4 my-2">{children}</div>
      <Button buttonType="secondary" buttonColor="azul">Ver Mais</Button>
    </div>
  );
}
