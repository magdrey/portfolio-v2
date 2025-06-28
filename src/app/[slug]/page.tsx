"use client";
import { ImageLp1 } from "@/Assets";
import { ContactMe, NavBar } from "@/components";
import { projectList } from "@/lib/project-list";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "./loading";

export default function Project() {
  const { slug } = useParams();
  const slugName = decodeURIComponent(String(slug)).replace(/_/g, " ");

  const project = projectList.find(
    (project) => project.name.toLowerCase() === slugName.toLowerCase()
  );
  if (!project) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
    <Loading loadingTitle1={project.name} loadingTitle2={project.subtitle}>
      <div className=" text-[#002628] w-screen flex flex-col items-center justify-center">
        <header className="w-full flex flex-col md:px-10 items-center lg:h-screen max-w-[1100px]">
          <NavBar />
          <div className="flex flex-col gap-10 pt-10 justify-center h-full ">
            <div className="flex flex-col items-center gap-5">
              <p className="animate-fadeInUp opacity-0  text-[24px] text-[#0d4749] font-bold  duration-500 ">
                {project.name}
              </p>
              <div>
                {" "}
                <Image
                  alt="pic"
                  src={project.image || ImageLp1}
                  width={1000}
                  height={1000}
                  className="w-[840px] animate-fadeInUp delay-500 opacity-0 lg:h-[440px]"
                />{" "}
              </div>

              <div className="flex pt-[20px] px-4 flex-col">
                <p className="animate-fadeInUp text-center opacity-0  text-[18px] text-[#0d4749] font-bold  duration-500 ">
                  {project.details}
                </p>
              </div>
            </div>
          </div>
        </header>
        <section className="flex w-full mt-6 lg:mt-0 mb-2 items-center flex-col max-w-[1100px]  ">
          <div className="lg:grid w-full mx-auto flex lg:grid-cols-5 max-w-[1000px] px-8">
            <p className="font-semibold hidden lg:flex"> Description :</p>

            <p className="animate-fadeInUp opacity-0  col-span-4 text-[18px]  font-medium  duration-500 ">
              {project.description || " "}
            </p>
          </div>
        </section>

        <section className="flex w-full mb-2 items-center flex-col max-w-[1100px]  ">
          <div className="lg:grid flex w-full mx-auto lg:grid-cols-5 max-w-[1000px] px-8">
            <p className="font-semibold hidden lg:flex"> Status :</p>

            <p className="animate-fadeInUp opacity-0 flex items-center gap-2 col-span-4 text-[18px]  font-medium  duration-500 ">
              <span className="hidden lg:flex"> {project.status || " "} </span>
              {project.status && project.liveUrl && (
                <a
                  href={project?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-blue-800 flex items-center  hover:underline"
                >
                  <span className="  ">link to website</span>
                  <ExternalLinkIcon className="w-4 h-4 hover:w-5 hover:h-5" />
                </a>
              )}
            </p>
          </div>
        </section>

        <section className=" hidden lg:flex w-full mb-2 items-center flex-col max-w-[1100px]  ">
          <div className="grid w-full mx-auto grid-cols-5 max-w-[1000px] px-8">
            <p className="font-semibold hidden lg:flex"> Type :</p>

            <p className="animate-fadeInUp opacity-0  col-span-4 text-[18px]  font-medium  duration-500 ">
              {project.type || " "}
            </p>
          </div>
        </section>

        <section className="flex w-full mb-2 mt-8 items-center flex-col max-w-[1100px]">
          <div>
            {project.screenshots?.[0] && (
              <Image
                alt="pic"
                src={project.screenshots?.[0] || ImageLp1}
                width={1000}
                height={1000}
                className="w-[640px] animate-fadeInUp delay-500 opacity-0 h-[440px]"
              />
            )}
          </div>
        </section>

        <section className="flex w-full my-2 items-center flex-col max-w-[1100px]">
          <div className="grid w-full mx-auto grid-cols-5 max-w-[1000px] px-8">
            <p className="font-semibold hidden lg:flex"> Tech Stack :</p>
            <div className="animate-fadeInUp opacity-0 flex col-span-5 lg:col-span-4 text-[14px] justify-center lg:justify-start  font-medium  duration-500 ">
              {project.techStack?.map((stack, index) => (
                <p
                  className=" group relative m-[5px] bg-green-50/70 border-2 border-green-600 px-2 py-1  flex items-center gap-4 rounded-[5px] "
                  key={index}
                >
                  {stack}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="flex w-full mb-2 mt-8 items-center flex-col max-w-[1100px]">
          <div>
            {project.screenshots?.[1] && (
              <Image
                alt="pic"
                src={project.screenshots?.[1]}
                width={1000}
                height={1000}
                className="w-[640px] animate-fadeInUp delay-500 opacity-0 h-[440px]"
              />
            )}
          </div>
        </section>

        <section
          id="Contact"
          className="flex w-full mt-10 flex-col max-w-[1100px]"
        >
          <ContactMe />{" "}
        </section>
      </div>
    </Loading>
  );
}
