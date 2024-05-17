import Image from "next/image";
import Android from "assets/png/android.png";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";

export default function Header() {
  return (
    <div className="w-full h-16 bg-cinza flex items-center gap-4">
      <Image src={Android} alt="logo android" className="w-10 ml-4" />
      <div className="flex flex-grow justify-center">
        <NavBar className="text-white"/>
        <NavBarMobile />
      </div>
    </div>
  );
}
