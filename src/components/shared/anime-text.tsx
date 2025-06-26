"use client";
import React, { useEffect, useState, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const words = text.split(" ");
      const tempContainer = document.createElement("span");
      tempContainer.style.visibility = "hidden";
      tempContainer.style.whiteSpace = "nowrap";
      tempContainer.style.display = "inline-block";
      document.body.appendChild(tempContainer);

      let currentLine = "";
      const calculatedLines: string[] = [];

      words.forEach((word) => {
        tempContainer.textContent = currentLine + word + " ";
        if (tempContainer.offsetWidth > containerRef.current!.offsetWidth) {
          calculatedLines.push(currentLine.trim());
          currentLine = word + " ";
        } else {
          currentLine += word + " ";
        }
      });

      if (currentLine) {
        calculatedLines.push(currentLine.trim());
      }

      document.body.removeChild(tempContainer);
      setLines(calculatedLines);
    }
  }, [text]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {lines.map((line, index) => (
        <div
          key={index}
          className="block opacity-0 animate-fadeInUp"
          style={{ animationDelay: `${index * 0.5 + 0.5}s` }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export function SplitLines({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <p className={`overflow-hidden break-words ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block  opacity-0 animate-fadeInUp"
          style={{ animationDelay: `${i * 0.05}s`, marginRight: "0.25ch" }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
