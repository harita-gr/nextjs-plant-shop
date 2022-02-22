//Option 2 : Fetch products on client side (in useEffect)
// directly from an external API
import Head from "next/head";
import {useEffect,useState} from 'react';
import Title from "../components/Title";
import { getProducts } from "../lib/products";

function HomePage() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    //getProducts is async. So handling promise
     getProducts().then(setProducts);
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
