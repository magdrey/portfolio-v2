import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  category?: string;
  year?: string;
  name: string;
  details?: string;
  description?: string;
  image?: string;
}

export const ProjectCard = ({
  category,
  year,
  name,
  // description,
  details,
  image,
}: ProjectCardProps) => {
  return (
    <Link
      href={`/${name.replace(/\s+/g, "_")}`}
      className={`md:min-h-[600px]  bg-[#00000005] hover:bg-[#fff] p-[20px] gap-8 rounded-[20px] flex-col w-full flex `}
    >
      <div className="w-full text-[12px] font-400 text-grey-400 flex justify-between">
        <p>{category}</p> <p>{year}</p>
      </div>
      <div className="w-full flex flex-col gap-2 justify-between">
        <p className="text-[32px] text-[#0d4749] font-[500]">{name}</p>
        <p>{details}</p>
      </div>

      {/* <p>{description}</p> */}

      <div className="  flex justify-center rounded-[20px] bg-[#00000005] m-6 p-4 pb-0  h-auto ">
        {image && (
          <Image
            src={image}
            alt="Pic"
            layout="intrinsic"
            width={400}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        )}
      </div>
    </Link>
  );
};
