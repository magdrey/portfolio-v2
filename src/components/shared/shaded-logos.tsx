import { C2H, DataNovate, TaoLogo } from "@/Assets";
import Image from "next/image";
export const AffiliatedLogos = () => {
  return (
    <div
      className={`grid grid-cols-2 gap-10 justify-between w-full px-5 items-center lg:px-20 flex-col lg:flex lg:flex-row  `}
    >
      <Image alt="pic" src={TaoLogo} className="max-w-[150px] opacity-70" />
      <Image alt="pic" src={DataNovate} className="max-w-[150px] opacity-70" />

      <Image alt="pic" src={C2H} className="max-w-[150px] opacity-70" />
    </div>
  );
};
