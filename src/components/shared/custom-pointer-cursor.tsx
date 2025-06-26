/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

export function CustomPointerCursor() {
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const defaultCursor = document.querySelector(".cursor") as HTMLDivElement;
    const pointerCursor = document.querySelector(
      ".pointer-cursor"
    ) as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;

      if (defaultCursor) {
        defaultCursor.style.left = x;
        defaultCursor.style.top = y;
        defaultCursor.style.opacity = isPointer ? "0" : "1";
      }
      if (pointerCursor) {
        pointerCursor.style.left = x;
        pointerCursor.style.top = y;
        pointerCursor.style.opacity = isPointer ? "1" : "0";
      }
    };

    const checkHoverTargets = () => {
      const hoverTarget = document.querySelector(":hover");
      if (
        hoverTarget &&
        hoverTarget.closest("a, button, [role='button'], .cursor-pointer")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const hideCursor = () => {
      if (defaultCursor) defaultCursor.style.opacity = "0";
    };

    const showCursor = () => {
      if (defaultCursor) defaultCursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", checkHoverTargets);
    document.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseenter", showCursor);
    document.addEventListener("contextmenu", hideCursor);
    document.addEventListener("click", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", checkHoverTargets);
      document.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("contextmenu", hideCursor);
      document.removeEventListener("click", showCursor);
    };
  }, [isPointer]);

  return (
    <>
      <div className="cursor-wrapper pointer-events-none fixed z-[9999] top-0 left-0">
        {/* Default cursor image */}
        <div
          className="cursor transition-opacity duration-200"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "32px",
            height: "32px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            opacity: 0,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/61e596b2753b2c6776cc0abb/65d27a8ce03c01cd33f87bef_Frame%20427318970.svg"
            alt="Default Cursor"
            className="cursor-image w-full h-full"
          />
        </div>

        {/* Pointer cursor (visible only when hovering links/buttons) */}
        <div
          className="pointer-cursor transition-opacity duration-200"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "24px",
            height: "24px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            opacity: isPointer ? 1 : 0,
          }}
        >
          {/* <img
            src="/pointer-cursor.svg" // 👉 Replace with your own image
            alt="Pointer Cursor"
            className="w-full h-full"
          /> */}
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/hand-down-skin-type-5.png"
            alt="Pointer Cursor"
          />
        </div>
      </div>
    </>
  );
}
