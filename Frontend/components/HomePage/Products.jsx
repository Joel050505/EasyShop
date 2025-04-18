"use client";
import {useState, useEffect} from "react";
import useProduct from "@/context/ProductContext";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "@/components/ui/ProductCard";
import Loader from "../Ui/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Products() {
  const [amount, setAmount] = useState(6);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const {products} = useProduct();

  //////
  // Initialize cart from localStorage or empty array
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to handle adding/removing items from cart
  const handleAddToCart = (product) => {
    // Check if product is already in cart
    const isInCart = cart.some((item) => item.id === product.id);

    if (isInCart) {
      // Remove from cart
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    } else {
      // Add to cart
      setCart([...cart, {...product, quantity: 1}]);
    }
  };
  /////

  // Function to toggle category selection
  const toggleCategory = (value) => {
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const categoryMatch =
      category.length === 0 ||
      category.includes(product.category.toLowerCase());
    return nameMatch && categoryMatch;
  });

  // Function to load more products, set in 1 seconds and increment by 6
  const loadMore = () => {
    setTimeout(() => {
      setAmount((prev) => prev + 6);
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-start justify-items-start items-start gap-2">
        <div className="md:flex-row flex flex-col items-center justify-start gap-5">
          <ProductsHeader
            search={search}
            setSearch={setSearch}
            category={category}
            toggleCategory={toggleCategory}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={filteredProducts.slice(0, amount).length} // Current page of items
        next={loadMore} // Function to load more, see above
        hasMore={filteredProducts.length > amount} // Check if there are more products to load
        loader={<Loader />} // Loader component
        scrollThreshold={0.9} // Trigger loadMore when 90% of the page is scrolled
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center p-4">
          {filteredProducts.length === 0 ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            filteredProducts
              .slice(0, amount)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  cart={cart}
                />
              ))
          )}
        </div>
      </InfiniteScroll>
    </>
  );
}
