"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components";

const Loading = ({
  children,
  loadingTitle1 = "Loading",
  loadingTitle2 = "Please wait",
}: Readonly<{
  children: React.ReactNode;
  loadingTitle1?: string;
  loadingTitle2?: string;
}>) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true); // Start loading when pathname changes
    const timeout = setTimeout(() => {
      setLoading(false); // Simulate loading complete after animation
    }, 3000); // Match duration of loading animation

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [pathname]);

  return (
    <>
      <LoadingScreen
        title1={loadingTitle1}
        title2={loadingTitle2}
        loading={loading}
      />
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
