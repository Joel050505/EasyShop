"use client";
import {useState} from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 border text-black">
      <div>logo</div>
      <nav>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
}
