"use client";

import ProductCard from "./components/CardProduct/CardProduct";
import { producto } from "../util/productos";

const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "space-between",
};

const cardStyles = {
  flex: "1 1 300px",
};

function Home() {
  return (
    <>
      <div style={containerStyles}>
        {producto.map((product) => (
          <ProductCard key={product.id} product={product} style={cardStyles} />
        ))}
      </div>
    </>
  );
}

export default Home;
