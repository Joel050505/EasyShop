import react, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function Reviews({ name, date, text, rating }) {
  const [count, setCount] = useState([1, 2, 3, 4, 5]);

  function getRating(rating) {
    if (rating < 1) {
    }
  }

  return (
    <div className="ml-10 mr-10 flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="font-bold"> {name} </h2>
          <p className="opacity-60"> {date} </p>
        </div>
        {/* stars */}
        <div className="flex gap-[2px]">
          {count.map((item) => {
            return (
              <div>
                {" "}
                {item === true ? (
                  <IoIosStarOutline className="text-yellow-600" />
                ) : (
                  <MdOutlineStarHalf />
                )}
              </div>
            );
          })}
        </div>
        <p>{text}</p>
        <div className="w-full border-b border-gray-300" />
      </div>
    </div>
  );
}
