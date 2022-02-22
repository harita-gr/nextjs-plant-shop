//Option 2 : Fetch products on client side (in useEffect)
// directly from an internal API route
import Head from "next/head";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { getProducts } from "../lib/products";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //creating an async fn and immediately evoking it.
    (async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-2 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
