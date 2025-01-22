import Link from "next/link";
import ContainerBlock from "@/components/container-block";
import CardProject from "@/components/card-project";

export default function ProjectsPage() {
  return (
    <ContainerBlock>
      <section className="bg-white dark:bg-black mx-auto">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
            Projects
          </h1>
        </div>
        <div className="px-4 bg-[#F1F1F1] -mt-10 min-h-full dark:bg-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-20">
            <CardProject />
            <CardProject />
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
