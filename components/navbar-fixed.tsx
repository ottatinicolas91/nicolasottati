"use client";

import NavLinks from "./nav-links";
import NavSocials from "./nav-socials";
import DarkModeToggle from "./dark-mode-toggle";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function NavbarFixed() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div>
      <header
        ref={ref}
        style={{
          scale: scaleProgress.get() as number,
          opacity: opacityProgress.get() as number,
        }}
        className="z-[999] relative"
      >
        <div
          className="fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-md w-full rounded-none border border-white border-opacity-40 bg-opacity-80 shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-opacity-75"
        >
          <nav className="flex justify-between items-center p-4 shadow-md">
            <div className="flex flex-col items-start dark:text-white">
              <div className="text-2xl text-gray-700 font-bold transition-all duration-200 fade-in-out dark:text-white">
                Nicolas Ottati
              </div>
              <div className="text-sm text-gray-500 transition-all duration-200 fade-in-out dark:text-gray-400">
                Junior Developer | Event & Project Manager
              </div>
            </div>
            <NavLinks />
            <div className="flex items-center gap-2">
              <NavSocials />
              <DarkModeToggle />
            </div>
          </nav>
        </div>
      </header>
    </motion.div>
  );
}
