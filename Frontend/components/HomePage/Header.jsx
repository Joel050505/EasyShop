"use client";
import {useState} from "react";
import HamburgerMenu from "../Ui/HamburgerMenu";
import {BsShop} from "react-icons/bs";
import {IoPersonCircle} from "react-icons/io5";
import {motion, AnimatePresence} from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-gray-400 text-black">
      {/* mobile header that will pop out when clicked on the hamburger icon */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{x: "-100%", opacity: 0}}
            animate={{x: 0, opacity: 100}}
            exit={{x: "-100%", opacity: 0}}
            transition={{duration: 0.9}}
            className="absolute top-0 left-0 w-6/12 h-screen bg-white z-50 p-4 pt-6"
          >
            <div className="flex items-center gap-8 pl-10">
              <BsShop size={30} />
              <p className="font-mono text-xl">Easyshop</p>
            </div>
            <div className="flex flex-col gap-4 py-2 text-xl pt-8">
              <a href="">Home</a>
              <a href="">Clothes</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex items-center gap-8">
        <HamburgerMenu open={open} setOpen={setOpen} />
        <div className="flex items-center gap-4">
          <BsShop size={30} />
          <p className="font-mono text-xl">Easyshop</p>
        </div>
      </nav>

      <div>
        <button className="bg-gray-200 rounded-xl flex items-center px-4 py-1 justify-center gap-2">
          <p>Sign in</p>
          <IoPersonCircle size={40} />
        </button>
      </div>
    </header>
  );
}
