"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function TechStack() {
  const [activeClass, setActiveClass] = useState<null | string>(null);
  const handleImageInteraction = (className: string) => {
    setActiveClass(className);
  };
  return (
    <section className="flex flex-col items-center p-6 gap-8 h-96">
      <h3 className="text-cinza text-xl font-bold leading-10 underline underline-offset-8">
        Tech Stack
      </h3>
      <div className="flex gap-6 items-center justify-center max-sm:flex-wrap">
        <Image
          src="/icons/AndroidStudio.svg"
          alt=""
          width={60}
          height={60}
          className="android-studio"
          onMouseEnter={() => handleImageInteraction("android-studio")}
          onMouseLeave={() => setActiveClass(null)}
          onClick={() => handleImageInteraction("android-studio")}
        />
        <Image
          src="/icons/Kotlin_Icon.svg"
          alt=""
          width={60}
          height={60}
          className="kotlin"
          onMouseEnter={() => handleImageInteraction("kotlin")}
          onMouseLeave={() => setActiveClass(null)}
          onClick={() => handleImageInteraction("kotlin")}
        />
        <Image
          src="/icons/jetpack.svg"
          alt=""
          width={60}
          height={60}
          className="jetpack-compose"
          onMouseEnter={() => handleImageInteraction("jetpack-compose")}
          onMouseLeave={() => setActiveClass(null)}
          onClick={() => handleImageInteraction("jetpack-compose")}
        />
        <Image
          src="/icons/Git.svg"
          alt=""
          width={60}
          height={60}
          className="git-flow"
          onMouseEnter={() => handleImageInteraction("git-flow")}
          onMouseLeave={() => setActiveClass(null)}
          onClick={() => handleImageInteraction("git-flow")}
        />
        <Image
          src="/icons/Figma-Dark.svg"
          alt=""
          width={60}
          height={60}
          className="figma"
          onMouseEnter={() => handleImageInteraction("figma")}
          onMouseLeave={() => setActiveClass(null)}
          onClick={() => handleImageInteraction("figma")}
        />
      </div>
      <div className="text-black max-w-md">
        <div className={`${activeClass === "android-studio" ? "block" : "hidden"} android-studio`}>
          <Link
            href="https://developer.android.com/studio?gad_source=1&gclid=CjwKCAiArLyuBhA7EiwA-qo80JCRK9RangGZB3OSzxc4X2EeOrN7KFfuRl6pfahW4BaqDeRV3XumpBoCXJ4QAvD_BwE&gclsrc=aw.ds"
            target="_blank"
            className="text-xl"
          >
            <h3>Android Studio</h3>
          </Link>
          <p>
            Ambiente de Desenvolvimento Integrado (IDE) oficial para o
            desenvolvimento de aplicativos Android.
          </p>
        </div>
        <div className={`${activeClass === "kotlin" ? "block" : "hidden"} kotlin`}>
          <Link
            href="https://kotlinlang.org"
            target="_blank"
            className="text-xl"
          >
            <h3>Kotlin</h3>
          </Link>
          <p>
            Linguagem de programação que torna a codificação concisa,
            multiplataforma e divertida. É a linguagem preferida do Google para
            desenvolvimento de aplicativos Android.
          </p>
        </div>
        <div className={`${activeClass === "jetpack-compose" ? "block" : "hidden"} jetpack-compose`}>
          <Link
            href="https://developer.android.com/jetpack/compose"
            target="_blank"
            className="text-xl"
          >
            <h3>Jetpack Compose</h3>
          </Link>
          <p>
            Kit de ferramentas moderno recomendado pelo Android para construir
            UI nativa. Ele simplifica e acelera o desenvolvimento de UI no
            Android, permitindo uma construção rápida com menos código.
          </p>
        </div>
        <div className={`${activeClass === "git-flow" ? "block" : "hidden"} git-flow`}>
          <Link href="https://git-scm.com" target="_blank" className="text-xl">
            <h3>Git</h3>
          </Link>
          <p>
            Sistema de controle de versão distribuído gratuito e em código
            aberto utilizado para o rastreamento de alterações em projetos de
            software. Usado para lidar com tudo, desde projetos pequenos a muito
            grandes, com velocidade e eficiência.
          </p>
        </div>
        <div className={`${activeClass === "figma" ? "block" : "hidden"} figma`}>
          <Link
            href="https://www.figma.com"
            target="_blank"
            className="text-xl"
          >
            <h3>Figma</h3>
          </Link>
          <p>
            Ferramenta de design colaborativo baseada na nuvem que permite aos
            usuários criar, prototipar e colaborar em projetos de design de
            interface do usuário (UI) de forma eficiente.
          </p>
        </div>
      </div>
    </section>
  );
}
