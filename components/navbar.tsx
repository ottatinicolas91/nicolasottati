import NavLinks from "./nav-links";
import NavSocials from "./nav-socials";
import DarkModeToggle from "./dark-mode-toggle";
import { ThemeProvider } from "next-themes";

export default async function Navbar() {
  return (
    <div className="pb-6 transition-all duration-200 fade-in-out">
      <div className="flex justify-between items-center p-4 shadow-md">
        <div className="flex flex-col items-start dark:text-white">
          <div className="text-2xl text-gray-700 font-bold transition-all duration-200 fade-in-out dark:text-white">
            Nicolas Ottati
          </div>
          <div className="text-sm text-gray-500 transition-all duration-200 fade-in-out dark:text-gray-400">
            Junior Developer | Event & Project Manager
          </div>
        </div>
        <NavLinks />
        <div className="flex items-center">
          <NavSocials />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
