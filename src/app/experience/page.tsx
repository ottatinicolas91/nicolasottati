import ContainerBlock from "@/components/container-block";
import CardExperience from "@/components/card-experience";
import { experiencesData } from "@/lib/data";

export default async function ExperiencePage() {
  return (
    <ContainerBlock>
      <section className="bg-white dark:bg-black mx-auto">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
            Experience
          </h1>
        </div>
        <div className="px-4 bg-[#F1F1F1] -mt-10 min-h-dvh dark:bg-neutral-900"> {/*remember to change to the correct height */}
          <div className="flex flex-col items-center min-w-xl max-w-6xl mx-auto pt-32 pb-20">
            {experiencesData.map((experience) => (
              <CardExperience {...experience} />
            ))}
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}