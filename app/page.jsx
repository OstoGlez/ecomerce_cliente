"use client";

import ProductCard from "./components/CardProduct/CardProduct";

const producto = [
  {
    id: 1,
    name: "Pudin",
    status: "NEW",
    description: " Sabor a Vainilla y Canela",
    price: 7,
    existence: 20,
    image: "/pudin.png",
    alt: "Pudin",
  },
  {
    id: 2,
    name: "Espagueti",
    status: "NEW",
    description: " Trigo Seleccionado",
    price: 4,
    existence: 50,
    image: "/Espaguetis.png",
    alt: "Espaguetis",
  },
  {
    id: 3,
    name: "Bolsa de Pollo",
    status: "NEW",
    description: " Fresco y libre de Biotecnologia",
    price: 8,
    existence: 30,
    image: "/Bolsa de Pollo.png",
    alt: "Bolsa de Pollo",
  },
  {
    id: 4,
    name: "Aceite de Comer",
    status: "NEW",
    description: " Frasco de 1 Litro",
    price: 10,
    existence: 35,
    image: "/Aceite de Comer.png",
    alt: "Aceite de Comer",
  },
];

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
  return <></>;
}

export default Home;

/*<div style={containerStyles}>
        {producto.map((product) => (
          <ProductCard key={product.id} product={product} style={cardStyles} />
        ))}
      </div>*/
