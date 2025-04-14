"use client";
import useProduct from "@/context/ProductContext";
import { useState } from "react";

export default function Products() {
  const [amount, setAmount] = useState(6);
  const [search, setSearch] = useState("");
  const { products } = useProduct();

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return nameMatch;
  });
  // Fix some other day
  // function filteredProductsByCategory() {
  //   filteredProducts.filter((product) => {
  //     const categoryMatch = product.category
  //       .toLowerCase()
  //       .includes("men's clothing");
  //     return categoryMatch;
  //   });
  // }

  return (
    <>
      <div className="flex flex-start justify-items-start items-start gap-2">
        <label className="input md:flex hidden w-64">
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
        <button
          onClick={() => setSearch("mens"[0].toLocaleUpperCase() + "ens")}
          className="btn btn-outline"
        >
          Men
        </button>
        <button
          onClick={() => setSearch("women's"[0].toLocaleUpperCase() + "omen's")}
          className="btn btn-outline"
        >
          Women
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center p-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 col-span-full">
            No products found!
          </div>
        ) : (
          filteredProducts.slice(0, amount).map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 w-96 flex justify-between shadow-sm hover:scale-105 transition-transform duration-450 ease-in-out cursor-pointer"
            >
              <figure className="p-4 border-b-2 border-gray-50">
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
          ))
        )}
      </div>

      <div>
        {amount < 16 && filteredProducts.length > amount && (
          <button
            className="cursor-pointer btn btn-primary w-56 mt-4"
            onClick={() => {
              setAmount((prev) => prev + 3);
            }}
          >
            Show more
          </button>
        )}
      </div>
    </>
  );
}
