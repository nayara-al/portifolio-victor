import Button from "components/Button";
import Dropdown from "./DropDown";
import { cursos } from "data/cursos";

export default function Cursos(...rest: any[]) {
  return (
    <section className="w-full text-center bg-white text-black py-4">
      <h2 className="font-semibold text-[24px]">Meus cursos e certificados</h2>
      <Dropdown cursos={cursos} />
      <Button buttonColor="verde" buttonType="primary">Mais cursos e detalhes</Button>
    </section>
  );
}
