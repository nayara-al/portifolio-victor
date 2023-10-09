import Header from "@/components/common/Header";
import BannerHome from "@/components/pageComponents/home/Banner";
import Cursos from "@/components/pageComponents/home/Cursos";
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