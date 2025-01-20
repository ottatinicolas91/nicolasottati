import NavSocials from "./nav-socials";
import { ThemeProvider } from "next-themes";

export default function Footer() {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="mt-auto transition-all duration-200 fade-in-out">
      <footer className="py-8 relative">
        <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent h-1 absolute top-0 left-0 right-0"></div>
        <div className="flex justify-between items-center p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2025 Nicolas Ottati. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Developed by Nicolas Ottati</p>
          <NavSocials />
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
