import { Linkedin } from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function SocialsVerticalList() {
  return (
    <div className="max-w-xs flex flex-col my-4">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="https://www.instagram.com/ottati_dj/"
      >
        <SiInstagram strokeWidth={1} />
        Instagram
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="https://github.com/ottatinicolas91"
      >
        <SiGithub strokeWidth={1} />
        Github
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="https://www.linkedin.com/in/nicolas-ottati/"
      >
        <Linkedin strokeWidth={1.5} />
        LinkedIn
      </Link>
    </div>
  );
}
