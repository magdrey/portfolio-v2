"use client";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const NavBar = () => {
  const pathname = usePathname();

  const router = useRouter();
  const navLink = [
    {
      name: "My Portfolio",
      link: "/",
      class: " delay-500 md:delay-1500 duration-1000",
      download: false,
    },
    // {
    //   name: "About Me",
    //   link: "/about",
    //   class: "animate-fadeInDown delay-2000 duration-1000",
    // },
    // {
    //   name: "CV",
    //   link: "/goodness_johnson.pdf",
    //   class: "animate-fadeInDown delay-2500 duration-1000",
    //   download: true,
    // },
    {
      name: "Contact Me",
      link: "#Contact",
      class: " delay-1000 md:delay-2000 duration-1000",
    },
  ];

  const handleDownload = (link: string) => {
    const linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.setAttribute("download", "");
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };

  const handleselectDashboard = (value: string) => {
    router.push(`${value}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setShouldRender(true); // Mount the menu
      setIsOpen(true);
    } else {
      setIsOpen(false); // Trigger fade out
      setTimeout(() => setShouldRender(false), 2000); // Wait for animation to finish
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setShouldRender(false), 2000); // Delay unmount
  };

  return (
    // <nav className="flex justify-between gap-[16px] h-[100px] items-center">
    //   {navLink.map((link) => (
    //     <div
    //       className={` ${pathname === link.link ? "bg-white" : ""} ${
    //         link.class
    //       }  flex justify-center rounded-[24px] text-[14px] opacity-0 hover:bg-white hover:text-[#136c60] font-[600] text-[#0d4749] items-center px-[30px] py-[15px]`}
    //       onClick={
    //         link.download
    //           ? () => handleDownload(link.link)
    //           : () => handleselectDashboard(link.link)
    //       }
    //       key={link.name}
    //     >
    //       <span> {link.name} </span>
    //     </div>
    //   ))}
    // </nav>

    <nav className=" flex w-full   justify-between items-center h-[100px] md:justify-start ">
      {/* Desktop Nav */}
      <div className="hidden w-full  md:flex justify-center  gap-[16px]">
        {navLink.map((link) => (
          <div
            key={link.name}
            className={`${pathname === link.link ? "bg-white" : ""} ${
              link.class
            } animate-fadeInDown flex justify-center rounded-[24px] text-[14px] opacity-0 font-[600] text-[#0d4749] hover:text-[#136c60] hover:bg-white items-center px-[30px] py-[15px]`}
            onClick={
              link.download
                ? () => handleDownload(link.link)
                : () => handleselectDashboard(link.link)
            }
          >
            <span>{link.name}</span>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}

      <button onClick={toggleMenu} className="md:hidden ml-6  z-[1001]">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Slide-in Menu */}

      <div
        className={`fixed top-0 left-0 h-full w-[75%] top-navigation shadow-md z-[1000] transform transition-transform duration-300 ease-in-out ${
          shouldRender ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex w-[60%]  flex-col gap-4 p-6 pt-48">
          {navLink.map((link) => (
            <div
              key={link.name}
              className={`${pathname === link.link ? "bg-white" : ""} ${
                link.class
              } ${
                isOpen ? "animate-fadeInLeft opacity-0" : "animate-fadeOutLeft"
              } flex justify-center rounded-[24px] text-[14px]  font-[600] text-[#0d4749] hover:text-[#136c60] hover:bg-white items-center px-[30px] py-[15px]`}
              onClick={() => {
                if (link.download) {
                  handleDownload(link.link);
                } else {
                  handleselectDashboard(link.link);
                }
                closeMenu();
              }}
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
