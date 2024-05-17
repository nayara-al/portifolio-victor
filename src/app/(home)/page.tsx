import * as C from "./components";

export default function Home() {
    return(
        <>
            <C.BannerHome id="bannerHome"/>
            <C.TechStack />
            <C.MyProjects id="projetos"/>
            <C.Cursos id="cursos"/>
        </>
    )
}