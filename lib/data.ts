import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import thumbnailStudio from "@/public/thumbnail-studio.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const experiencesData = [
  {
    type: "Job",
    title: "Junior Software Developer, UI/UX Designer",
    location: "Dubai, UAE | Remote",
    name: "Your Home Renovations",
    company: "YHMaintenance",
    description: "I redesigned and developed the website of Yhmaintenance, a company that provides maintenance services to companies and individuals located in Dubai, UAE.",
    date: "2025",
  },
  {
    type: "Job",
    title: "Junior Software Developer",
    location: "Barcelona - London | Remote",
    name: "Studio",
    company: "Trackstack",
    description: "I worked as a full-stack developer for 6 months in Studio, a new platform project from Trackstack. I also upskilled to the full stack.",
    date: "2024 - 2025",
  },
  {
    type: "Education",
    title: "Graduated bootcamp",
    location: "Barcelona, ES",
    name: "Bootcamp",
    company: "Le Wagon",
    description: "I graduated after 3 months of a Ruby on Rails onsite intensive bootcamp. 3 months later I found my first job as a developer.",
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Remote developer",
    company: "Yhmaintenance",
    description: "I redesigned the website of Yhmaintenance, a company that provides maintenance services to companies and individuals located in Dubai, UAE.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "Vercel", "Linear", "GitHub"],
    icon: React.createElement(CgWorkAlt),
    imageUrl: corpcommentImg,
  },
  {
    title: "Personal website",
    description: "I designed and developed my personal website to showcase my projects and skills.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "Vercel", "Linear", "GitHub"],
    icon: React.createElement(FaReact),
    imageUrl: corpcommentImg,
  },
  {
    title: "Remote developer",
    company: "Trackstack",
    description: "I worked as a full-stack developer for 6 months in Studio, a new platform project from Trackstack.that makes it easy to scale, manage, and automate your music production education business.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "Vercel", "Linear", "GitHub"],
    icon: React.createElement(CgWorkAlt),
    imageUrl: thumbnailStudio,
  },
  {
    title: "Bootcamp project",
    company: "Le Wagon",
    description: "I worked in a team of 4 people to build a web app that allows users with medical conditions to connect and improve their health either with physical activities or between them or with professionals.",
    tags: ["Ruby on Rails", "MySQL", "CSS", "Javascript", "GitHub", "Heroku"],
    icon: React.createElement(FaReact),
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Framer Motion",
  "Ruby on Rails",
  "MySQL",
  "Javascript",
  "GitHub",
  "Heroku",
  "Linear",
  "Vercel",
] as const;
