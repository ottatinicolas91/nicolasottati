import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { delay, motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { once } from "events";

const fadeInAnimationVariants = {
  initial: { 
    opacity: 0,
    y: 100,},
  animate: (index: number) => ({  // Custom animate function
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      once: true,
    },
  }),
  exit: {
    opacity: 0,
    y: -100,
  },
}

export default function NavLinks() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
/*     <div className="flex gap-10 transition-all duration-200 fade-in-out dark:text-white">
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/">Home</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/about">About</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/contact">Contact</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/experience">Experience</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/projects">Projects</Link>
    </div> */
    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
    {links.map((link) => (
      <motion.li
        className="h-3/4 flex items-center justify-center relative"
        key={link.hash}
/*         initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} */
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={links.indexOf(link)}
      >
        <Link
          className={clsx(
            "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-white dark:hover:text-gray-300",
            {
              "text-gray-950 dark:text-gray-200":
                activeSection === link.name,
            }
          )}
          href={link.hash}
          onClick={() => {
            setActiveSection(link.name);
            setTimeOfLastClick(Date.now());
          }}
        >
          {link.name}

          {link.name === activeSection && (
            <motion.span
              className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-neutral-800"
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </motion.li>
    ))}
  </ul>
  );
}
