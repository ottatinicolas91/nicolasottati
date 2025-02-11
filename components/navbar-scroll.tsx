"use client";

import NavLinks from "./nav-links";
import NavSocials from "./nav-socials";
import DarkModeToggle from "./dark-mode-toggle";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function NavbarScroll({ isScrolling }: { isScrolling: boolean }) {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-black dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: 50, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        /*           exit={{ y: 50, x: "-50%", opacity: 0 }} */
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
      >
        <nav className="flex items-center gap-2 fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
          <NavLinks />
          <NavSocials />
          <DarkModeToggle />
        </nav>
      </motion.div>
    </header>
  );
}