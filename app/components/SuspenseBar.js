import Link from "next/link";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { CiHome } from "react-icons/ci";

export default function SuspenseBar() {
  return (
    <nav className="flex gap-4 bg-secondary py-2 px-5 rounded-full fixed bottom-10 end-1/2 translate-x-1/2 text-primary text-3xl items-center justify-center border-primary border-2">
      <Link className="hover:text-emphasis" href="/#home">
        <CiHome />
      </Link>
      <Link className="hover:text-emphasis" href="/#aboutme">
        <SiAboutdotme />
      </Link>
      <Link className="hover:text-emphasis" href="/#projects">
        <GoProject />
      </Link>
      <Link className="hover:text-emphasis" href="/#contacts">
        <IoIosContact />
      </Link>
    </nav>
  );
}
