"use client";
import useProduct from "@/context/ProductContext";
import {useState} from "react";

export default function Products() {
  const [amount, setAmount] = useState(6);
  const [search, setSearch] = useState("");
  const {products} = useProduct();

  return (
    <>
      <label className="input md:flex hidden">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          value={search}
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="Search"
        />
      </label>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center p-4">
        {products.slice(0, amount).map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 w-96 flex justify-between shadow-sm"
          >
            <figure className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain"
              />
            </figure>

            <div className="card-body flex justify-between">
              <h2 className="card-title mb-12">{product.title}</h2>
              <div className="card-actions justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {amount < 16 ? (
          <button
            className="cursor-pointer btn btn-primary w-56 mt-4"
            onClick={() => {
              setAmount((prev) => prev + 3);
            }}
          >
            Show more
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
