import ContainerBlock from "@/components/container-block";
import Link from "next/link";
import SocialsVerticalList from "@/components/socials-vertical-list";

export default function AboutPage() {
  return (
    <ContainerBlock>
      <section className="bg-white dark:bg-black mx-auto">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
            About Me.
          </h1>
        </div>
        <div className="px-4 bg-[#F1F1F1] -mt-10 dark:bg-neutral-900">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p className="leading-loose text-lg md:text-xl font-semibold mx-4 dark:text-white">
              I'm a Junior Full-Stack Developer with experience in software
              development and a strong background in UI/UX design, marketing,
              digital communication, and large-scale event management within the
              entertainment industry. After graduating from the intensive Web
              Development Bootcamp at Le Wagon, I worked on Trackstack Studio,
              where I developed advanced skills in modern technologies like
              TypeScript, React.js, Next.js, and Prisma while applying agile
              methodologies to build scalable web solutions. I am eager to
              continue growing professionally, either as a developer or as an
              event manager, where I can leverage my diverse skill set and
              experiences to drive successful project outcomes, whether in tech,
              entertainment, or both.
            </p>
          </div>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-neutral-900 px-4">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            <div className="inline-flex flex-col">
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-gray-200">
                  Contact
                </h2>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  {"For any sort help / enquiry, drop me a "}
                  <Link
                    href="mailto:ottatinicolas91@gmail.com"
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    mail
                  </Link>
                  {" and I'll get back to you as soon as possible."}
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black dark:text-gray-200">
                  Job Opportunities
                </h2>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  {
                    "I'm looking for a job currently, If you see me as a good fit, check my "
                  }
                  <Link
                    href="https://www.linkedin.com/in/nicolas-ottati/"
                    target="__blank"
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    LinkedIn
                  </Link>
                  {" and I'd love to work for you."}
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black dark:text-gray-200">
                  My Socials
                </h2>
                <SocialsVerticalList />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div>
                <p className="text-xl text-black mb-4 dark:text-gray-300 ">
                  I've been developing full-stack application since I was 10
                  years old. I didn't know what full-stack meant at that time
                  because the term was not coined back then. I'm so out of
                  content right now that I'm literally crying writing this text
                  since lorem text is so 2012 now.
                </p>
                <p className="text-xl text-black mb-4 dark:text-gray-300 ">
                  After learning HTML and struggling with CSS, I came up with a
                  brilliant idea of using bootstrap so that I don't have to
                  style everything by myself and - for obvious reasons - if you
                  knew bootstrap, you were cool.
                </p>
                <p className="text-xl text-black mb-4 dark:text-gray-300 ">
                  But now, I'm a legend. I've been coding in React, Angular,
                  Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL,
                  Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP,
                  Assembly, Logo and YouDontKnowShit programming language etc to
                  name a few. Although I barely know the syntax (Psst, Stack
                  overflow!), I consider myself a Ninja developer I'm laughing
                  right now.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-gray-200">
                  My Stack
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}
