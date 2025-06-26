"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components";

const Loading = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // useEffect(() => {
  //   setLoading(true); // Start loading when pathname changes
  //   const timeout = setTimeout(() => {
  //     setLoading(false); // Simulate loading complete after animation
  //   }, 3000); // Match duration of loading animation

  //   return () => clearTimeout(timeout); // Cleanup timeout
  // }, [pathname]);

  useEffect(() => {
    if (pathname === "/" || pathname === "/about-me") {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return (
    <>
      <LoadingScreen loading={loading} />
      <div
        className={`transition-opacity ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {!loading && children}
      </div>
    </>
  );
};

export default Loading;
