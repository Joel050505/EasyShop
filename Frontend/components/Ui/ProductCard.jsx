import Link from "next/link";
import {useState} from "react";

export default function ProductCard({product, onAddToCart, cart}) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if product is in cart
  const isInCart = cart?.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col">
      {/* Image container with hover effect - this is its own card */}
      <div
        className="relative overflow-hidden bg-white shadow-sm rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/productID/${product.id}`}>
          <figure className="p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </figure>
        </Link>

        {/* Add to cart overlay that appears on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 text-white text-center py-3 cursor-pointer transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          } ${
            isInCart
              ? "bg-red-600 hover:bg-red-700"
              : "bg-black bg-opacity-70 hover:bg-opacity-80"
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </div>
      </div>

      {/* Product info completely outside, no border */}
      <div className="mt-3 px-1">
        <Link href={`/productID/${product.id}`}>
          <h2 className="font-medium text-sm md:text-base line-clamp-2">
            {product.title}
          </h2>
          <span className="text-lg text-right font-bold block mt-1">
            ${product.price}
          </span>
        </Link>
      </div>
    </div>
  );
}
// import Link from "next/link";

// export default function ProductCard({product}) {
//   return (
//     <Link href={`/productID/${product.id}`} key={product.id}>
//       <div className="card bg-base-100 flex justify-between shadow-sm hover:scale-105 transition-transform duration-450 ease-in-out cursor-pointer">
//         <figure className="p-4 border-b-2 border-gray-50">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="h-48 object-contain"
//           />
//         </figure>

//         <div className="card-body flex justify-between">
//           <h2 className="card-title mb-12">{product.title}</h2>
//           <div className="card-actions justify-between items-center">
//             <span className="text-lg font-bold">${product.price}</span>
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }
