export default function NavBar(...rest: any) {
  return (
    <nav {...rest}>
      <ul className="flex flex-row gap-4 text-white">
        <li>Início</li>
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Certificações</li>
      </ul>
    </nav>
  );
}
