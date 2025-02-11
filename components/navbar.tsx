"use client";

import NavbarScroll from "./navbar-scroll";
import NavbarFixed from "./navbar-fixed";
import NavLinks from "./nav-links";
import NavSocials from "./nav-socials";
import DarkModeToggle from "./dark-mode-toggle";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isScrolling ? (
        <NavbarScroll isScrolling={isScrolling} />
      ) : (
        <NavbarFixed />
      )}
    </>
  );
}
