"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavBar(...rest: any) {
  const router = usePathname();
  useEffect(() => {
    if (!router) {
      return;
    }
  }, [router]);
  return (
    <nav {...rest}>
      <ul className="flex flex-row gap-4 text-white">
        <Link href="/">
          <li>Início</li>
        </Link>
        <Link href={router === "/" ? "#sobreMim" : "/sobre-mim"}>
          <li>Sobre mim</li>
        </Link>
        <li>Projetos</li>
        <li>Cursos</li>
      </ul>
    </nav>
  );
}
