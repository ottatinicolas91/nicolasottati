import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex gap-10 transition-all duration-200 fade-in-out dark:text-white">
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/">Home</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/about">About</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/contact">Contact</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/experience">Experience</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in-out" href="/projects">Projects</Link>
    </div>
  );
}
