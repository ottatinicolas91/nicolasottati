import { Linkedin } from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

import Link from "next/link";


export default function NavSocials() {
  return (
    <div className="flex gap-4">
      <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ottati_dj/" className="text-gray-700 hover:text-gray-500 duration-200 fade-in">
        <SiInstagram strokeWidth={1} />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href="https://github.com/ottatinicolas91" className="text-gray-700 hover:text-gray-500 duration-200 fade-in">
        <SiGithub strokeWidth={1} />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicolas-ottati/" className="text-gray-700 hover:text-gray-500 duration-200 fade-in">
        <Linkedin strokeWidth={1.5} />
      </Link>
    </div>
  );
}
