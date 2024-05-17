import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
interface ICardProject {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  github: string
  children?: ReactNode;
}

export default function CardProjects({
  imageSrc,
  imageAlt,
  github,
  title,
  children,
}: ICardProject) {
  return (
    <div className="w-44 py-4 rounded-md bg-white shadow-lg flex flex-col justify-between">
      <Image src={imageSrc} alt={imageAlt} width={200} height={120}/>
      <h3 className="text-xl text-azul-escuro font-bold">{title}</h3>
      <div className="flex items-center justify-center gap-4 my-2">
        {children}
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-2">
        <div className="w-4/5 h-0.5 bg-cinza"></div>
        <div className="w-full flex justify-center items-center">
          <Link href={github} target="_blank">
            <Image
              src="/icons/Github.svg"
              alt=""
              width={20}
              height={20}
              className=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
