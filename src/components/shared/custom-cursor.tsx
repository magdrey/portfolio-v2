/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

export function CustomCursor() {
  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor") as HTMLDivElement;

  //   const moveCursor = (e: MouseEvent) => {
  //     if (cursor) {
  //       cursor.style.left = `${e.clientX}px`;
  //       cursor.style.top = `${e.clientY}px`;
  //     }
  //   };

  //   window.addEventListener("mousemove", moveCursor);
  //   return () => window.removeEventListener("mousemove", moveCursor);
  // }, []);
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.opacity = "1"; // Show the cursor on movement
      }
    };

    const hideCursor = () => {
      if (cursor) cursor.style.opacity = "0"; // Hide cursor when leaving window
    };

    const showCursor = () => {
      if (cursor) cursor.style.opacity = "1"; // Show cursor when re-entering window
    };

    const hideCursorOnContextMenu = () => {
      if (cursor) cursor.style.opacity = "0"; // Hide cursor when right-click menu opens
    };

    const restoreCursorOnMenuClose = () => {
      if (cursor) cursor.style.opacity = "1"; // Restore cursor when menu closes
    };

    // Attach event listeners
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseenter", showCursor);
    document.addEventListener("contextmenu", hideCursorOnContextMenu); // Hide cursor on right-click
    document.addEventListener("click", restoreCursorOnMenuClose);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("contextmenu", hideCursorOnContextMenu);
      document.removeEventListener("click", restoreCursorOnMenuClose);
    };
  }, []);

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice = () =>
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setIsTouch(isTouchDevice());
  }, []);

  if (isTouch) return null;
  return (
    <div className="cursor-wrapper">
      <div className="cursor">
        <img
          src="https://cdn.prod.website-files.com/61e596b2753b2c6776cc0abb/65d27a8ce03c01cd33f87bef_Frame%20427318970.svg"
          loading="lazy"
          alt="Custom Cursor"
          className="cursor-image"
        />
      </div>
    </div>
  );
}
