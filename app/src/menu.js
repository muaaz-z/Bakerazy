import React, { useContext } from "react";
import "./menu.css";
import { End, Navbar } from "./main";
import "./main.css";
import { CartContext } from "./cartcontext";

export function MenuPage() {
  return (
    <div>
      <Navbar />
      <div className="menu-section"></div>
      <Menu />
      <End />
    </div>
  );
}

function AddToCartButton({ product, addToCart }) {
  return (
    <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  );
}

export default function Menu() {
  const cartContext = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Chocolate Cake",
      description: "Rich and moist chocolate cake.",
      price: 2000,
      image: "/images/choco.jpeg",
    },
    {
      id: 2,
      name: "Vanilla cake",
      description: "Classic vanilla cake with buttercream.",
      price: 500,
      image: "/images/vanilla.jpeg",
    },
    {
      id: 3,
      name: "Strawberry Cake",
      description: "Delicious strawberry cake with pink frosting.",
      price: 2500,
      image: "/images/strawberry.jpeg",
    },
    {
      id: 4,
      name: "Brownies",
      description: "Box of 6 nutella brownies.",
      price: 1500,
      image: "/images/brownie.jpeg",
    },
    {
      id: 5,
      name: "Cupcake",
      description: "Box of 6 cupcakes.",
      price: 1800,
      image: "/images/cupcake.jpeg",
    },
    {
      id: 6,
      name: "Chocolate Chip Cookies",
      description: "Box of 6 cookies.",
      price: 700,
      image: "/images/cookie.jpeg",
    },
    {
      id: 7,
      name: "Football cake",
      description: "Creamy customized cake.",
      price: 2200,
      image: "/images/football.jpeg",
    },
    {
      id: 8,
      name: "Donuts",
      description: "Box of 6 donuts.",
      price: 800,
      image: "/images/donut.jpeg",
    },
    {
      id: 9,
      name: "Superman Cake",
      description: "customised cake.",
      price: 2000,
      image: "/images/superman.jpeg",
    },
    {
      id: 10,
      name: "Art cake",
      description: "Classic vanilla cake with artistic touch.",
      price: 500,
      image: "/images/art.jpeg",
    },
    {
      id: 11,
      name: "Dholki Cake",
      description: "Delicious customised dholki cake.",
      price: 2500,
      image: "/images/dholki.jpeg",
    },
    {
      id: 12,
      name: "FLower Bouquet",
      description: "6 cupcakes bouquet.",
      price: 1500,
      image: "/images/flower.jpeg",
    },
    {
      id: 13,
      name: "Beauty with brains",
      description: "I love Math Cake.",
      price: 1800,
      image: "/images/brains.jpeg",
    },
    {
      id: 14,
      name: "Starry Night cake",
      description: "Customised chocolate cake.",
      price: 700,
      image: "/images/night.jpeg",
    },
    {
      id: 15,
      name: "Pakistan Day",
      description: "box of 12 customised cupcakes.",
      price: 2200,
      image: "/images/pak.jpeg",
    },
    {
      id: 16,
      name: "Chocolate Overdose",
      description: "2 pound chocolate cake.",
      price: 800,
      image: "/images/kitkat.jpeg",
    },
  ];

  return (
    <div className="menu-page">
      <h1 className="menu-heading">Our Menu</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">Rs{product.price}</p>
            <AddToCartButton
              product={product}
              addToCart={cartContext.addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
