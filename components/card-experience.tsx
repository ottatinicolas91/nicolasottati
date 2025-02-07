"use client"

import React from "react";

import Link from "next/link";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import { experiences } from "@/lib/types";
import CardExperienceDivider from "@/components/card-experience-divider";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

type ExperienceProps = (typeof experiencesData)[number];
const experienceIcon = {
  Job: React.createElement(CgWorkAlt),
  Education: React.createElement(LuGraduationCap),
  Project: React.createElement(FaReact),
};

export default function CardExperience({
  type,
  title,
  location,
  name,
  company,
  description,
  date,
}: ExperienceProps) {
  return (
    <div className="max-w-lg min-w-md w-full">
      <div className="relative max-w-lg w-full bg-white border shadow-xl rounded-xl p-4 md:p-5 z-10 mx-4 dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-950">
        <h1 className="absolute -top-10 md:-top-10 md:-left-10 text-4xl font-bold text-neutral-300 dark:text-neutral-800">
          {date ?? "2024"}
        </h1>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {title ?? "No title"}
        </h3>
        <div className="flex flex-row items-center gap-2 text-gray-800 dark:text-white">
          {experienceIcon[type ?? "Job"]}
          <h4 className="text-sm">
            {company ?? "No company"} | {name ?? "No name"}
          </h4>
        </div>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          {description ?? "No description"}
        </p>
        <Link className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href={ "#"}>
          Card link
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </Link>
      </div>
    <CardExperienceDivider />
    </div>
  );
}

// export default async function CardExperience({ experience }: { experience: experiences }) {
//   return (
//     <div className="max-w-lg min-w-md w-full">
//       <div className="relative max-w-lg w-full bg-white border shadow-xl rounded-xl p-4 md:p-5 z-10 mx-4 dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-950">
//         <h1 className="absolute -top-10 md:-top-10 md:-left-10 text-4xl font-bold text-neutral-300 dark:text-neutral-800">
//           {experience.date ?? "2024"}
//         </h1>
//         <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//           {experience.name ?? "No name"}
//         </h3>
//         <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
//           {experience.type ?? "No type"}
//         </p>
//         <p className="mt-2 text-gray-500 dark:text-neutral-400">
//           {experience.description ?? "No description"}
//         </p>
//         <Link className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href={experience.url ?? "#"}>
//           Card link
//           <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="m9 18 6-6-6-6"></path>
//           </svg>
//         </Link>
//       </div>
//     <CardExperienceDivider />
//     </div>
//   );
// }