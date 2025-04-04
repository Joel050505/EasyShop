import React from "react";

export default function HamburgerMenu({setOpen, open}) {
  return (
    <div
      className="w-8 h-8 flex flex-col justify-between cursor-pointer z-50"
      onClick={() => setOpen(!open)}
    >
      <span
        className={`h-1 bg-black rounded transition-all  duration-300 ${
          open ? "rotate-45 translate-y-3.5" : ""
        }`}
      ></span>
      <span
        className={`h-1 bg-black rounded transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`h-1 bg-black rounded transition-all duration-300 ${
          open ? "-rotate-45 -translate-y-3.5" : ""
        }`}
      ></span>
    </div>
  );
}
