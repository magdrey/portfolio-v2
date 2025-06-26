import { ImageLp1 } from "@/Assets";
import { AffiliatedLogos, ContactMe, NavBar, SplitLines } from "@/components";
import { ProjectSection } from "@/components/projects";
import { projectList } from "@/lib/project-list";
import Image from "next/image";
import Loading from "./loading";

export default function Home() {
  return (
    <Loading>
      <div className=" text-[#002628] w-screen flex flex-col items-center justify-center">
        <header className="w-full flex flex-col md:px-10 items-center h-screen max-w-[1100px]">
          <NavBar />
          <div className="flex  w-full lg:w-auto mt-12 lg:mt-0 flex-col gap-10 justify-center h-full ">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <Image
                alt="pic"
                src={ImageLp1}
                className="w-[140px] animate-fadeInUp rounded-full delay-500 opacity-0 h-[140px]"
              />
              <div className="flex text-center lg:text-left pt-[20px] flex-col">
                <p className="animate-fadeInUp opacity-0  text-[24px] text-[#0d4749] font-bold  duration-500 ">
                  Goodness Johnson
                </p>
                <p className=" lg:leading-[78px] py-0  text-[#136c60]  animate-fadeInUp opacity-0 lg:text-[64px] font-[900] delay-1500 ">
                  FrontEnd Engineer
                </p>
              </div>
            </div>
            <div>
              <SplitLines
                text="Results-driven Frontend Developer with experience crafting responsive web interfaces using modern technologies like React, Next.js, JavaScript, and TypeScript. Skilled in translating Figma or design mockups into clean, accessible, and scalable code using frameworks like Tailwind CSS and component libraries such as ShadCN and MUI. Adept at working in agile teams, integrating with RESTful APIs, and delivering features that enhance user experience and business value. Passionate about continuously exploring new tools and trends in frontend development."
                className="text-[18px] justifyText  lg:text-left  lg:text-[20px] px-8 lg:px-0 w-full lg:leading-[28px]"
              />
            </div>
            <div className="flex items-center lg:items-start flex-col lg:flex-row gap-8 animate-fadeInUp delay-500 opacity-0">
              <a href="#Contact" className="">
                <button className="py-[32px] rounded-[20px] hover:bg-[#136c6090] w-[280px] h-[84px] text-white bg-[#136c60] px-[40px]">
                  {" "}
                  Contact Me{" "}
                </button>{" "}
              </a>
              <a href="#Projects" className="hidden lg:block">
                <button className="py-[32px] rounded-[20px] w-[280px] bg-[#ffffff80] text-[#136c60] hover:bg-white h-[84px] px-[40px]">
                  My Projects
                </button>
              </a>
            </div>
          </div>
        </header>
        <section className="flex w-full mt-40 lg:mt-2 flex-col max-w-[1100px]">
          <AffiliatedLogos />
        </section>

        <section className="max-w-[1400px]" id="Projects">
          <ProjectSection Projectlist={projectList} />
        </section>

        <section
          id="Contact"
          className="flex w-full mt-10 flex-col max-w-[1100px]"
        >
          <ContactMe />{" "}
        </section>

        {/* <footer className="row-start-3 flex gap-6 w-full max-w-[1100px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
      </div>
    </Loading>
  );
}
