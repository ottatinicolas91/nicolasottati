import Image from "next/image";
import ContainerBlock from "@/components/container-block";
// import { ThemeProvider } from "next-themes";

export default function HomePage() {
  return (
    // <ThemeProvider defaultTheme="light" attribute="class">
      <ContainerBlock>
        <div>
          <h1 className="text-3xl font-bold dark:text-white transition-all duration-200 fade-in-out">
            Components to be added here
            </h1>
        </div>
      </ContainerBlock>
    // </ThemeProvider>
  );
}
