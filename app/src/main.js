import { Link, useNavigate } from "react-router-dom";
import "./main.css";
import React, { useContext } from "react";
import { CartContext } from "./cartcontext";

export function Navbar() {
  const cartContext = useContext(CartContext);
  const cart = cartContext.cart;
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li className="dropdown2">
          <span>About Us</span>
          <div className="dropdown-content2">
            <p>
              Welcome to Bakerazy, where baking meets creativity and passion! At
              Bakerazy, we believe that every bite should tell a story, and
              every treat should spark joy. Founded with a love for baking and a
              mission to bring smiles to your special moments, we are your
              one-stop destination for all things sweet, savory, and delightful.
              Our team of skilled bakers and artists works tirelessly to craft
              delicious, beautifully designed baked goods. From classic cakes to
              custom cupcakes, artisan cookies, and everything in between, we
              ensure each creation is made with the finest ingredients and a
              generous sprinkle of love.
            </p>
          </div>
        </li>
        <li>
          <img src="/images/cake2.png" alt="cake" width="50" height="50" />
        </li>
        <li className="dropdown">
          <span>Social Media</span>
          <div className="dropdown-content">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </li>
        <li>
          <Link to="/customize">Customise</Link>
        </li>
        <li>
          <div className="nav-checkout">
            <Link to="/checkout">CheckOut</Link>
            {cart.length > 0 && (
              <div className="cart-count">
                <h6>{cart.length}</h6>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="background-section"></div>
      <Content />
      <ContentWithButton />
      <ProductPage />
      <End />
    </div>
  );
}

export function Content() {
  return (
    <div className="content-container">
      <img className="content-image" src="/images/img.png" alt="Bakerazy" />
      <div className="content-text">
        <h1>Welcome to Bakerazy</h1>
        <p>
          At Bakerazy, we believe desserts are more than just treats—they’re
          edible expressions of happiness, love, and creativity. Our journey
          began with a simple dream: to create irresistible confections that
          bring people closer and spark moments of pure joy.
        </p>
        <p>
          From velvety cakes to melt-in-your-mouth pastries, every creation at
          Bakerazy is crafted with passion, precision, and a touch of magic to
          make your sweetest dreams a reality.
        </p>
        <p>
          Whether you’re celebrating life’s big milestones or indulging in
          everyday delights, Bakerazy is here to add a layer of sweetness to
          every moment. After all, life is crazy, but it’s sweeter with
          Bakerazy!
        </p>
      </div>
    </div>
  );
}

export function ContentWithButton() {
  const history = useNavigate();

  const handleMenuClick = () => {
    history("/menu");
  };

  return (
    <div className="content-container-with-bg">
      <div className="text-container">
        <h2 className="heading">INTRODUCING OUR</h2>
        <h3 className="subheading">
          Wide Variety of Delectable Cupcakes and Cookies
        </h3>
        <p>
          At Bakerazy, we redefine the art of baking by blending creativity,
          passion, and the finest ingredients into every cupcake and cookie.
        </p>
        <p>
          From the delicate swirl of frosting on our cupcakes to the
          irresistible crunch of our cookies, each creation is a testament to
          our commitment to excellence. A Bakerazy treat not only tantalizes
          your taste buds but also sparks joy with its elegant presentation.
        </p>
        <p>
          Dive into a world of sweetness where every bite tells a story, every
          flavor ignites a memory, and every moment feels like a celebration.
          Infused with a touch of magic, our cupcakes and cookies will take you
          on an unforgettable journey of pure indulgence.
        </p>
        <button className="menu-button" onClick={handleMenuClick}>
          Bakerazy Menu
        </button>
      </div>
      <div className="image-container">
        <img
          className="content-image"
          src="/images/cake3.png"
          alt="Bakerazy Cupcakes and Cookies"
        />
        <img
          className="content-image"
          src="/images/cake4.png"
          alt="Bakerazy Cupcakes and Cookies"
        />
      </div>
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

export default function ProductPage() {
  const cartContext = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Mango Delight",
      description: "A tasty cookie.",
      price: 2000,
      image: "/images/mango.jpeg",
    },
    {
      id: 2,
      name: "1 Pound Birthday",
      description: "Delicious cupcake.",
      price: 1500,
      image: "/images/bday.jpeg",
    },
    {
      id: 3,
      name: "Mango Delight",
      description: "A tasty cookie.",
      price: 2000,
      image: "/images/grad.jpeg",
    },
    {
      id: 4,
      name: "1 Pound Birthday",
      description: "Delicious cupcake.",
      price: 1500,
      image: "/images/mil.jpeg",
    },
  ];

  return (
    <div className="product-page">
      <div className="left-image">
        <img src="/images/main-product.jpeg" alt="Main Product" />
      </div>
      <div className="right-products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
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

export function End() {
  return (
    <div>
      <div className="ending-section"></div>
    </div>
  );
}
