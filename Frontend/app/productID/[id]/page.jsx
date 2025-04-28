"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductCard from "@/components/Ui/ProductCard";
import Reviews from "@/components/Ui/CustomerReviews";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id; // This gets the product ID from the route

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function getProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    getProduct();
  }, [id]);

  if (!product)
    return (
      <div>
        {" "}
        <span className="loading loading-bars loading-lg"></span>{" "}
      </div>
    );
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 mt-4 gap-10">
      {/*container 1*/}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-96 h-96 rounded-lg shadow-lg"
        />
      </div>
      {/*container 2*/}
      <div className="flex flex-col gap-5">
        <small className="text-md font-semibold text-gray-400">
          {product.category.toUpperCase()}
        </small>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-2xl text-left font-semibold text-blue-500">
          ${product.price}
        </p>
        <p
          className="text-md font-medium
         text-gray-400"
        >
          {product.description}
        </p>

        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2 text-sm">
            <GiCheckMark /> Premium Quality
          </li>
          <li className="flex items-center gap-2">
            <GiCheckMark /> Designed for maximun durability
          </li>
          <li className="flex items-center gap-2">
            <GiCheckMark /> 1-year warranty included
          </li>
          <li className="flex items-center gap-2">
            <GiCheckMark /> Fast shipping worldwide
          </li>
        </ul>

        <div className="flex flex-row gap-2 items-center">
          <p className="text-md">Qantity:</p>{" "}
          <input
            type="number"
            className="border w-12 py-0.5 rounded-md"
            placeholder="1"
          />
        </div>
        <div className="flex flex-row gap-2">
          <button className=" btn btn-primary ">Add to Cart</button>
          <button className="btn btn-outline btn-primary">
            Save for Later
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold text-xl">Customer reviews</h1>
        <div className="w-full border-b border-gray-300" />
      </div>

      <Reviews
        text="I absolutely love this product! It exceeded all my expectations. The quality is top-notch, and it's very easy to use. I would highly recommend it to anyone looking for something reliable and efficient."
        date="April 25, 2025"
        name="Global review"
        rating={product.rating.rate}
      />

      {/* <Reviews
        name="Leoa"
        date="april 23, 2025"
        text="This product has been a game-changer for me! It works exactly as described, and I couldn’t be more pleased with the results. It’s affordable, well-made, and I use it every day."
      /> */}
    </div>
  );
}

// return (
//   <div>
//     <h1>{product.title}</h1>
//     <div>
//       <img src={product.image} alt={product.title} className="w-64 h-64" />
//       <div>
//         <p>${product.price}</p>
//         <p>{product.description}</p>
//         <button>Buy Now</button>
//       </div>
//     </div>
//     <button onClick={() => router.back()}>Back</button>
//   </div>
// );
