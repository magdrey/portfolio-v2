import { ProjectCard } from "./projectcard";

type ProjectCardtype = {
  category: string;
  year: string;
  name: string;
  details: string;
  description: string;
  image: string;
};

interface ProjectSectionProps {
  Projectlist: ProjectCardtype[];
}

export const ProjectSection = ({ Projectlist }: ProjectSectionProps) => {
  return (
    <div className="flex w-full  mt-20 justify-center flex-col">
      <p className="text-[24px] text-center font-[700] text-[#136c60] ">
        Projects
      </p>

      <div
        className={`md:grid flex md:grid-cols-2 gap-10 mt-20 justify-between w-full px-5 items-center lg:px-20 flex-col `}
      >
        {Projectlist?.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            category={project.category}
            year={project.year}
            details={project.details}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};
