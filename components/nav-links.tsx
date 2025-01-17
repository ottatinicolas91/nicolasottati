import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex gap-4">
      <Link className="hover:text-gray-500 duration-200 fade-in" href="/">Home</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in" href="/about">About</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in" href="/contact">Contact</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in" href="/experience">Experience</Link>
      <Link className="hover:text-gray-500 duration-200 fade-in" href="/projects">Projects</Link>
    </div>
  );
}
