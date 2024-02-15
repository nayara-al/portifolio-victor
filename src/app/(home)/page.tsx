import BannerHome from "components/pageComponents/home/Banner";
import Cursos from "components/pageComponents/home/Cursos";
import MyProjects from "components/pageComponents/home/MyProjects";
import TechStack from "components/pageComponents/home/TechStack";

export default function Home() {
    return(
        <>
            <BannerHome id="bannerHome"/>
            <TechStack />
            <MyProjects id="projetos"/>
            <Cursos id="cursos"/>
        </>
    )
}