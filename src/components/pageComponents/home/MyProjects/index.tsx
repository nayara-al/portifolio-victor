import { projects } from "./projects";
import kotlinImg from "../../../../../public/assets/Kotlin_Icon.png";
import jetpackImg from "../../../../../public/assets/jetpack.png";
import CardProjects from "./CardProjects";
import Image from "next/image";
import Button from "@/components/common/Button";
export default function MyProjects() {
  const langTech = (lang: any) => {
    if (lang == "Kotlin") {
      return kotlinImg;
    } else {
      return jetpackImg;
    }
  };
  return (
    <section className="bg-cinza py-4 text-center">
      <h2 className="font-semibold text-[24px] text-white">Meus projetos</h2>
      <div className="flex gap-6 justify-center my-8">
        {projects.map((project, index) => (
          <CardProjects
            key={index}
            imageAlt={project.imageAlt}
            imageSrc={project.imageSrc}
            title={project.title}
          >
            {project.tech.map((techLang, techIndex) => (
              <Image
                key={techIndex}
                src={langTech(techLang)}
                alt={`Logo ${techLang}`}
                width={20}
                height={20}
              />
            ))}
          </CardProjects>
        ))}
      </div>
      <Button buttonType="primary" buttonColor="verde">
        Mais Projetos
      </Button>
    </section>
  );
}
