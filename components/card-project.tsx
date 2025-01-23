"use client";

import { useState } from "react";
import ModalProject from "./modal-project";
import { projectsData } from "@/lib/data";
import { getProjects } from "@/lib/fetchers";
import Image from "next/image";
type ProjectProps = (typeof projectsData)[number];

export default function CardProject({
  title,
  description,
  tags,
  icon,
  imageUrl,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col mx-4 group bg-white border shadow-xl rounded-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-neutral-950 hover:scale-[1.02] focus:outline-none focus:shadow-lg transition duration-200 ease-in-out dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-950"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[50%] rounded-t-xl overflow-hidden">
          <Image
            className="size-full absolute top-0 start-0 object-cover group-hover:scale-[1.4] group-focus:scale-105 transition-transform duration-[2500ms] ease-in-out rounded-t-xl"
            src={imageUrl}
            alt="Project thumbnail"
            quality={95}
          />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-400">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && <ModalProject onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

// export default async function CardProject() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const projects = await getProjects();

//   const project = {
//     title: "Studio by Trackstack",
//     description:
//       "Studio by Trackstack is a platform that allows you to create and manage your own studio.",
//     image:
//       "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
//   };

//   return (
//     <>
//       <div
//         className="flex flex-col mx-4 group bg-white border shadow-xl rounded-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-neutral-950 hover:scale-[1.02] focus:outline-none focus:shadow-lg transition duration-200 ease-in-out dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-950"
//         onClick={() => setIsModalOpen(true)}
//       >
//         <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[50%] rounded-t-xl overflow-hidden">
//           <img
//             className="size-full absolute top-0 start-0 object-cover group-hover:scale-[1.4] group-focus:scale-105 transition-transform duration-[2500ms] ease-in-out rounded-t-xl"
//             src={project.image}
//             alt="Card Image"
//           />
//         </div>
//         <div className="p-4 md:p-5">
//           <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//             {project.title}
//           </h3>
//           <p className="mt-1 text-gray-500 dark:text-neutral-400">
//             {project.description}
//           </p>
//         </div>
//       </div>

//       {isModalOpen && <ModalProject onClose={() => setIsModalOpen(false)} />}
//     </>
//   );
// }
