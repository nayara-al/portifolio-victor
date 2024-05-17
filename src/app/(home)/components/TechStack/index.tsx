"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { techStack } from "./techStack";
export default function TechStack() {
  const [activeClass, setActiveClass] = useState<null | string>(null);
  const images = techStack[0].images
  const infos = techStack[1].info
  const handleImageInteraction = (className: string) => {
    setActiveClass(className);
  };
  return (
    <section className="flex flex-col items-center p-6 gap-8 h-96">
      <h3 className="text-cinza text-xl font-bold leading-10 underline underline-offset-8">
        Tech Stack
      </h3>
      <div className="flex gap-6 items-center justify-center max-sm:flex-wrap">
        {images!.map((image) => (
          <Image
            key={image.className}
            src={image.src}
            alt=""
            width={60}
            height={60}
            className={image.className}
            onMouseEnter={() => handleImageInteraction(image.className)}
            onMouseLeave={() => setActiveClass(null)}
            onClick={() => handleImageInteraction(image.className)}
          />
        ))}
      </div>
      <div className="text-black max-w-md">
        {infos?.map((info, index) => (
          <div className={`${activeClass === info.className ? "block" : "hidden"} ${info.className}`} key={index}>
            <Link
              href={info.href}
              target="_blank"
              className="text-xl"
            >
              <h3>{info.title}</h3>
            </Link>
            <p>
              {info.describe}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
