import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
