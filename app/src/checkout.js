import { useContext } from "react";
import { CartContext } from "./cartcontext";
import { Navbar } from "./main";
import "./checkout.css";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className="checkout-header">Checkout</div>
      <CartList />
    </div>
  );
};

const CartList = () => {
  const cartContext = useContext(CartContext);
  const cart = cartContext.cart;
  const onPlaceOrderClick = () => {
    cartContext.clearCart();
    alert("Order placed successfully");
  };
  return (
    <div className="cart-list">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartContext.removeFromCart}
        />
      ))}
      {cart.length === 0 ? (
        <h1>Add some items to the cart to place your order</h1>
      ) : (
        <div className="total-and-place-order">
          <div className="total">
            <h1 className="cart-total-title">Total:</h1>
            <h1 className="cart-total">
              {cart.reduce((total, curVal) => {
                return total + curVal.price;
              }, 0)}
            </h1>
          </div>
          <button className="place-order-button" onClick={onPlaceOrderClick}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="item-name-desc">
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
      </div>
      <div className="price-and-remove">
        <h4>{item.price}</h4>
        <RemoveFromCartButton onRemove={() => onRemove(item.id)} />
      </div>
    </div>
  );
};

const RemoveFromCartButton = ({ onRemove }) => {
  return (
    <button className="remove-from-cart" onClick={onRemove}>
      X
    </button>
  );
};

export default Checkout;
