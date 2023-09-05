import Cursos from "@/components/Cursos";
import Header from "@/components/common/Header";
import BannerHome from "@/components/pageComponents/home/Banner";
import MyProjects from "@/components/pageComponents/home/MyProjects";

export default function Home() {
    return(
        <>
            <Header />
            <BannerHome id="bannerHome"/>
            <MyProjects />
            <Cursos />
        </>
    )
}