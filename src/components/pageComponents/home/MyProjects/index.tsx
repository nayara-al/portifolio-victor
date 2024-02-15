import { projects } from "./projects";
import CardProjects from "./CardProjects";
import Image from "next/image";
import Button from "components/common/Button";
export default function MyProjects(...rest: any[]) {
  const langTech = (lang: any) => {
    if (lang == "Kotlin") {
      return '/assets/Kotlin_icon.png';
    } else {
      return '/assets/jetpack.png';
    }
  };
  return (
    <section className="bg-cinza py-4 text-center">
      <h2 className="font-semibold text-[24px] text-white">Meus projetos</h2>
      <div className="flex gap-6 justify-center my-8 max-sm:flex-wrap">
        {projects.map((project, index) => (
          <CardProjects
            key={index}
            imageAlt={project.imageAlt}
            imageSrc={project.imageSrc}
            title={project.title}
            github={project.github}
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
