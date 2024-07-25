import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { appContext } from "@/app/contexts/appContext";

export default function Header() {
  const { theme, setTheme } = useContext(appContext);

  function setGlobalTheme(themeInput) {
    setTheme(themeInput);
    document.documentElement.classList.add(themeInput);
    localStorage.setItem("theme", themeInput);
  }

  function changeTheme() {
    document.documentElement.classList.remove(theme);
    document.body.classList.remove(theme);

    if (theme === "dark") setGlobalTheme("light");
    if (theme === "light") setGlobalTheme("dark");
  }

  return (
    <header className="pt-5 px-5 flex justify-between items-center">
      <Link href="/#" className="font-poppins text-2xl">
        Allan Landin
      </Link>
      <button onClick={changeTheme} className="rounded-full text-2xl">
        {theme == "light" ? (
          <MdDarkMode />
        ) : (
          <MdLightMode className="text-white" />
        )}
      </button>
    </header>
  );
}
