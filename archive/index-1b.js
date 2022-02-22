//Option 1c : Fetch products on server side (in getServerSideProps)

import Head from "next/head";
import Title from "../components/Title";
import { getProducts } from "../lib/products";

export async function getServerSideProps() {
  console.log("[HomePage] getServerSideProps");
  const products = await getProducts();
  return { props: { products } };
}

function HomePage({ products }) {
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
