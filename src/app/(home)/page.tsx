import { Banner } from "@/components/Banner";
import Cursos from "@/components/Cursos";
import { Header } from "@/components/Header";
import MyProjects from "@/components/MyProjects";

export default function Home() {
    return(
        <>
            <Header />
            <Banner />
            <MyProjects />
            <Cursos />
        </>
    )
}