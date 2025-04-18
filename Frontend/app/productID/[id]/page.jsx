"use client";
import React, {useState, useEffect} from "react";
import {useParams, useRouter} from "next/navigation";

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
    <div>
      <h1>{product.title}</h1>
      <div>
        <img src={product.image} alt={product.title} className="w-64 h-64" />
        <div>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button>Buy Now</button>
        </div>
      </div>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
