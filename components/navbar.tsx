"use client";

import NavbarScroll from "./navbar-scroll";
import NavbarFixed from "./navbar-fixed";
import React, { useState, useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 80) {
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
