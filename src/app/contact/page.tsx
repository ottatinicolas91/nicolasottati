import ContainerBlock from "@/components/container-block";
import ContactForm from "@/components/contact-form";
import ContactLinks from "@/components/contact-links";

export default function ContactPage() {
  return (
    <ContainerBlock>
      <section className="bg-white dark:bg-black mx-auto">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
            Contact
          </h1>
        </div>
        <div className="px-4 bg-[#F1F1F1] -mt-10 min-h-full dark:bg-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-20">
            <div className="col-span-1 max-w-lg">
              <h2 className="text-3xl font-semibold text-black dark:text-gray-200">
                Let&apos;s talk!
              </h2>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {
                  "I'm looking for a job currently, If you see me as a good fit, please don't hesitate and contact me through these channels "
                }
              </p>
              <div className="mt-10">
                <ContactLinks />
              </div>
            </div>
            <div className="col-span-1 min-w-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}