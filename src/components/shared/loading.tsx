"use client";

import React from "react";

export const LoadingScreen: React.FC<{
  loading: boolean;
  title1?: string;
  title2?: string;
}> = ({ loading, title1, title2 }) => {
  return (
    <div
      className={` fixed  inset-0 flex items-center justify-center  transition-opacity ${
        loading ? "z-50 opacity-100" : "-z-10 opacity-0"
      }`}
    >
      {loading && (
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="name-and-title flex flex-col px-2 lg:px-0 items-center justify-center loading">
            <h2 className="animate-fadeOutDown delay-1500 text-[24px]  text-[#136c60] font-bold  duration-500 ">
              {title1 ?? " Goodness Johnson"}
            </h2>
            <h1 className="my-title text-[#0d4749] text-center  loadup-version animate-fadeOutDown text-[24px] font-bold delay-1000 duration-500">
              {title2 ?? " FrontEnd Engineer"}
            </h1>
          </div>
          <div className="animate-fadeOutDown delay-2000 relative h-1 rounded-[10px] w-[250px] overflow-hidden bg-[#ffffff80] duration-500">
            <div className="animate-loadingBar h-full bg-[#1db954] duration-100"></div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};
